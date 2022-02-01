
const handleMouseOver = (event) => {
  event.target.classList.add('color')
}

const main = () => {
  const container = document.getElementById('main-container')
  for (let i = 0; i < 128; i++){
    for (let j = 0; j < 128; j++){
      let square = document.createElement('div')
      square.textContent = " "
      square.classList.add('square')
      square.setAttribute('style',`grid-row-start: ${i} grid-row-end: ${i} grid-column-start: ${j} grid-column-end: ${j}`)
      square.addEventListener("mouseover",(event => handleMouseOver(event)))
      container.appendChild(square)
    }
  }
}

window.onload = main