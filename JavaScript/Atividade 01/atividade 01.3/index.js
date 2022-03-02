var n1 = parseInt(prompt(`Por favor insira o valor de (A)`))
document.write(`O valor de (A) é: ${n1}`)
var n2 =parseInt( prompt (`Por favor insira o valor de (B)`))
document.write(`O valor de (B) é: ${n2}`)

document.write('Invertendo os valores: ')

var n3 = n1
n1 = n2
n2 = n3
document.write(`O valor de (A) é: ${n1}`)
document.write(`O valor de (B) é: ${n2}`)