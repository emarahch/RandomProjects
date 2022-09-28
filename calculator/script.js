var num1 
var num2
var answer
var operand
//    document.getElementById("display").value=(`${num1} + `)
numberKeys = document.querySelectorAll(".num")
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const divis = document.getElementById("divis");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

numberKeys.forEach(button => 
    button.addEventListener('click', () => {
        document.getElementById("display").value+=parseInt(button.innerHTML);
    })
   );

equals.addEventListener("click",()=>{
    num2=parseInt(document.getElementById("display").value)
    switch(operand){
        case("add"):
        answer=addition(num1,num2)
        break;

        case(sub):
        answer=subtract(num1,num2)
        break;

        case(mult):
        answer=multiply(num1,num2)
        break;

        case(divis):
        answer=division(num1,num2)
        break;

        default:
        answer = num2;
        break;
    }
    document.getElementById("display").value=answer;
});

clear.addEventListener("click",()=>{
    num1=0
    num2=0
    document.getElementById("display").value="";
 
 });

add.addEventListener("click",()=>{
   operand="add"
   num1=parseInt(document.getElementById("display").value)
   document.getElementById("display").value="";

});

sub.addEventListener("click",()=>{
    operand=sub
    num1=parseInt(document.getElementById("display").value)
   document.getElementById("display").value=''
 
 });

 divis.addEventListener("click",()=>{
    operand=divis
    num1=parseInt(document.getElementById("display").value)
    document.getElementById("display").value=''
 
 });

 mult.addEventListener("click",()=>{
    operand=mult
    num1=parseInt(document.getElementById("display").value)
    document.getElementById("display").value=''
 
 });


function addition(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}

