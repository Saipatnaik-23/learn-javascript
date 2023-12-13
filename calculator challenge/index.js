let num1=8;
let num2=2;

let num1Val=document.querySelector("#num1-el");

let num2Val=document.querySelector("#num2-el");

let result=document.querySelector("#sum-el");

num1Val.textContent=num1;
num2Val.textContent=num2;


function add()
{
   let res= num1+num2
   result.textContent="Sum :"+ res;
 
}

function sub()
{
   let res= num1-num2;
    result.textContent="Sum :"+ res;
    // console.log(result);
}

function divison()
{
    let res= num1/num2;
    result.textContent="Sum :"+ res;
    // console.log(result);
}

function multiply()
{
    let res= num1*num2;
    result.textContent="Sum :"+ res;
    // console.log(result);
}