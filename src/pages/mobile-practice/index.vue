<template>
  <main class="book-city">
    <header class="top-bar">
      <div class="profile">
        <div class="avatar">
          <span></span>
        </div>
        <span>未登录</span>
      </div>
      <div class="top-actions">
        <button class="icon-button search" aria-label="搜索"></button>
        <button class="shelf-button" aria-label="书架">
          <span class="shelf-icon"></span>
          书架
        </button>
      </div>
    </header>

    <section class="banner">
      <div class="banner-badge">自营<br />热卖</div>
      <div class="banner-people">
        <div class="person woman"></div>
        <div class="flowers"></div>
        <div class="person man"></div>
      </div>
      <div class="banner-copy">
        <strong>一纸核图，半生重逢</strong>
        <span>中年破产做保洁，反手拿下退休院长</span>
      </div>
      <div class="banner-dots">
        <i></i>
        <i class="active"></i>
        <i></i>
      </div>
    </section>

    <nav class="quick-nav" aria-label="分类导航">
      <a v-for="item in navItems" :key="item.label" href="#">
        <span class="nav-icon" :class="item.className"></span>
        <span>{{ item.label }}</span>
      </a>
    </nav>

    <section class="section-block">
      <div class="section-title">
        <h2>畅销必读</h2>
        <a href="#">看更多 &gt;</a>
      </div>

      <article class="feature-book">
        <div class="cover hero-cover cover-dark">
          <span>逍遥姑爷</span>
        </div>
        <div class="feature-info">
          <h3>逍遥姑爷</h3>
          <p>穿越成亲家赘婿，前世卷轴的林白，准备安心当个姑爷混吃等死，可不想，总有人惦记他...</p>
          <span>太九 · 历史</span>
        </div>
      </article>

      <div class="book-grid">
        <article v-for="book in hotBooks" :key="book.title" class="book-card">
          <div class="cover" :class="book.coverClass">
            <span>{{ book.coverText }}</span>
          </div>
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}</p>
          <button aria-label="加入书架"></button>
        </article>
      </div>
    </section>

    <section class="section-block weekly">
      <div class="section-title">
        <h2>一周精选</h2>
        <a href="#">看更多 &gt;</a>
      </div>

      <article class="feature-book">
        <div class="cover hero-cover cover-paper">
          <span>书法学</span>
        </div>
        <div class="feature-info">
          <h3>鲁迅文学的内面——细读与通讲</h3>
          <p>本书为作者在近年发表的鲁迅研究讲稿和学术论文基础上整理条贯而成的鲁迅研究专著，...</p>
          <span>张业松 · 古典文学</span>
        </div>
      </article>

      <div class="book-grid">
        <article v-for="book in weeklyBooks" :key="book.title" class="book-card">
          <div class="cover" :class="book.coverClass">
            <span>{{ book.coverText }}</span>
          </div>
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}</p>
          <button aria-label="加入书架"></button>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
const navItems = [
  { label: '男生', className: 'boys' },
  { label: '女生', className: 'girls' },
  { label: '出版', className: 'publish' },
  { label: '分类', className: 'category' },
  { label: '排行', className: 'rank' }
]

const hotBooks = [
  { title: '锦屏春', author: '谢安年', coverText: '锦屏春', coverClass: 'cover-green' },
  { title: '孤心武', author: '刘心武', coverText: '孤心武', coverClass: 'cover-ink' },
  { title: '爱谁谁', author: '风流书呆', coverText: '爱谁谁', coverClass: 'cover-red' },
  { title: '花神录（全二册）', author: '柏夏', coverText: '花神录', coverClass: 'cover-sea' }
]

const weeklyBooks = [
  { title: '灾厄祭祀', author: '黑山老鬼', coverText: '灾厄祭祀', coverClass: 'cover-fire' },
  { title: '读透经济学的8对关键词', author: '宋清辉', coverText: '读透经济学', coverClass: 'cover-business' },
  { title: '开局假装我师傅是天人', author: '江上渔', coverText: '师傅天人', coverClass: 'cover-city' },
  { title: '藏妖词', author: '知夏', coverText: '藏妖词', coverClass: 'cover-beauty' }
]
</script>

<style scoped lang="scss">
.book-city {
  width: min(100%, 375px);
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  color: #20232a;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  padding: 0 12px;
  background: #fbfbfc;
  border-bottom: 1px solid #f2f2f2;
}

.profile,
.top-actions,
.shelf-button {
  display: flex;
  align-items: center;
}

.profile {
  gap: 8px;
  color: #7f8a99;
  font-size: 14px;
}

.avatar {
  position: relative;
  width: 34px;
  height: 34px;
  border: 2px solid #d7e2f3;
  border-radius: 50%;
  background: linear-gradient(145deg, #f8fbff, #eef5ff);

  &::before,
  &::after,
  span {
    position: absolute;
    content: "";
    border: 2px solid #c6d5ea;
    border-radius: 50%;
  }

  &::before {
    top: 9px;
    left: 7px;
    width: 5px;
    height: 5px;
  }

  &::after {
    top: 9px;
    right: 7px;
    width: 5px;
    height: 5px;
  }

  span {
    left: 9px;
    bottom: 7px;
    width: 12px;
    height: 7px;
    border-top: 0;
    border-radius: 0 0 12px 12px;
  }
}

.top-actions {
  gap: 18px;
}

button {
  border: 0;
  background: transparent;
  font: inherit;
}

.icon-button {
  width: 28px;
  height: 28px;
}

.search {
  position: relative;

  &::before {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 13px;
    height: 13px;
    border: 2px solid #5f6875;
    border-radius: 50%;
    content: "";
  }

  &::after {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 10px;
    height: 2px;
    border-radius: 2px;
    background: #5f6875;
    transform: rotate(45deg);
    transform-origin: left center;
    content: "";
  }
}

.shelf-button {
  gap: 6px;
  height: 30px;
  padding: 0;
  color: #4a5361;
  font-size: 14px;
}

.shelf-icon {
  position: relative;
  width: 23px;
  height: 21px;
  border-bottom: 2px solid #8c96a4;

  &::before,
  &::after {
    position: absolute;
    bottom: 0;
    width: 5px;
    border: 2px solid #8c96a4;
    border-bottom: 0;
    content: "";
  }

  &::before {
    left: 1px;
    height: 11px;
  }

  &::after {
    left: 9px;
    height: 17px;
    box-shadow: 8px 4px 0 -2px #fff, 8px 4px 0 0 #8c96a4;
  }
}

.banner {
  position: relative;
  height: 86px;
  margin: 2px 12px 0;
  overflow: hidden;
  border-radius: 4px;
  background:
    radial-gradient(circle at 20% 34%, rgba(255, 255, 255, 0.86) 0 13%, transparent 14%),
    linear-gradient(100deg, #e9c57f 0%, #d8a85d 35%, #8a6a3b 62%, #3b2615 100%);
  box-shadow: 0 1px 5px rgba(27, 24, 20, 0.2);
}

.banner-badge {
  position: absolute;
  top: 8px;
  left: 10px;
  width: 18px;
  padding: 4px 0;
  border-radius: 2px;
  color: #fff;
  background: #f04c23;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  z-index: 2;
}

.banner-people {
  position: absolute;
  inset: 0;
}

.person {
  position: absolute;
  bottom: 0;
  width: 54px;
  height: 76px;
  border-radius: 26px 26px 4px 4px;

  &::before {
    position: absolute;
    left: 16px;
    top: -5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f3c79d;
    content: "";
  }
}

.woman {
  left: 52px;
  background: linear-gradient(#fff7ea 0 46%, #fbf3de 47% 100%);

  &::after {
    position: absolute;
    left: 15px;
    top: -7px;
    width: 26px;
    height: 15px;
    border-radius: 18px 18px 8px 8px;
    background: #7f5437;
    content: "";
  }
}

.man {
  left: 174px;
  background: linear-gradient(#111a24 0 48%, #172231 49% 100%);

  &::after {
    position: absolute;
    left: 17px;
    top: -8px;
    width: 23px;
    height: 13px;
    border-radius: 14px 14px 8px 8px;
    background: #111;
    content: "";
  }
}

.flowers {
  position: absolute;
  left: 89px;
  bottom: 0;
  width: 65px;
  height: 31px;
  border-radius: 50% 50% 0 0;
  background:
    radial-gradient(circle at 12px 12px, #fff 0 4px, transparent 5px),
    radial-gradient(circle at 28px 7px, #fff 0 4px, transparent 5px),
    radial-gradient(circle at 45px 13px, #fff 0 4px, transparent 5px),
    linear-gradient(135deg, #5b9d4f, #9bc765);
}

.banner-copy {
  position: absolute;
  right: 13px;
  top: 18px;
  width: 154px;
  color: #fff;
  text-align: right;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);

  strong {
    display: block;
    font-size: 18px;
    font-weight: 800;
  }

  span {
    display: block;
    margin-top: 11px;
    font-size: 11px;
    font-weight: 700;
  }
}

.banner-dots {
  position: absolute;
  bottom: 5px;
  left: 50%;
  display: flex;
  gap: 4px;
  transform: translateX(-50%);

  i {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
  }

  .active {
    background: #fff;
  }
}

.quick-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 30px 12px 27px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #323a45;
    font-size: 13px;
    text-decoration: none;
  }
}

.nav-icon {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  box-shadow: 0 8px 12px rgba(30, 80, 120, 0.1);

  &::before,
  &::after {
    position: absolute;
    content: "";
  }
}

.boys {
  border-radius: 8px 8px 18px 18px;
  background: linear-gradient(145deg, #b4efc7, #59c575);

  &::before {
    left: 8px;
    top: 13px;
    width: 11px;
    height: 5px;
    border-radius: 0 0 9px 9px;
    border-bottom: 3px solid #fff;
  }
}

.girls {
  border-radius: 18px 8px 18px 8px;
  background: linear-gradient(145deg, #ff91d0, #d963b6);

  &::before {
    right: -2px;
    top: 6px;
    width: 8px;
    height: 8px;
    border: 2px solid #ffcfec;
    border-left: 0;
    border-bottom: 0;
    transform: rotate(20deg);
  }

  &::after {
    left: 10px;
    bottom: -4px;
    width: 10px;
    height: 8px;
    border-radius: 50%;
    background: #ffcfec;
  }
}

.publish {
  background: linear-gradient(145deg, #73c5ff, #3f86d9);

  &::before {
    right: 5px;
    top: 6px;
    width: 7px;
    height: 10px;
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.65);
  }

  &::after {
    left: 7px;
    bottom: 7px;
    width: 13px;
    height: 2px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.7);
  }
}

.category {
  background:
    radial-gradient(circle at 7px 7px, #ffc79f 0 6px, transparent 7px),
    radial-gradient(circle at 22px 7px, #ff8066 0 6px, transparent 7px),
    radial-gradient(circle at 7px 22px, #ff8066 0 6px, transparent 7px),
    radial-gradient(circle at 22px 22px, #ffa786 0 6px, transparent 7px);
  box-shadow: none;
}

.rank {
  background: linear-gradient(145deg, #8be4df, #4e9be8);

  &::before {
    left: 8px;
    top: 8px;
    width: 14px;
    height: 14px;
    clip-path: polygon(50% 0, 62% 35%, 100% 35%, 69% 57%, 80% 100%, 50% 75%, 20% 100%, 31% 57%, 0 35%, 38% 35%);
    background: #fff;
  }
}

.section-block {
  padding: 0 12px 24px;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  h2 {
    margin: 0;
    color: #111;
    font-size: 17px;
    font-weight: 800;
  }

  a {
    color: #008df5;
    font-size: 12px;
    text-decoration: none;
  }
}

.feature-book {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 13px;
  margin-bottom: 16px;
}

.cover {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: #d9e2eb;
  box-shadow: 0 1px 4px rgba(20, 24, 30, 0.14);

  span {
    position: absolute;
    inset: auto 7px 9px;
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.2;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
  }
}

.hero-cover {
  width: 74px;
  height: 98px;
}

.cover-dark {
  background:
    linear-gradient(145deg, rgba(26, 122, 161, 0.7), rgba(10, 19, 39, 0.95)),
    radial-gradient(circle at 72% 28%, #1e3049 0 16%, transparent 17%);

  &::before {
    right: 7px;
    top: 14px;
    width: 24px;
    height: 31px;
    border-radius: 48% 48% 38% 38%;
    background: #131c2d;
    box-shadow: inset 0 7px #263f61;
  }

  &::after {
    right: 13px;
    top: 24px;
    width: 13px;
    height: 16px;
    border-radius: 50%;
    background: #f5d0b4;
  }
}

.feature-info {
  min-width: 0;
  padding-top: 3px;

  h3 {
    margin: 0 0 8px;
    color: #111;
    font-size: 17px;
    font-weight: 800;
  }

  p {
    display: -webkit-box;
    min-height: 44px;
    margin: 0 0 10px;
    overflow: hidden;
    color: #949aa4;
    font-size: 13px;
    line-height: 1.7;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    color: #8c949e;
    font-size: 13px;
  }
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 15px;
}

.book-card {
  position: relative;
  min-width: 0;

  .cover {
    width: 74px;
    height: 98px;
    margin-bottom: 8px;
  }

  h3,
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h3 {
    margin: 0 0 4px;
    color: #12161d;
    font-size: 14px;
    font-weight: 800;
  }

  p {
    margin: 0;
    padding-right: 18px;
    color: #8f97a1;
    font-size: 12px;
  }

  button {
    position: absolute;
    right: 0;
    bottom: -2px;
    width: 14px;
    height: 14px;
    border: 1.5px solid #008eff;
    border-radius: 2px;

    &::before {
      position: absolute;
      left: 3px;
      top: -2px;
      width: 5px;
      height: 7px;
      border-right: 1.5px solid #008eff;
      border-bottom: 1.5px solid #008eff;
      background: #fff;
      content: "";
    }
  }
}

.cover-green {
  background:
    linear-gradient(180deg, rgba(240, 255, 222, 0.82), rgba(178, 211, 130, 0.95)),
    radial-gradient(circle at 35% 36%, #547b40 0 18%, transparent 19%);

  span {
    color: #244021;
    text-shadow: none;
  }
}

.cover-ink {
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.76), transparent 60%),
    linear-gradient(145deg, #f9f3eb, #b9c2d0);

  &::before {
    left: 8px;
    top: 17px;
    width: 32px;
    height: 42px;
    border-radius: 45% 45% 8px 8px;
    background: #f3c6a8;
    box-shadow: 18px 18px 0 -2px #49586a;
  }

  span {
    color: #2a3140;
    text-shadow: none;
  }
}

.cover-red {
  background:
    radial-gradient(circle at 50% 60%, #f0d9c9 0 23%, transparent 24%),
    linear-gradient(145deg, #fff5e7, #f5d6bf);

  span {
    color: #111;
    font-size: 17px;
    text-align: center;
    text-shadow: none;
  }
}

.cover-sea {
  background:
    radial-gradient(circle at 88% 52%, #ffbf35 0 16%, transparent 17%),
    linear-gradient(145deg, #effaf9, #88d8ea 55%, #2871b5);

  &::before {
    left: 0;
    bottom: 20px;
    width: 90px;
    height: 15px;
    background: rgba(255, 255, 255, 0.62);
    transform: rotate(-23deg);
  }
}

.weekly {
  padding-bottom: 8px;
}

.cover-paper {
  background:
    linear-gradient(90deg, #eee 0 1px, transparent 1px 100%) 0 0 / 11px 100%,
    linear-gradient(#fff, #f9f7f1);

  &::before {
    left: 9px;
    bottom: 12px;
    width: 48px;
    height: 18px;
    background: #b7373b;
  }

  span {
    color: #343434;
    writing-mode: vertical-rl;
    left: auto;
    right: 19px;
    bottom: 34px;
    font-size: 12px;
    text-shadow: none;
  }
}

.cover-fire {
  background:
    radial-gradient(circle at 50% 20%, #7f2fd1 0 18%, transparent 19%),
    linear-gradient(145deg, #16111e, #d84422);

  &::before {
    left: 13px;
    top: 16px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid rgba(255, 202, 88, 0.75);
  }
}

.cover-business {
  background: linear-gradient(145deg, #d7222f, #9d121c);

  span {
    inset: 17px 8px auto;
    font-size: 14px;
    text-align: center;
  }
}

.cover-city {
  background:
    linear-gradient(180deg, rgba(240, 249, 255, 0.86), rgba(76, 132, 168, 0.55)),
    linear-gradient(90deg, #8aa6b6 0 15%, #d7e4ee 15% 25%, #6f90a5 25% 42%, #f3f7fa 42% 52%, #7e9db1 52% 100%);

  &::before {
    left: 27px;
    bottom: 16px;
    width: 17px;
    height: 39px;
    border-radius: 10px 10px 0 0;
    background: #25364c;
  }
}

.cover-beauty {
  background:
    radial-gradient(circle at 47% 30%, #f7d1b7 0 14%, transparent 15%),
    linear-gradient(145deg, #2b1717, #b73b23);

  &::before {
    left: 30px;
    top: 12px;
    width: 28px;
    height: 42px;
    border-radius: 50% 50% 35% 35%;
    background: #2c1214;
  }
}
</style>
