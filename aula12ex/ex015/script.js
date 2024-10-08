let idade
let anoAtual = new Date
let anoNasc
anoAtual = anoAtual.getFullYear()
function calcularIdade()
{
    anoNasc = window.document.querySelector("input#ianoNascimento").value
    if (anoNasc > anoAtual)
    {
        alert("insira um ano válido")
        return
    }
    idade = 2024 - anoNasc
    alert(idade)
}
