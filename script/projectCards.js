const cards = document.getElementsByClassName("project-cards")[0]
const emptyCard = document.createElement("article")
emptyCard.classList.add("empty")

let rAFPending = false

const fillEmptyRows = () => {
  rAFPending = false

  cards.querySelectorAll("article.empty").forEach(e => e.remove())

  const cardWidth = parseFloat(getComputedStyleProperty(
    "project-card",
    ".project-cards article",
    "width"
  ))

  const sectionWidth = parseFloat(getComputedStyleProperty(
    "project-card",
    ".project-cards",
    "width"
  ))

  if (!Number.isFinite(cardWidth) || cardWidth <= 0) return

  const cardsPerRow = (() => {
    switch (true) {
      case (cardWidth / sectionWidth) < 1 / 3: return 3
      case (cardWidth / sectionWidth) < 1 / 2: return 2
      case (cardWidth / sectionWidth) < 1 / 1: default: return 1
    }
  })()

  if (cardsPerRow === 1) return

  while (cards.children.length % cardsPerRow !== 0) {
    cards.appendChild(emptyCard.cloneNode(true))
  }
}

fillEmptyRows()

window.addEventListener("resize", () => {
  if (rAFPending) return
  rAFPending = true
  requestAnimationFrame(fillEmptyRows)
})