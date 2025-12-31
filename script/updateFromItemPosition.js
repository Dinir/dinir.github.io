let stackArticles = []
let lastPassed = null

document.addEventListener("DOMContentLoaded", () => {
  stackArticles = [...document.querySelectorAll("div#stack article[id]")]
})

const getLastArticlePositionFrom = y => {
  let i = stackArticles.findIndex(v => v.offsetTop >= y)
  switch (i) {
    case -1: return stackArticles[stackArticles.length - 1]
    case 0: return null
    default: return stackArticles[i - 1]
  }
}
window.addEventListener('scroll', () => {
  if (rAFPending) return
  rAFPending = true
  requestAnimationFrame(() => {
    rAFPending = false
    lastPassed = getLastArticlePositionFrom(window.scrollY + stackArticles[0].offsetTop)
  })
}, { passive: true })