var binario = prompt('Digite o número binário:');


function binarioDecimal(binario){
    var decimal = 0, i = 0, resto;
    
    while (binario != 0) {
      resto = binario % 10;
      binario = Number.parseInt(binario / 10);
      decimal = decimal + resto * Math.pow(2, i);
      ++i;
    }
    
    return decimal;
  }
   
 
  
  var decimal = binarioDecimal(binario);
  document.writeln(`O valor ${binario} para decimal é: ${decimal}`);