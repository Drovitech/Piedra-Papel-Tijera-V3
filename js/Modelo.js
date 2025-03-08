class GameModel {
  constructor() {
    this.userScore = 0;
    this.compScore = 0;
  }

  movidaComp() {
    const opciones = ['r', 'p', 't'];
    const random = Math.floor(Math.random() * 3);
    return opciones[random];
  }

  actualizarPuntaje(winner) {
    if (winner === 'user') {
      this.userScore++;
    } else if (winner === 'comp') {
      this.compScore++;
    }
  }

  obtenerPuntajes() {
    return {
      userScore: this.userScore,
      compScore: this.compScore
    };
  }

  determinarResultado(opcionUser, opcionPc) {
    const resultados = {
      'rt': 'user', 'pr': 'user', 'tp': 'user',
      'rp': 'comp', 'pt': 'comp', 'tr': 'comp',
      'rr': 'tie', 'pp': 'tie', 'tt': 'tie'
    };
    return resultados[opcionUser + opcionPc] || 'error';
  }
}