export default class Calculadora {
  constructor(campo, buttons) {
    this.campo = document.querySelector(campo)
    this.buttons = document.querySelectorAll(buttons)
  }
  addEventos() {
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const valorBotao = btn.textContent
        if (valorBotao === "C") {
          this.limparResultado()
        } else if (valorBotao === '=') {
          this.calcularResultado()
        } else {
          this.addResultado(valorBotao)
        }
      })
    })
  }

  limparResultado() {
    this.campo.value = ''
  }
  calcularResultado() {
    try {
      this.campo.value = eval(this.campo.value)
    } catch (e) {
      console.log(e)
      this.campo.value = ''
    }
  }
  addResultado(valorBotao) {
    this.campo.value += valorBotao
  }
  init() {
    this.addEventos()
    return this
  }
}