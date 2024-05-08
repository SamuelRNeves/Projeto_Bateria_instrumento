document.body.addEventListener('keyup',(event)=>{// Aqui colocamos o ".body" para o evento de cilck pegar a página toda-
    PlaySound(event.code.toLowerCase());// passa o código da digitação para minusculo para chamar os audios que tambem estão
    //função para fazer a composição
    document.querySelector('.composer button').addEventListener('click',function(){
        let song = document.querySelector('#input').value;//Recebe o valor digitado pelo usuário do input com .value
        if(song != ""){// transforma o elementos de sring para Array
            let songArray = song.split('');//separa a string em ('') espaços e transforma em array;
            PlayComposition(songArray);
        }
    });
}

);

function PlaySound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);// Aqui ele vai selecionar o vo som pelo evento de tecla 
    let keyElement = document.querySelector(`Div[data-key="${sound}"]`)// Avi receber as div's com o valor 'data-key'
        if(audioElement){
            audioElement.curretime = 0; //Defiene o tempo atual do audio para 0, para que não seja necessario esperar terminar o audio para clicar e tocar novamknete
            audioElement.play();//função diponível na tag 'audio' para dar play
        }

        if(keyElement){
            keyElement.classList.add('active');//Se o elemento html key${sound}(tecla) for clicado o elemento vai puxar a tag css e adicionar a cor
            setTimeout(function(){
                keyElement.classList.remove('active');//Remove o elemento css 'active' depois de 300 milisegundos
                    
            },300)
        }
}
    //função para tocar os elementos no composer
   function PlayComposition(songArray){
    let wait = 0;
    for (let songItem of songArray){//Usa o for para iterar sobre cada item
        setTimeout(function(){
            PlaySound(`key${songItem// faz com que o som toque de um por um
            }`)
        },wait)
        wait += 250;
       
    }
   }