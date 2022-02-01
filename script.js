
const 

const main = () => {
  const container = document.getElementById('main-container')

  for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
      let square = document.createElement('div')
      square.textContent = " "
      square.classList.add('square')
      square.setAttribute('style',`grid-row-start: ${i} grid-row-end: ${i} grid-column-start: ${j} grid-column-end: ${j}`)
      container.appendChild(square)
    }
  }
}

window.onload = main