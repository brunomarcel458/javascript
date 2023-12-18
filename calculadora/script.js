//create dynamic ID
function generateId(){
    var numbers = document.querySelectorAll('.numbers td');
    lenghtNumbers = numbers.length;
    for( n=0; n < lenghtNumbers; n++ ){
        numbers[n].id = "item_" + (n + 1);
    }
}

generateId();

//add event to click on numbers

var clickedNumber = document.querySelectorAll('.numbers-click td');
clickedNumber.forEach((number)=> {
    number.addEventListener('click', ()=> {
        console.log( calcularSoma( parseInt(number.textContent)) );
    })
})

//add event to click on operators
var operator = document.querySelectorAll('.operators-click td');
operator.forEach((op)=> {
    op.addEventListener('click', ()=>{
        if(op.id == 'soma'){
            console.log(op.textContent);
        }
    })
})

function calcularSoma(x) {
    soma = x + 3;
    // console.log(clickOnNumber())
    return soma;
}

calcularSoma();