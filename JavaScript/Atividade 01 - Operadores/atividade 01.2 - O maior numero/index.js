var n1 = parseInt(prompt(`Por favor insira o primeiro Número`))
console.log(n1)
var n2 =parseInt( prompt (`Por favor insira o Segundo Número`))
console.log(n2)
var n3 = parseInt( prompt(`Por favor insira o Terceiro Número`))
console.log(n3)




    if(n1>=n2 && n1>=n3)
{
maior=n1;
}
else if(n2>=n1 && n2>=n3)
{
maior=n2;
}
else if(n3>=n2 && n3>=n1)
{
maior=n3;
}
console.log("maior numero: "+maior);
alert("maior numero: "+maior);