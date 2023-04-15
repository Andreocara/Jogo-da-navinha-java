var diryJ,dirxJ,jog,velj,pjx,pjy;
var tamTelaW,tamTelaH;
var jogo;
var frames;

function teclaDw(){
  var tecla=Event.keyCode;
  if(tecla==38){//cima
    diryJ=-1;

  }else if(tecla==40){//baixo
    diryJ=1;

  }if(tecla==37){//esquerda
    dirxJ=-1;

  }else if(tecla==39){//direita
    dirxJ=1;

  }if(tecla==32){tiro
  }
}

function teclaUp(){
  var tecla=Event.keyCode;
  if((tecla==38)||(tecla==40)){
    diryJ=0
  }
  if((tecla==37)||(tecla==39)){esquerda
    dirxJ=0;
  }

}

function controlaJogador(){
  pjy+=diryJ*velj;
  pjx+=dirxJ*velj;
  jog.style.top=pjy+"px";
  jog.style.left=pjx+"px";
}


function gameLoop(){
  if(jogo){
    controlaJogador();
  }
  frames=requestAnimationFrame(gameLoop);
}

function inicia(){
  jogo=false;
  dirxJ=diryJ=0;
  tamTelaH=window.innerHeight;
  tamTelaW=window.innerWidth;
  pjx=tamTelaW/2;
  pjy=tamTelaH/2;
  velj=5;
  jog=document.getElementById("naveJogo");
  jog.style.top=pjy+"px";
  jog.style.left=pjx+"px";
}

Window.addEventListener("load",inicia)
document.addEventListener("keydown",teclaDw);
document.addEventListener("keyup",teclaUp);