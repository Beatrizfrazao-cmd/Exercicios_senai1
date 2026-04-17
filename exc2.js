//Leia uma temperatura em graus Celsius e converta-a para Fahrenheit. A fórmula de conversão é: F = (C × 9/5) + 32.
let celsius = Number(prompt("coloque os graus c° que deseja converter para Fahrenheit"))
let Fahrenheit = (celsius * 9/5) + 32
//
if(celsius == ""){
    document.write("digite um número")
}else{
    document.write("<br>", celsius + " graus é equivalente a " + Fahrenheit + " graus fahrenheit")
}