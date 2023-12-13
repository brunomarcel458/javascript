//create dynamic ID
function generateId(){
    var numbers = document.querySelectorAll('td');
    lenghtNumbers = numbers.length;
    for( n=0; n < lenghtNumbers; n++ ){
        numbers[n].id = "item_" + (n + 1);
    }
}

generateId();