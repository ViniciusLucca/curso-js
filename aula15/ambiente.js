let num = [5, 8, 2, 9, 3]

console.log(num)
num.push(7)
num.sort()
console.log(num)
let pos = num.indexOf(3)
if (pos == -1)
{
    console.log("O valor não foi encontrado!")
} else{
    console.log("o valor está na posição ", pos)
}