const mario= document.querySelector('.mario');//selecionou a imagem do mario 
const pipe= document.querySelector(".pipe");

const jump=()=>{
    mario.classList.add('jump1');//adicionou a animação de pulo a imagem por meio da classe jump1 criada no css

    setTimeout(()=>{
        mario.classList.remove('jump1');
    },500);//faz remover a função jump acima para acionar a tecla novamente para pular
}

const loop = setInterval(()=>{
console.log('loop')

const pipeposition= pipe.offsetLeft;
const marioposition=+window.getComputedStyle(mario).bottom.replace('px','');//+transforma string em number


if (pipeposition<=120 &&pipeposition>0 &&marioposition<20){
    pipe.style.animation='none';
    pipe.style.left=`${pipeposition}px`;

    mario.style.animation='none';
    mario.style.bottom=`${marioposition}px`;

   mario.src='imagensgif/mariodead.jpg';
    mario.style.width='80px';
    mario.style.marginLeft='50px';
   mario.style.bottom='0';
    

    clearInterval(loop)
}

},10);

document.addEventListener('keydown', jump);//escutador de eventos que com qualquer tecla acionada faz relação com a constante jump