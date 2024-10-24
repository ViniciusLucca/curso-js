const saida = window.document.querySelector("#output")
const btn = window.document.querySelector("#icontar")
var inicio, fim, passo
btn.addEventListener("click", contar)
function contar() {
    if (window.document.querySelector("#iinicio").value == '' || window.document.querySelector("#ifim").value == '' || window.document.querySelector("#ipasso").value == '') {
        window.alert("Insira valores válidos")
        saida.innerText = "Impossivel contar"
    }
    else { pegarDados() }
    console.log("contar")
    pegarDados()
    if (passo <= 0)
    {
        saida.innerText = "Impossivel contar"
        return
    }
    if (inicio <= fim) {
        for (let i = inicio; i <= fim; i += passo) {
            saida.innerHTML += `👉${i}`
        }

    } else {
        for (let i = inicio; i >= fim; i -= passo) {
            saida.innerHTML += `👉${i}`
        }
    }

}
function pegarDados() {

    inicio = Number(window.document.querySelector("#iinicio").value)
    fim = Number(window.document.querySelector("#ifim").value)
    passo = Number(window.document.querySelector("#ipasso").value)

}
