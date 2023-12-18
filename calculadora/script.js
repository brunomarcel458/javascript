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
function clickOnNumber(clickedNumber) {
    clickedNumber = document.querySelectorAll('td');
    clickedNumber.forEach((number)=> {
        number.addEventListener('click', ()=> {
            console.log(number.id);
        })
    })
}

clickOnNumber();

//add event to click on operators
function clickOnOperator(clickedOperator) {
    clickedOperator = document.querySelectorAll('td');
    clickedOperator.forEach((operator)=> {
        operator.addEventListener('click', ()=> {
            console.log(operator.id);
        })
    })
};