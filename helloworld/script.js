//console.log (" hello World!!")
//alert ("Hello World!!")

let nome = "Rogerio"
console.log(nome)

let sobrenome = "Costa"
let nomecompleto = nome + " " + sobrenome;
console.log(nomecompleto)

let idade= 35

let num1 = 10;
let num2 =5;

let soma = num1 + num2;
let multiplicacao = num1 * num2;
console.log (soma);
console.log (multiplicacao);

let temIdadeParaVotar = true;
let possuiTituloEleitor = false;
let podeVotar = temIdadeParaVotar && possuiTituloEleitor;
console.log(podeVotar);

let valor1 = true;
let valor2 = false;

let resultado1 = valor1 || valor2;
let resultado2 = !valor1
console.log (resultado1);
console.log (resultado2);

//positivo, negativo ou zero
let number = 0;
if (number === 0){
    console.log ("Número zero")
} else if ( number > 0) {
    console.log ("Número positivo")

} else {
    console.log (" Número negativo")
}
//número par, ou impar
let number = -1