let nomeDoUsuario = prompt('Olá usuário! Qual que é o seu nome?')
console.log(nomeDoUsuario)
var n1 = prompt(` ${nomeDoUsuario}, Por favor insira o primeiro valor do Triângulo!`)
console.log(n1)
var n2 =parseInt( prompt (` ${nomeDoUsuario}, Por favor insira o Segundo valor do Triângulo!`))
console.log(n2)
var n3 = prompt(` ${nomeDoUsuario}, Por favor insira o Terceiro valor do Triângulo!`)
console.log(n3)

if(n1 == n2 && n1 == n3){
    alert('O seu triângulo é Equilátero')
    console.log('O seu triângulo é Equilátero')
}else if(n1 == n2 || n1 == n3){
    alert('O seu triângulo é Escaleno')
    console.log('O seu triângulo é Escaleno')
}else{
    alert('O seu triângulo é Isósceles')
    console.log('O seu triângulo é Isósceles')
} 