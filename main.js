
function tocarPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;



// while = enquanto
while(contador < 9){
    listaDeTeclas[contador].onclick = tocarPom

    contador = contador + 1;

    console.log(contador);
}

/*
    Código para cada botão. No caso de um código que terá muitos botões parecidos, ficaria inviável

function tocarPom(){
        document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocarPom; 
*/