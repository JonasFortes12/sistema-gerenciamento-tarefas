import fs from "fs/promises"
const caminhoDoArquivo = "./tarefas.json"

export const mostrarMenu = () => {
    console.log(`       
        Menu de Operações:
        
        `)
}


export async function lerTarefas() {

    try {
         //ler as tarefas dentro do arquivo tarefas.json
        const dadosLidos = await fs.readFile(caminhoDoArquivo, "utf-8")
        return JSON.parse(dadosLidos)
    } catch (error) {
        console.error(`Erro ao ler o arquivo! ${error.message}`)
        return undefined
    }
   
}


export async function escreverNoArquivo(listaTarefas){

    const listaTarefasString = JSON.stringify(listaTarefas, null, 2)

    try {
        await fs.writeFile(caminhoDoArquivo, listaTarefasString, "utf-8")
        console.log("Arquivo Atualizado!")
    } catch (error) {
        console.error(`Erro ao escrever no arquivo! ${error.message}`)
    }

}

export async function mostrarTodasTarefas () {

    const todasAsTarefas = await lerTarefas()

    console.log(todasAsTarefas)

}