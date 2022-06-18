function tocar(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// while = enquanto
while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function(){
        tocar(idAudio);
    };

    contador = contador + 1;

}