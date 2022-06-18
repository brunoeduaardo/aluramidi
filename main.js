
function tocarPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


listaDeTeclas[0].onclick=tocarPom



/*
    Código para cada botão. No caso de um código que terá muitos botões parecidos, ficaria inviável

function tocarPom(){
        document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocarPom; 
*/