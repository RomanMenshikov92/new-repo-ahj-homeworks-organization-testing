import visa from '../img/visa.png';
import mastercard from '../img/mastercard.png';
import mir from '../img/mir.png';

export default class ValidatorPlay {
  constructor() {
    this.container = null; // for container
    this.submitListeners = [];
    this.valueListeners = [];
  }

  // binding container to class
  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  // check container
  checkBinding() {
    if (this.container === null) {
      throw new Error('ValidatorPlay not bind to DOM');
    }
  }

  // rendering HTML
  drawUI() {
    this.checkBinding();

    this.container.innerHTML = `
      <H2>
        Credit Card Validator
      </H2>
      <div class="container">
        <div class="imgs-cards">
          <img src="${visa}" alt="">
          <img src="${mastercard}" alt="">
          <img src="${mir}" alt="">
        </div>
        <form data-id="validator-form" class="validator-form">
          <div class="container-label">
            <input data-id="validator-card" class="validator-card" type="text" name="validator-card">
            <label data-id="validator-label" class="validator-label">-</label>
          </div>
          <button data-id="validate-btn" class="validate-btn">Click to Validate</button>
        </form>
        <div class="example-header">Example credit card numbers</div>
        <table>
          <tr>
            <td>Visa</td>
            <td>4111111111111111</td>
          </tr>
          <tr>
            <td>MasterCard</td>
            <td>5555555555554444</td>
          </tr>
          <tr>
            <td>Mir</td>
            <td>220311111111111111</td>
          </tr>
        </table>
      </div>
    `;

    // DOM elements
    this.validatorForm = this.container.querySelector('[data-id=validator-form]');
    this.validatorCard = this.container.querySelector('[data-id=validator-card]');
    this.validatorLabel = this.container.querySelector('[data-id=validator-label]');

    // DOM events
    this.validatorForm.addEventListener('submit', (event) => this.onSubmit(event));
    this.validatorCard.addEventListener('input', (event) => this.onInput(event));
  }

  // Add listener to submit
  addSubmitListeners(callback) {
    this.submitListeners.push(callback);
  }

  // Add listener to input
  addValueListeners(callback) {
    this.valueListeners.push(callback);
  }

  // send form
  onSubmit(event) {
    event.preventDefault();
    const { value } = this.validatorCard;
    this.submitListeners.forEach((o) => o.call(null, value));
  }

  // send input value
  onInput(event) {
    event.preventDefault();
    const { value } = event.currentTarget;
    this.valueListeners.forEach((o) => o.call(null, value));
  }

  // text to label
  labelText(text = '-') {
    this.validatorLabel.textContent = text;
  }
}
