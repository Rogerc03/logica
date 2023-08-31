const data = [
    {name: "Delano", age: 46, sallary: 5000, driveLicense: false, vehicle: "Voyagem", category: "sedan", vehicleYear: 2013},
    {name: "Leonardo", age: 42, sallary: 4000, driveLicense: true, vehicle: "Gol", category: "hatch", vehicleYear: 2020},
    {name: "Dantas", age: 43, sallary: 7200, driveLicense: true, vehicle: "Cobalt", category: "sedan", vehicleYear: 2021},
    {name: "Edson", age: 35, sallary: 5000 , driveLicense: false, vehicle: "Prisma", category: "sedan", vehicleYear: 2018},
    {name: "Claudio", age: 39, sallary: 6000 , driveLicense: false, vehicle: "Onix", category: "hatch", vehicleYear: 2015},
    {name: "Oberdan", age: 38, sallary: 3500, driveLicense: true, vehicle: "Kiwd", category: "hatch", vehicleYear: 2020}
];



// find - Percorre o arrys, e baseado na condição definida ele devolve o primeiro item encontrado se a condição for satisfatoria.

// const user  = data.find((user) => {
//     return user.vehicleYear >=2015 
// });

// console.log(user);


// filter - Percorre o arrys, e baseado na condição definida ele devolve os itens encontrados se a condição for satisfatoria.

// const users  = data.filter((user) => {
//     return user.sallary < 6000 && user.driveLicense ; 
// });

// console.log(users);

// Reduce -  Como seu proprio nome já diz, é utilizado para reduzir algua informação no arrys. Muito utilizados para soma de valores.
const sallaries = data.reduce((totalSallary, user) => {
 return totalSallary += user.sallary
}, 0);

console.log(sallaries);
    