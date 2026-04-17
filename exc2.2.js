//Peça dois números ao usuário e exiba o maior deles.
let n1 = Number(prompt("digite um número:"))
let n2 = Number(prompt("digite outro número:"))

    document.write("O primeiro número é: " , n1)
    document.write("<br>O segundo número é: " , n2)
if(n1 > n2 ){
    document.write("<br>" , n1 , " é maior que " , n2)
}else if(n1 < n2) {
    document.write("<br>" , n2 , " é maior que " , n1)
}else {
    document.write (n1 , " é igual a " , n2)
}