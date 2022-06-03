const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');
const robotron = document.querySelector('[data-robotron]');

const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

const robotronColorido = [
  "img/Robotron-pecas/Amarelo/Robotron 2000 - Amarelo.png",
  "img/Robotron-pecas/Azul/Robotron 2000 - Azul.png",
  "img/Robotron-pecas/Branco/Robotron 2000 - Branco.png",
  "img/Robotron-pecas/Preto/Robotron 2000 - Preto.png",
  "img/Robotron-pecas/Rosa/Robotron 2000 - Rosa.png",
  "img/Robotron-pecas/Vermelho/Robotron 2000 - Vermelho.png",

]

let contador = 0;

robotron.addEventListener('click', () => {
    mudaCorRobotron()
})



function mudaCorRobotron(){
  robotron.src = robotronColorido[contador]
  contador++

  if (contador == robotronColorido.length){
    contador = 0
  }
}



controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.  parentNode)

   atualizaPeca(evento.target.dataset.peca);
  
  })

});

function manipulaDados(operacao, controle){
  const peca = controle.querySelector("[data-contador]");

  if(operacao == '-' && peca.value > 0){
    peca.value = parseInt(peca.value) - 1}
  
  else if (operacao == '+'){
    peca.value = parseInt(peca.value) + 1 
  }

}

function atualizaPeca(peca){

  estatistica.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  });
}
      