const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function (event) {
  relogio.innerHTML = 'cliquei no inicio'
})
pausar.addEventListener('click', function (event) {
  alert('Cliquei 1')
})

zerar.addEventListener('click', function (event) {
  alert('Cliquei 2')
})