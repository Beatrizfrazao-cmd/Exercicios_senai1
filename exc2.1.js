//Leia um número inteiro e informe se ele é par ou ímpar.
// % é o módulo/resto da dívisão
let numero = Number(prompt("digite seu número: "))

    document.write("O " , numero , " é par ou impar?")
if(numero % 2 == 0){
    document.write("<br>", numero , " é par")
}else{
    document.write("<br>", numero , " é impar")
}