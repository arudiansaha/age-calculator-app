type TSubmitInitiator = {
  button: HTMLButtonElement;
  day: HTMLInputElement;
  month: HTMLInputElement;
  year: HTMLInputElement;
};

class SubmitInitiator {
  private button: HTMLButtonElement;
  private day: HTMLInputElement;
  private month: HTMLInputElement;
  private year: HTMLInputElement;

  constructor({ button, day, month, year }: TSubmitInitiator) {
    this.button = button;
    this.day = day;
    this.month = month;
    this.year = year;

    this.init();
  }

  init() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.renderOutput();
    })
  }

  private renderOutput() {
    this.validateDateInput();

    const date = this.calculateDate();
    document.querySelector<HTMLSpanElement>('#yearNumber')!.innerText = date.year || '- -';
    document.querySelector<HTMLSpanElement>('#monthNumber')!.innerText = date.month || '- -';
    document.querySelector<HTMLSpanElement>('#dayNumber')!.innerText = date.day || '- -';
  }

  private validateDateInput() {
    if (this.day.value === '') {
      throw new Error('Day cannot be empty');
    }

    if (this.month.value === '') {
      throw new Error('Month cannot be empty');
    }

    if (this.year.value === '') {
      throw new Error('Year cannot be empty');
    }
  }

  private calculateDate() {
    const currentMonth = new Date().getMonth() + 1;

    const day = this.calculateDay(Number.parseInt(this.day.value));
    let month = this.calculateMonth(Number.parseInt(this.month.value));
    let year = this.calculateYear(Number.parseInt(this.year.value));

    if (Number.parseInt(this.month.value) > currentMonth) {
      year -= 1;
    }

    const result = {
      year: year.toString(),
      month: month.toString(),
      day: day.toString(),
    };

    return result;
  }

  private calculateYear(number: number) {
    const currentYear = new Date().getFullYear();

    if (number > currentYear) {
      throw new Error('Year cannot be greater than current year');
    };

    return currentYear - number;
  }

  private calculateMonth(number: number) {
    let currentMonth = new Date().getMonth() + 1;

    if (number > currentMonth) {
      currentMonth += 12;
      return currentMonth - number;
    }

    return currentMonth - number;
  }

  private calculateDay(number: number) {
    let currentDay = new Date().getDate();
    const lastMonth = new Date().getMonth() - 1;
    let lastDayOfLastMonth = this.getLastDayOfMonth(lastMonth);

    if (number > currentDay) {
      lastDayOfLastMonth -= 1;
      currentDay += lastDayOfLastMonth;
      return currentDay - number;
    }

    return currentDay - number;
  }

  private getLastDayOfMonth(month: number) {
    const currentYear = new Date().getFullYear();

    return new Date(currentYear, month, 0).getDate();
  }
}

export default SubmitInitiator;
