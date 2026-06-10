<template>
  <div class="pdf-page">
    <div class="pdf-toolbar">
      <el-input
        v-model="pdfUrl"
        class="url-input"
        placeholder="请输入 PDF 地址"
        clearable
        @keyup.enter="loadPdf"
      />

      <el-button type="primary" :loading="loading" @click="loadPdf">
        预览
      </el-button>
      <el-button :disabled="!pdfUrl" @click="downloadPdf">
        下载
      </el-button>

      <el-divider direction="vertical" />

      <el-button :disabled="!pdfDoc || pageNumber <= 1 || loading" @click="previousPage">
        上一页
      </el-button>
      <span class="page-info">{{ pageNumber }} / {{ pageCount || 0 }}</span>
      <el-button :disabled="!pdfDoc || pageNumber >= pageCount || loading" @click="nextPage">
        下一页
      </el-button>

      <el-divider direction="vertical" />

      <el-button :disabled="!pdfDoc || scale <= minScale || loading" @click="zoomOut">
        缩小
      </el-button>
      <span class="scale-info">{{ Math.round(scale * 100) }}%</span>
      <el-button :disabled="!pdfDoc || scale >= maxScale || loading" @click="zoomIn">
        放大
      </el-button>
    </div>

    <div v-loading="loading" class="pdf-viewer">
      <el-empty v-if="!pdfDoc && !loading" description="请输入 PDF 地址并点击预览" />
      <canvas v-show="pdfDoc" ref="canvasRef" class="pdf-canvas" />
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs?url'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const defaultPdfUrl = 'https://www.orimi.com/pdf-test.pdf'
const minScale = 0.5
const maxScale = 3
const scaleStep = 0.2

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

const canvasRef = ref(null)
const pdfUrl = ref(defaultPdfUrl)
const pdfDoc = ref(null)
const pageNumber = ref(1)
const pageCount = ref(0)
const scale = ref(1)
const loading = ref(false)
let renderTask = null

const cancelRenderTask = () => {
  if (renderTask) {
    renderTask.cancel()
    renderTask = null
  }
}

const renderPage = async () => {
  if (!pdfDoc.value || !canvasRef.value) return

  cancelRenderTask()

  const page = await pdfDoc.value.getPage(pageNumber.value)
  const viewport = page.getViewport({ scale: scale.value })
  const canvas = canvasRef.value
  const context = canvas.getContext('2d')

  canvas.width = viewport.width
  canvas.height = viewport.height

  renderTask = page.render({
    canvasContext: context,
    viewport,
  })

  try {
    await renderTask.promise
  } catch (error) {
    if (error?.name !== 'RenderingCancelledException') {
      throw error
    }
  } finally {
    renderTask = null
  }
}

const loadPdf = async () => {
  const targetUrl = pdfUrl.value.trim()

  if (!targetUrl) {
    ElMessage.warning('请输入 PDF 地址')
    return
  }

  loading.value = true
  cancelRenderTask()

  try {
    const loadingTask = pdfjsLib.getDocument(targetUrl)
    const document = await loadingTask.promise

    pdfDoc.value = document
    pageNumber.value = 1
    pageCount.value = document.numPages
    scale.value = 1

    await nextTick()
    await renderPage()
  } catch (error) {
    pdfDoc.value = null
    pageNumber.value = 1
    pageCount.value = 0
    ElMessage.error('PDF 加载失败，请检查地址或跨域权限')
    console.error(error)
  } finally {
    loading.value = false
  }
}

const previousPage = async () => {
  if (pageNumber.value <= 1) return
  pageNumber.value -= 1
  await renderPage()
}

const nextPage = async () => {
  if (pageNumber.value >= pageCount.value) return
  pageNumber.value += 1
  await renderPage()
}

const zoomOut = async () => {
  if (scale.value <= minScale) return
  scale.value = Math.max(minScale, Number((scale.value - scaleStep).toFixed(2)))
  await renderPage()
}

const zoomIn = async () => {
  if (scale.value >= maxScale) return
  scale.value = Math.min(maxScale, Number((scale.value + scaleStep).toFixed(2)))
  await renderPage()
}

const downloadPdf = () => {
  const targetUrl = pdfUrl.value.trim()

  if (!targetUrl) {
    ElMessage.warning('请输入 PDF 地址')
    return
  }

  const link = document.createElement('a')
  link.href = targetUrl
  link.download = targetUrl.split('/').pop() || 'document.pdf'
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

onMounted(() => {
  loadPdf()
})

onBeforeUnmount(() => {
  cancelRenderTask()
})
</script>

<style scoped lang="scss">
.pdf-page {
  min-height: 100%;
  padding: 20px;
  background: #f5f7fb;
  box-sizing: border-box;
}

.pdf-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  margin-bottom: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgb(15 23 42 / 6%);
  overflow-x: auto;
}

.url-input {
  flex: 1 1 360px;
  min-width: 260px;
}

.page-info,
.scale-info {
  min-width: 56px;
  color: #334155;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
}

.pdf-viewer {
  min-height: 640px;
  padding: 24px;
  overflow: auto;
  background: #d9dee8;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-sizing: border-box;
}

.pdf-canvas {
  display: block;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 12px 32px rgb(15 23 42 / 18%);
}

@media (max-width: 768px) {
  .pdf-page {
    padding: 12px;
  }

  .pdf-toolbar {
    align-items: stretch;
    flex-wrap: wrap;
  }

  .url-input {
    flex-basis: 100%;
    min-width: 100%;
  }

  .pdf-viewer {
    min-height: 520px;
    padding: 12px;
  }
}
</style>
