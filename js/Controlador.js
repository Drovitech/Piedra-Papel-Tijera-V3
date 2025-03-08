class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.iniciarEventos();
  }

  iniciarEventos() {
    this.view.acciones.r.addEventListener('click', () => this.jugar('r'));
    this.view.acciones.p.addEventListener('click', () => this.jugar('p'));
    this.view.acciones.t.addEventListener('click', () => this.jugar('t'));
  }

  jugar(opcionUser) {
    const opcionPc = this.model.movidaComp();
    const resultado = this.model.determinarResultado(opcionUser, opcionPc);


    if (resultado === 'user') {
      this.model.actualizarPuntaje('user');
      this.view.mostrarResultado(`¡Has ganado! ${this.view.convertirLetra(opcionUser)} vence a ${this.view.convertirLetra(opcionPc)}`);
      this.view.agregarClase(opcionUser, opcionPc, 'win');
    } else if (resultado === 'comp') {
      this.model.actualizarPuntaje('comp');
      this.view.mostrarResultado(`¡Has perdido! ${this.view.convertirLetra(opcionPc)} vence a ${this.view.convertirLetra(opcionUser)}`);
      this.view.agregarClase(opcionUser, opcionPc, 'lose');
    } else {
      this.view.mostrarResultado(`¡Es un empate! Ambos escogieron ${this.view.convertirLetra(opcionUser)}`);
      this.view.agregarClase(opcionUser, opcionPc, 'tie');
    }

    const { userScore, compScore } = this.model.obtenerPuntajes();
    this.view.actualizarPuntajes(userScore, compScore);
  }
}
