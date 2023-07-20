class BirthInput extends HTMLElement {
  connectedCallback() {
    this.renderPage();
  }

  private renderPage() {
    this.setAttribute('class', 'birth__input');
    this.innerHTML = `
      <form class="form" id="birthForm">
        <fieldset class="form__field">
          <label class="form__label">Day</label>
          <input
            class="form__input"
            type="number"
            id="birthDay"
            name="birthDay"
            min="1"
            max="31"
            placeholder="DD"
            required
          >
        </fieldset>
        <fieldset class="form__field">
          <label class="form__label">Month</label>
          <input
            class="form__input"
            type="number"
            id="birthMonth"
            name="birthMonth"
            min="1"
            max="12"
            placeholder="MM"
            required
          >
        </fieldset>
        <fieldset class="form__field">
          <label class="form__label">Year</label>
          <input
            class="form__input"
            type="number"
            id="birthYear"
            name="birthYear"
            min="1900"
            max="2020"
            placeholder="YYYY"
            required
          >
        </fieldset>
        <fieldset class="form__field--custom">
          <hr class="form__line">
          <button
            class="form__submit"
            type="submit"
            form="birthForm"
            aria-label="submit birthday"
          >
            <img
              src="./assets/images/icon-arrow.svg"
              alt="arrow"
              aria-label="Submit birthday"
            >
          </button>
        </fieldset>
      </form>
    `;
  }
}

customElements.define('birth-input', BirthInput);
