var valorEmDolarTexto = prompt("Qual o valor você quer converter? ");

var valorEmDolarNumero = parseFloat(valorEmDolarTexto);

var valorEmReal = valorEmDolarNumero * 5.50;

var valorEmDecimal = valorEmReal.toFixed(2);

alert(valorEmDecimal);