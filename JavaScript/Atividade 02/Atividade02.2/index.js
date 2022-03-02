let texto = prompt('Digite o seu texto')
resultado = texto.split("")

document.write(`O texto: ${texto} <br>`)
document.write(`O texto Maiúsculo: ${texto.toUpperCase()} <br>`)
document.write(`O texto minúscilo: ${texto.toLowerCase()} <br>`)
document.write(resultado)