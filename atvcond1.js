//desconto
let desconto = 0.8
let valorapagar = 300
let membrovip = false
let valorfinal = desconto * valorapagar
//condicional
if (valorapagar >= 150 && membrovip == true) {
    document.write("<br>Desconto aplicado! Valor a pagar: " + valorfinal )
}else {
     document.write("<br>Desconto recusado. Valor a pagar: " + valorapagar )
}

