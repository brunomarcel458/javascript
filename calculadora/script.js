//Get values that will keep always working:
//Numbers that will be clicked, Operators that will be clicked, Numbers that will be showed and results

var numbersClicked = document.querySelector('.numbers-click');
var operatorClicked = document.querySelector('.operators-click');
var firstNumberShow = document.querySelector('.first-number');
var showOperator = document.querySelector('.current-operator');
var lastNumberShow = document.querySelector('.last-number');

//function to get click number events
var firstNumber = "";
var operator = "";
var lastNumber = "";

function addNumberClick() {
    numbersClicked.addEventListener('click', (e)=>{
        if(operator == "") {
            firstNumber = firstNumber + e.target.textContent;
            firstNumberShow.textContent = firstNumber;
            console.log(e.target.textContent);
        }
    })
}
addNumberClick();

//function to get click operator events

function addOperatorClick() {
    operatorClicked.addEventListener('click', (op)=>{
        if(firstNumber !== ""){
            showOperator.textContent = op.target.textContent;
            console.log(op.target.textContent);
        }
    })
}
addOperatorClick();