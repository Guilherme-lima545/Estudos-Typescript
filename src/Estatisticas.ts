import countBy from "./countBy.js";
import { transacao } from "./normalizartransacao.js";

type transacaoValor = transacao & {valor: number};


function filtrarvalor(transacao: transacao): transacao is transacaoValor {
    return transacao.valor !== null
}

export default class Estatisticas {
    private transacoes
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes: transacao[]) {
        this.transacoes = transacoes
        this.total = this.settotal()
        this.pagamento = this.setpagamento()
        this.status = this.setstatus()
        this.semana = this.setSemana()
        this.melhorDia = this.setMelhordia()
    }

    private settotal() {
        return this.transacoes.filter(filtrarvalor).reduce((acc, item) => {
            return acc + item.valor
        }, 0)
    }

    private setpagamento(){
       return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    
    }

    private setstatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }

    private setSemana() {
        const semana = {
            ["Domingo"]: 0,
            ["Segunda"]: 0,
            ["Terça"]: 0,
            ["Quarta"]: 0,
            ["Quinta"]: 0,
            ["Sexta"]: 0,
            ["Sabado"]: 0,
        }
        for(let i = 0; i < this.transacoes.length; i++){
            const day = this.transacoes[i].data.getDay()
            if(day === 0) semana["Domingo"] += 1
            if(day === 0) semana["Segunda"] += 1
            if(day === 0) semana["Terça"] += 1
            if(day === 0) semana["Quarta"] += 1
            if(day === 0) semana["Quinta"] += 1
            if(day === 0) semana["Sexta"] += 1
            if(day === 0) semana["Sabado"] += 1
        }
        return semana
    }
    private setMelhordia() {
       return Object.entries(this.semana).sort((a, b) => {
        return b[1] - a[1]
        }) [0]
    }
}