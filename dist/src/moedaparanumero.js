export default function MoedaparaNumero(moeda) {
    const numero = Number(moeda.replaceAll(",", "").replace(",", "."));
    return isNaN(numero) ? null : numero;
}
//# sourceMappingURL=moedaparanumero.js.map