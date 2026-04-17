//Leia dois números e um operador matemático (+, -, *,/). Realize a operação indicada e mostre o resultado.
let n1 = Number(prompt("digite um número:"))
let n2 = Number(prompt("digite outro número:"))
let op = Number(prompt("(Operaçoes: 1 - <br>somar, 2 - <br>sub, 3 - <br>mult <br>4 -div "))

    document.write("O primeiro número é: " , n1)
    document.write("<br>O segundo número é: " , n2)
    document.write("<br>O resultado é ")
if(op == 1){
    document.write(n1 + n2)
}else if(op == 2){
    document.write(n1-n2)
}else if(op == 3){
    document.write(n1*n2)
}else if(op == 4){
    document.write(n1/n2)
}
  