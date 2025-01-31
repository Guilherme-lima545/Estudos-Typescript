export default async function Produto<T>(url: string): Promise <T | null> {
    try {
        const response = await fetch(url)
        if(!response.ok) throw new Error("Erro:" + response.status)
        const json = await response.json()
        return json
    } catch (error) {
        if(error instanceof Error) console.error("FetchData:" + error.message)
        return null
    }
}

