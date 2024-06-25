import NormalizarTransacao, { TransacaoAPI, transacao } from "./src/normalizartransacao.js";
import Produto from "./src/fecthdata.js";
import Estatisticas from "./src/Estatisticas.js";
import { countList } from "./src/countBy.js";

/*
let produto: string = "livro";

let preço: number = 200;

const carro: {
    marca: string;
    portas: Number;
} = {
    marca: "audi",  
    portas: 4,
}

const barato = 200 < 400 ? true: "produto caro";

function somar(a: number, b: number) {
    return a + b
}

somar(4,10)

const nintendo = {
    nome: "Nintendo",
    preco: "2000",
}

function transformarpreco(produto: {nome: string; preco: string}) {
    produto.preco = "R$" + produto.preco
    return produto;
}

const produtoNovo = transformarpreco(nintendo)

function normalizarTexto(texto: string) {
    return texto.trim().toLowerCase()
}

console.log(normalizarTexto("DeSiGn"))


const input = document.querySelector('input');

const total = localStorage.getItem('total');
if(input && total) { 
input.value = total;
calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector('p');
  if(p) {
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
    if(input) {
  localStorage.setItem('total', input.value);
  calcularGanho(Number(input.value));
}
}

if(input) {
input.addEventListener('keyup', totalMudou);
}


const frase = 'Front End';
const preco = 500;
const condi = preco > 100;

console.log(typeof frase)

if(typeof frase === "string") {
    console.log("frase é uma string")
} else {
    console.log("frase não é uma string")
} 


let total: string | number = 200

total = "4000"

function isNumber(value: string | number) {
    if(typeof value === "number") {
    return true; 
}else {
    return "não é um numero"
} 
}

const button = document.querySelector("button")

button?.click()

function toNumber(value: number | string) {
    if(typeof value === "number" ) {
        return value
    } else {
        throw "value deve ser numero"
    }
}



async function fetchProduct() {
    const response = await fetch("");
    const data = await response.json()
}

fetchProduct()

function showProduct(data: {nome: string}) {
    document.body.innerHTML = `
    <div>
    <h1> ${data.nome} <h1>
    <div>`
} 




const form = document.querySelector<HTMLElement>("#form")

interface Userdata {
    nome?: string;
    email?: string;
    cpf?: string;
}

interface Window {
   UserData: any;
}

window.UserData = {};

function handleInput({target}: KeyboardEvent) {
    if(target instanceof HTMLInputElement){
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData))
    }
}

function isUserData(obj: unknown): obj is Userdata {
    if(obj && typeof obj === "object" && ("nome" in obj || "email" in obj || "cpf" in obj)){
        return true
    } else {
        return false
    }
}

function validJson(str: string) {
    try {
        JSON.parse(str)
    } catch (e) {
        return false
    }
    return true
}

function loadLocalStorage() {
    const localUserData = localStorage.getItem("UserData");
    if(localUserData && validJson(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if(isUserData(UserData)) {
        Object.entries(UserData).forEach(([key, value]) => {
            const input = document.getElementById(key)
            if(input instanceof HTMLInputElement) {
                input.value = value;
                window.UserData[key] = value;
            }
        });
        }
    }
}

loadLocalStorage();


form?.addEventListener("keyup", handleInput)  */



function preencherLista(lista: countList, containerId: string): void {

    const containerElement = document.getElementById(containerId)

    if(containerElement) {
        Object.keys(lista).forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`
        })
    }
}

function preencherEstatisticas(transacoes: transacao[]): void {
    const data = new Estatisticas(transacoes)

    preencherLista(data.pagamento, "pagamento")
    preencherLista(data.status, "status")

    const totalElement = document.querySelector<HTMLElement>("#total span")
    if(totalElement) {
        totalElement.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    const diaElement = document.querySelector<HTMLElement>("#dia span");
    if(diaElement) {
        diaElement.innerText = data.melhorDia[0];
    }
}

async function HandleData() {
    const data = await Produto<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?");
    if(!data) return;
    const transacoes = data.map(NormalizarTransacao)
    preencherTabela(transacoes)
    preencherEstatisticas(transacoes)
}

function preencherTabela(transacoes: transacao[]): void { 
    const tabela = document.querySelector("#transacoes tbody")
    if(!tabela) return;
    transacoes.forEach((transacao) =>  {
        tabela.innerHTML += `
        <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
        </tr>`
    })
}

HandleData()










