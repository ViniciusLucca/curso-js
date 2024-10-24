const txtIndice = window.document.querySelector("#iindice")
const btnContar = window.document.querySelector("#icontar")
const saida = window.document.querySelector("#ioutput")
var indice

btnContar.addEventListener("click", fazerTaboada)

function pegarDados()
{
    if (txtIndice.value == '')
    {
        alert("insira dados válidos")
        return "return"
    }
    indice = Number(txtIndice.value)
}

function fazerTaboada()
{
    saida.innerText = '';
    if (pegarDados() == "return")
    {
        return
    }
    for(i = 1; i<=10; i++)
    {
        let option = document.createElement("option")
        option.text = `${indice} x ${i} = ${indice*i}\n`
        saida.add(option, saida[i]) 
    }
}