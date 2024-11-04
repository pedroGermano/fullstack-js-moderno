// Object.values
// Object.entries
// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop')
// ... (spread)

// Já vimos
// Object.keys (retorna as chaves)
// Object.freeze (Congela o objeto)
// Object.defineProperties (define varias propriedades)
// Object.defineProperty (define uma propriedades)

const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = produto

produto.nome = 'Pedro'
console.log(outraCoisa);

