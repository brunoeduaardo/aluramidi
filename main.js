function tocar(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){ // apenas colocando a constante, o jS já identifica se o elemento é nulo ou não. Descartando a necessidade de usar a verificação "elemento != null"
        elemento.play();
    } else {
        console.log('Elemento não encontrado/Seletor inválido');
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
    };
};