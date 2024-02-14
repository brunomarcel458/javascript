let currentQuestion = 0;
showQuestion();

function showQuestion(){
    let q = questions[currentQuestion];

    if(q){
        document.querySelector('.question').innerHTML = q.question;
        let htmlOptions = '';
        for(i = 0; i < q.option.length; i++){
            htmlOptions += `<button class="opBtn">${q.option[i]}</button>`;
        }
        document.querySelector('.answer').innerHTML = htmlOptions;

        document.querySelectorAll('.opBtn').forEach(item => {
            item.addEventListener('click', opClick);
        });
    } else {
        document.querySelector('.question').innerHTML = 'FIM DO QUESTIONÁRIO!';
        document.querySelector('.answer').innerHTML = '';
    }
}

function opClick(e){
    let clickedOption = e.target.innerText; // Obtém o texto da opção clicada
    currentQuestion++;
    showQuestion();
}