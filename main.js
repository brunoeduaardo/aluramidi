function tocar(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null){
        console.log('Elemento não encontrado!')
    } else {
        if(elemento.localName === 'audio'){
            elemento.play();
        };
    };
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// for = para
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function(){
        tocar(idAudio);
    };

   

    tecla.onkeydown =  function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        

    };

    tecla.onkeyup = function(){

        tecla.classList.remove('ativa');

    }

}