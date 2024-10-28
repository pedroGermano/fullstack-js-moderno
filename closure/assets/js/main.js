function retornaFuncao() {
  const nome = 'Pedro'
  return function () {
    return nome
  }
}

const funcao = retornaFuncao();
console.log(funcao);
