class BirthOutput extends HTMLElement {
  connectedCallback() {
    this.renderPage();
  }

  private renderPage() {
    this.setAttribute('class', 'birth__output');
    this.innerHTML = `
      <p class="birth__text">
        <span class="birth__number" id="yearNumber">- -</span> years
      </p>
      <p class="birth__text">
        <span class="birth__number" id="monthNumber">- -</span> months
      </p>
      <p class="birth__text">
        <span class="birth__number" id="dayNumber">- -</span> days
      </p>
    `;
  }
}

customElements.define('birth-output', BirthOutput);
