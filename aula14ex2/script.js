const saida = window.document.querySelector("#output")
const btn = window.document.querySelector("#icontar")
var inicio, fim, passo
btn.addEventListener("click", contar)
function contar()
{
    console.log("contar")
    pegarDados()
    for (let i = inicio; i<=fim; i += passo)
    {
        saida.innerHTML += `👉${i}`
    }
}
function pegarDados()
{
    console.log("pegar dados")
    if (window.document.querySelector("#iinicio").value == '' || window.document.querySelector("#ifim").value == '' || window.document.querySelector("#ipasso").value == '')
    {
        window.alert("Insira valores válidos")
    }
    inicio = Number(window.document.querySelector("#iinicio").value)
    fim = Number(window.document.querySelector("#ifim").value)
    passo = Number(window.document.querySelector("#ipasso").value)

}
