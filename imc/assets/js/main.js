const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('Evento não foi enviado');
  setResultado('Olá Mundo!')
})

function criaP(classNa) {
  const p = document.createElement('p')
  p.classList.add('paragrafo-resultado')
}

function setResultado(msg) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = ''

  resultado.appendChild(p)
}
