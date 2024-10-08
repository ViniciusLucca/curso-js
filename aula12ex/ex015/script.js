let idade
let anoAtual = new Date
let anoNasc
anoAtual = anoAtual.getFullYear()
function calcularIdade()
{
    anoNasc = window.document.querySelector("input#ianoNascimento").value
    if (anoNasc > anoAtual || anoNasc.value.lenght == 0)
    {
        alert("[ERRO] Dados inválidos.")
        return
    }
    idade = 2024 - anoNasc
    alert(idade)
}
