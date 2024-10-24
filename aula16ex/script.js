const indice = window.document.getElementById("iindice")
const slct_output = window.document.getElementsByTagName("select")[0]
const resultado = window.document.getElementById("resultado")
let numeros = []
document.getElementById("iadicionar").addEventListener("click", adicionar)
document.getElementById("ifinalizar").addEventListener("click", finalizar)

function adicionar()
{
    resultado.innerText = ""
    if (indice.value == "") 
    {
        alert("Insira um dado antes de adicionar!")
        return
    }
    if (numeros.indexOf(indice.value) != -1)
    {
        alert("Esse número já foi adicionado!")
        return
    }
    if (indice.value > 100)
    {
        alert("Esse número é muito grande!")
    }
    if (indice.value < 1)
    {
        alert("Esse número é muito pequeno!")
    }
    numeros[numeros.length] = Number(indice.value)
    let item = document.createElement("option")
    item.text = `Número ${indice.value} adicionado`
    slct_output.add(item,numeros.length)
}

function finalizar()
{
    numeros.sort()
    let soma=0, media=0
    for (i = 0; i < numeros.length; i++)
    {
        soma += numeros[i]
        console.log(soma)
    }
    media = soma / (numeros.length)

    resultado.innerText = `Ao todo, temos ${numeros.length} números cadastrados\n
    O maior valor informado foi ${numeros[numeros.length-1]}.\n
    O menor valor informado foi ${numeros[0]}.\n
    Somando todos os valores, temos ${soma}.\n
    A média dos valores digitados foi ${media}.`   
}