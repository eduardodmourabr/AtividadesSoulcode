const xanimais = parseFloat(prompt('Quantos animais você gostaria de cadastrar?'))
console.log(`${xanimais} animais serão cadastrados!`)

let animais = []

for(let x = 1; x<= xanimais; x++) {
    let animal = {

        nome : '',
        raca : '',
        idade : 0,
        peso : 0,
    }

    animal.nome = prompt(`Digite o nome do ${x}º animal: `)
    animal.raca = prompt(`Digite o nome da raça do ${animal.nome}`)
    animal.idade = prompt(`Digite a idade do ${animal.nome}`)
    animal.peso = prompt(`Digite a peso do ${animal.nome}`)

    animais.push(animal)

    document.write(`Nome do animal: ${animal.nome}, Raça: ${animal.raca}, Idade: ${animal.idade} e Peso: ${animal.peso}<br>`)
}