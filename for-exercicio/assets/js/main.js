const elementos = [
  { tag: 'p', texto: 'Fase1' },
  { tag: 'div', texto: 'Fase 2' },
  { tag: 'footer', texto: 'Fase 3' },
  { tag: 'section', texto: 'Fase 4' }
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag)
  tagCriada.innerHTML = texto
  div.appendChild(tagCriada)
}
container.appendChild(div)