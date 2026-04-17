//Peça três números ao usuário e exiba o maior deles.
let n1 = Number(prompt("digite um número:"))
let n2 = Number(prompt("digite outro número:"))
let n3 = Number(prompt("digite mais um número: "))

    document.write("O primeiro número é: " , n1)
    document.write("<br>O segundo número é: " , n2)
    document.write("<br> o ultimo número é " , n3)

if(n1 > n2 && n1> n3){
    document.write("<br>" , n1 , " é maior que " , n2 , " e " , n3)
}else if(n2 > n1 && n2 >> n3) {
    document.write("<br>" , n2 , " é maior que " , n1 , " e " , n3)
}else if(n3 > n1 && n3 > n2) {
    document.write("<br>" , n3 , " é maior que " , n1 , " e " , n2)
}else {
    document.write ("<br>" , n1 , " é igual a " , n2 , " e " , n3)
}