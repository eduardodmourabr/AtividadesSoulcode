let xvezes = parseInt(prompt('Informe quantos númeors serão cadastrados: '))
let lista = []
let soma = 0
let media = (soma / xvezes)

for(let x = 1; x<= xvezes; x++){
    numero = parseInt( prompt(`Digite o ${x}º número: `))
    lista.push(numero)
    soma = soma + numero
    document.write(`<p>O ${x}º número cadastrado foi: ${numero}</p><br>`)
    document.write(`<p>Sua raiz quadrada é: ${Math.sqrt(numero)} </p><br>`)
    document.write(`<p>Sua raiz cúbica é: ${Math.cbrt(numero)}</p><br>`)
    document.write(`<p>Sua potência de 2 é: ${Math.pow(numero, 2)}</p><br>`)
}
document.write(`<p>A soma total é: ${soma}</p><br>`)
document.write(`<p>A média de todos os números é: ${soma/xvezes}</p><br>`)

