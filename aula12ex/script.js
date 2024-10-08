const dia = new Date()
const horas = dia.getHours()

mostrarHoras = window.document.querySelector("p#mostrarHoras")
cumprimentar = window.document.querySelector("p#cumprimentar")
planoDeFundo = window.document.body
mostrarHoras.innerText = `Agora são ${horas} horas.`

if (horas < 5)
{
    planoDeFundo.style.backgroundColor = "var(--corNoite)"
    cumprimentar.innerText = "Boa madrugada!"
}
else if (horas < 12)
{
    planoDeFundo.style.backgroundColor = "var(--corDia)"
    
    cumprimentar.innerText = "Bom dia!"
} 
else if (horas < 18) 
{
    planoDeFundo.style.backgroundColor = "var(--corTarde)"
    
    cumprimentar.innerText = "Boa tarde!"
}
else  
{
    planoDeFundo.style.backgroundColor = "var(--corNoite)"

    cumprimentar.innerText = "Boa noite!"
}