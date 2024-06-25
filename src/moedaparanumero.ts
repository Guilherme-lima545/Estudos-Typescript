
export default function MoedaparaNumero(moeda: string): number | null {
    const numero = Number(moeda.replaceAll(",", "").replace("," , "."))
    return isNaN(numero) ? null : numero
}