class GameView {
  constructor() {
    this.userScore_span = document.getElementById('user-score');
    this.compScore_span = document.getElementById('comp-score');
    this.result_div = document.querySelector('.result p');
    this.acciones = {
      r: document.getElementById('r'),
      p: document.getElementById('p'),
      t: document.getElementById('t')
    };
  }
  convertirLetra(opcion) {
  if (opcion == 'r') {
    return "Piedra ✊";
  } else if (opcion == 'p') {
    return "Papel 🤚";
  } else {
    return "Tijeras ✌";
  }
}

  actualizarPuntajes(userScore, compScore) {
    this.userScore_span.innerHTML = userScore;
    this.compScore_span.innerHTML = compScore;
  }

  mostrarResultado(resultMessage) {
    this.result_div.innerHTML = resultMessage;
  }

  agregarClase(opcionUser, opcionPc, resultado) {
    const userChoice_div = this.acciones[opcionUser];
    const pcChoice_div = this.acciones[opcionPc];
    
    if (resultado === 'win') {
      userChoice_div.classList.add('verde');
      pcChoice_div.classList.add('rojo');
    } else if (resultado === 'lose') {
      userChoice_div.classList.add('rojo');
      pcChoice_div.classList.add('verde');
    } else {
      userChoice_div.classList.add('gris');
      pcChoice_div.classList.add('gris');
    }

    setTimeout(() => {
      userChoice_div.classList.remove('verde', 'rojo', 'gris');
      pcChoice_div.classList.remove('verde', 'rojo', 'gris');
    }, 2000);
  }
}
