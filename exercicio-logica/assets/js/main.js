// Escreva uma função que recebe 2 números e retorne o maior deles

function num(a, b) {
  return a > b ? a : b
}


console.log(num(33, 52));

// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number)
// retorne true se estiver em modo paisagem

function ePaisagem(a, l) {
  return a > l ? true : false
}

console.log(ePaisagem(102380, 608))