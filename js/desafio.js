var resultado = document.querySelector("#resposta");
var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");

function calcular(){

var valor = inputValorHora.valueAsNumber
console.log(valor)
var horas = inputHorasProjeto.valueAsNumber
console.log(horas)
var total = valor * horas
resultado.textContent = ("R$") + total

}
    