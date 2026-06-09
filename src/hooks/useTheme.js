// 切换主题功能

export default function useTheme() {
  const theme = ['red', 'blue']

  function changeThemeFn(type) {
    let classNme = theme[type]
    document.documentElement.className = classNme
    // if(!classNme) {
    //   // 重置全局主题类名
    //   document.documentElement.className = ''
    //   return
    // }
    // document.documentElement.className = classNme
  }
  return { changeThemeFn } 
}