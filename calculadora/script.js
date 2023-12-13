var numbers = document.querySelectorAll('td');

//criar ID dinâmico

function generateId(){
    lenghtNumbers = numbers.length;
    for( n=0; n < lenghtNumbers; n++ ){
        numbers[n].id = "item_" + (n + 1);
    }
}

generateId();