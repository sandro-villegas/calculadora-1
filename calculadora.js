let operador="";
let number1="";
let number2="";
let resultado=0;

let input = document.getElementById("input")
input.textContent=resultado
let calc = document.getElementById("calc");
calc.addEventListener("click",(e)=>{
    if(e.target.classList.contains("number")){
        if(!operador){
            number1 = number1 + e.target.textContent
            input.textContent = number1
        }
        else{
            number2 = number2 + e.target.textContent
            input.textContent = number2
        }
    }
    if(e.target.classList.contains("operator")){
        if(!operador){
            operador=e.target.id;
        }
    }
    if(e.target.id==="result"){
        
        if(operador==="+"){
            resultado = parseFloat(number1)+parseFloat(number2)
            console.log("resultado",resultado)
            input.textContent = resultado
            number1=""
            number2=""
            resultado=0
            operador=""
        }
        if(operador==="-"){
            resultado = parseInt(number1)-parseInt(number2)
            input.textContent = resultado
            /*input.textContent = input.textContent + resultado*/
            number1=""
            number2=""
            resultado=0
            operador=""
        }
        if(operador==="*"){
            resultado = parseInt(number1)*parseInt(number2)
            input.textContent = resultado
            /*input.textContent = input.textContent + resultado*/
            number1=""
            number2=""
            resultado=0
            operador=""
        }
        if(operador==="/"){
            resultado = parseInt(number1)/parseInt(number2)
            input.textContent = resultado
            /*input.textContent = input.textContent + resultado*/
            number1=""
            number2=""
            resultado=0
            operador=""
        }
    }
    if(e.target.id==="clear"){
        console.log("estoy en clkear")
            number1=""
            number2=""
            resultado=0
            operador=""
            input.textContent = 0
    }
    if(e.target.id==="point"){
        if(!operador){
            number1 = number1 + "."
            input.textContent=number1;
        }
        else{
            number2 = number2 + "."
            input.textContent=number2
        }
    }
})