
/**document.createElement
-> cria um elemento no documento
node.appendChild
-> Adicionar o elemento como ULTIMO nó do pai
node.insertBefore
-> Inserir um elemento antes de outro elemento
node.removeChild
-> remove um filho de elemento
*/


// const container = document.getElementById("div-pai")
// const first = document.querySelector("#first")
// const newP = document.createElement("p")
// newP.innerHTML = ' Olá Mundo'
// container.insertBefore(newP, first)
// container.appendChild(newP)
// container.removeChild(newP)

const div = document.createElement('div')
const h1 = document.createElement('h1')
const hr = document.createElement('hr')
const p = document.createElement('p')
const body = document.body
body.appendChild(div)
div.innerHTML = 'Hello World'
 p.innerHTML = 'Rogerio Costa'
 div.appendChild(p)

// const exp = document.getElementById('exp')

// exp.appendChild(first, exp)

 
 

