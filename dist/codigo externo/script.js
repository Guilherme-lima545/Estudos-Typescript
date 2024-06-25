"use strict";
let produto = "livro";
let preço = 200;
const carro = {
    marca: "audi",
    portas: 4,
};
const barato = 200 < 400 ? true : "produto caro";
function somar(a, b) {
    return a + b;
}
somar(4, 10);
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarpreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
const produtoNovo = transformarpreco(nintendo);
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("DeSiGn"));
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
const frase = 'Front End';
const preco = 500;
const condi = preco > 100;
console.log(typeof frase);
if (typeof frase === "string") {
    console.log("frase é uma string");
}
else {
    console.log("frase não é uma string");
}
//# sourceMappingURL=script.js.map