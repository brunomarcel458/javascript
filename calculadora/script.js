//Get values that will keep always working:
//Numbers that will be clicked, Operators that will be clicked, Numbers that will be showed and results

var numbersClicked = document.querySelector('.numbers-click');
var operatorClicked = document.querySelector('.operators-click');
var firstNumber = document.querySelector('.first-number');
var currentOperator = document.querySelector('.current-operator');
var lastNumber = document.querySelector('.last-number');

//function to get click number events
var currentNumber = "";

numbersClicked.addEventListener('click', (e)=>{
    currentNumber = currentNumber + e.target.textContent;
    firstNumber.textContent = currentNumber;
    console.log(e.target.textContent);
})

//function to get click operator events