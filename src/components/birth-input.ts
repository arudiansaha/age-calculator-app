class BirthInput extends HTMLElement {
  connectedCallback() {
    this.renderPage();
  }

  private renderPage() {
    const arrowIcon = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="44"
        viewBox="0 0 46 44"
      >
        <g 
          fill="none" 
          stroke="#FFF" 
          stroke-width="2"
        >
          <path
            d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"
          />
        </g>
      </svg>
    `;

    this.setAttribute('class', 'birth__input');
    this.innerHTML = `
      <form class="form" id="birthForm">
        <fieldset class="form__field">
          <label
            class="form__label"
            id="birthDayLabel"
            for="birthDayInput"
            >
              Day
            </label>
          <input
            class="form__input"
            type="number"
            id="birthDayInput"
            name="birthDayInput"
            min="1"
            max="31"
            placeholder="DD"
            required
          >
          <p class="form__message" id="birthDayMessage"></p>
        </fieldset>
        <fieldset class="form__field">
          <label
            class="form__label"
            id="birthMonthLabel"
            for="birthMonthInput"
          >
            Month
          </label>
          <input
            class="form__input"
            type="number"
            id="birthMonthInput"
            name="birthMonthInput"
            min="1"
            max="12"
            placeholder="MM"
            required
          >
          <p class="form__message" id="birthMonthMessage"></p>
        </fieldset>
        <fieldset class="form__field">
          <label
            class="form__label"
            id="birthYearLabel"
            for="birthYearInput"
          >
            Year
          </label>
          <input
            class="form__input"
            type="number"
            id="birthYearInput"
            name="birthYearInput"
            min="1"
            max="2020"
            placeholder="YYYY"
            required
          >
          <p class="form__message" id="birthYearMessage"></p>
        </fieldset>
        <fieldset class="form__field--custom">
          <hr class="form__line">
          <button
            class="form__submit"
            id="birthSubmit"
            type="submit"
            form="birthForm"
            aria-label="submit birthday"
          >
            ${arrowIcon}
          </button>
        </fieldset>
      </form>
    `;
  }
}

customElements.define('birth-input', BirthInput);
