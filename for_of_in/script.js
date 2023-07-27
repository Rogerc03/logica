
// const cidade = {
//   nome:"caninde",
//   populacao: 77240,
//   estado : "CE",
//   capital: false 
// }

// console.log(cidade)

// cidade.nome = "Fortaleza",
// cidade.populacao = 10000,
// cidade.capital = true
// console.log(cidade)


// criar um objeto com nome, população estado e se é capital

const cidades = [
    {
        nome:"caninde",
        populacao: 77240,
        estado : "CE",
        capital: false 
      },
      {
        nome:"Fortaleza",
        populacao: 20000,
        estado : "CE",
        capital: true
      },
      {
        nome:"Guaramiranga",
        populacao: 8000,
        estado : "CE",
        capital: false 
      }

]

for (const cidade of cidades) {
    if (cidade.capital === false)     
    

   console.log(cidade.nome, cidade.capital)
   
}


//mostrar apenas as cidades que não são capitais