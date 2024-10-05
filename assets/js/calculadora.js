export default class Calculadora {
  constructor(campoInputResultado, buttons) {
    this.campoInputResultado = document.querySelector(campoInputResultado)
    this.buttons = document.querySelectorAll(buttons)
  }
  adicionarEventosButtons() {
    this.buttons.forEach((event) => {
      event.addEventListener('click', () => {
        const valorBotao = event.textContent
        if (valorBotao === "C") {
          this.limparCampo();
        } else if (valorBotao === "=") {
          this.calcularResultado();
        } else {
          this.adicionarValor(valorBotao);
        }
      })
    })
  }
  limparCampo() {
    this.campoInputResultado.value = ''
  }
  calcularResultado() {
    this.campoInputResultado.value = eval(this.campoInputResultado.value)
  }
  adicionarValor(valorBotao) {
    this.campoInputResultado.value += valorBotao;
  }
  bindEvents() {
    this.adicionarValor = this.adicionarValor.bind(this)
    this.limparCampo = this.limparCampo.bind(this)
    this.calcularResultado = this.calcularResultado.bind(this)
    this.adicionarEventosButtons = this.adicionarEventosButtons.bind(this)
  }
  init() {
    this.bindEvents()
    this.adicionarEventosButtons()
    return this
  }
}