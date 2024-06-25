import MoedaparaNumero from "./moedaparanumero.js";
import stringToDate from "./stringparadata.js";

type TransacaoPagamento = "Boleto" | "Cartão de Crédito"
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão"


export interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Forma de Pagamento"]: TransacaoPagamento;
    ["Cliente Novo"]: number;
}

export interface transacao {
    nome: string;
    id: number;
    data: Date;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    pagamento: TransacaoPagamento;
    novo: boolean;
}



export default function NormalizarTransacao(transacao: TransacaoAPI): transacao {
    return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: MoedaparaNumero(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
    }
}