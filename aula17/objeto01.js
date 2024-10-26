let amigo = {nome: "josé", 
sexo: "M",
peso: 85.4,
engordar(p=0){
    this.peso += p
}}

let num = [10, 20, 30]
amigo.engordar(10)

console.log(typeof(amigo))
console.log(amigo["peso"])