document.querySelector('.busca').addEventListener('submit', (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    if(!input == ''){
        showWarning('carregando...');
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=fee6712ccaedb94300fa6b26dfb590ac`;
    } else {
        console.log('Nada digitado.');
    }
});

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}