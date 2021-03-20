// * Variables

let time, posX, posY;
let puntos = 0;
let seconds = 20;
let tocado = true;
let secondsInterval;
let pause;

// * Funciones

const start = () => {
  seconds = 20;
  document.querySelector('#tiempo').innerHTML = seconds;
  puntos = 0;
  document.querySelector('#score').innerHTML = puntos;
  let selector = document.querySelector('#dificultad');
  console.log(selector);
  let tiempo =
    selector.value == 'facil'
      ? 3000
      : selector.value == 'intermedio'
      ? 2000
      : selector.value == 'avanzado'
      ? 1500
      : selector.value == 'experto'
      ? 1000
      : null;
  console.log(tiempo);
  timer(tiempo);
  tocado = false;
  document.querySelector('#boton').disabled = true;
};

const timer = (difficulty) => {
  secondsInterval = setInterval(() => {
    if (!pause) {
      seconds -= 1;
      document.querySelector('#tiempo').innerHTML = seconds;
    }
  }, 1000);

  console.log('exec');

  time = setInterval(() => {
    if (!pause) {
      posX = Math.floor(Math.random() * document.documentElement.clientWidth);
      posY = Math.floor(Math.random() * document.documentElement.clientHeight);
      document.querySelector('#abeja').style.left = posX + 'px';
      document.querySelector('#abeja').style.top = posY + 'px';
      tocado = false;

      if (seconds <= 0) {
        seconds = 0;
        clearInterval(time);
        clearInterval(secondsInterval);
        document.querySelector('#boton').disabled = false;
      }
    }
  }, difficulty);
};

const score = () => {
  if (tocado == false) {
    tocado = true;
    puntos += 1;
    document.querySelector('#score').innerHTML = puntos;
  }
};

const pausa = () => {
  if (pause == 1) {
    pause = 0;
    tocado = false;
  } else {
    pause = 1;
    tocado = true;
  }
};
