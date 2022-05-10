let audios = [
    {
        caminho: 'audio/filho.mp3',
        legenda: 'Que isso meu fio'
    },
    {
        caminho: 'audio/iha.mp3',
        legenda: 'IHAAAA'
    },
    {
        caminho: 'audio/jesus.mp3',
        legenda: 'JESUS!'
    },
    {
        caminho: 'audio/pai.mp3',
        legenda: 'Ele não é o pai'
    },
    {
        caminho: 'audio/pare.mp3',
        legenda: 'PARE!'
    },
    {
        caminho: 'audio/rapaz.mp3',
        legenda: 'rapaz!'
    },
    {
        caminho: 'audio/ratinho.mp3',
        legenda: 'Ratinho!'
    }, 
    {
        caminho: 'audio/uepa.mp3',
        legenda: 'UEPA'
    },
    {
        caminho: 'audio/vish.mp3',
        legenda: 'VIXI!'
    }
];

// primeiro, criar uma variável que selecionará todos os botões e outra que selecionará todos os h3.

let botoes = document.querySelectorAll('.box');
let legendas = document.querySelectorAll('h3');

// Esse for irá definir os h3 de cada 

for (let i = 0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i); 
    
    //criando atributo por botão de forma dinãmica. Esse atributo é o que colocará som nos botões.
}

let audioTag = document.querySelector("audio");
botoes.forEach(box => {
    box.addEventListener('click', () => {
        let sound= audios[box.getAttribute('data-item')];
        audioTag.setAttribute('src', sound.caminho);
        
        audioTag.addEventListener('loadeddata',() => {
            audioTag.play();
        });
    });
});