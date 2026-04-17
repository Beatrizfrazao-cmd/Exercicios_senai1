//Solicite o raio de um círculo e calcule a área. Use afórmula: Área = π × raio2. Considere π = 3.14159.
let rc = Number(prompt("Digíte a área (em Cm) do círculo: "))
let π = 3.14159
const  area = π * (rc*rc)
//
if(rc == 0){
    document.write("digite um número")
}else{
    document.write("<br>O raio de ", rc  + " é equivalente a " + area + " centímetros quadrados")
}