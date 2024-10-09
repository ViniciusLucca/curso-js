let anoAtual = new Date
let res = window.document.querySelector("p#mostrarIdade")
anoAtual = anoAtual.getFullYear()
function calcularIdade()
{
    let anoNasc = window.document.querySelector("input#ianoNascimento").value
    let idade = 0
    let formsGenero = window.document.getElementsByName("genero")
    let genero = ''
    let imagem = window.document.getElementsByTagName("img")[0]
    let faixaEtaria = ""
    if (anoNasc > anoAtual || anoNasc == 0 || !(formsGenero[0].checked || formsGenero[1].checked))
    {
        alert("[ERRO] Dados inválidos.")
        return
    }
    
    idade = 2024 - anoNasc
    if (formsGenero[0].checked)
    {
        genero = "homem"
    }
    if (formsGenero[1].checked)
    {
        genero = "mulher"
    }

    if (idade < 6) 
    {
        faixaEtaria = "bebe"
    }
    if (idade >=6 && idade < 16)
    {
        faixaEtaria = "crianca"
    }
    if (idade >=16 && idade < 36) 
    {
        faixaEtaria = "jovem"
    }
    if (idade >=36 && idade < 55)
    {
        faixaEtaria = "adulto"
    }
    if (idade >=55)
    {
        faixaEtaria = "idoso"
    }

    imagem.src = `imagens/${genero}-${faixaEtaria}.jpg`
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}
