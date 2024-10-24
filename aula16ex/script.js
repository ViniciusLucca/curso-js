const indice = window.document.getElementById("iindice")
const slct_output = window.document.getElementsByTagName("select")[0]
let numeros = []
document.getElementById("iadicionar").addEventListener("click", adicionar)
document.getElementById("ifinalizar").addEventListener("click", finalizar)

function adicionar()
{
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
    numeros.push(indice.value)
    let item = document.createElement("option")
    item.text = `Número ${indice.value} adicionado`
    slct_output.add(item,numeros.length)
}

function finalizar()
{
    window.document.body.main.write("a")
}