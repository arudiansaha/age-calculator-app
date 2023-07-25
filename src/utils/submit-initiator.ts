type TSubmitInitiator = {
  form: HTMLFormElement;
  day: HTMLInputElement;
  month: HTMLInputElement;
  year: HTMLInputElement;
};

type TInvalidMessage = {
  event: Event;
  labelId: string;
  messageId: string;
  message: string;
};

class SubmitInitiator {
  private form: HTMLFormElement;

  private day: HTMLInputElement;

  private month: HTMLInputElement;

  private year: HTMLInputElement;

  constructor({
    form, day, month, year,
  }: TSubmitInitiator) {
    this.form = form;
    this.day = day;
    this.month = month;
    this.year = year;

    this.init();
  }

  init() {
    this.day.addEventListener('input', (event: Event) => {
      this.validationDayInputMessage(event);
    });

    this.day.addEventListener('invalid', (event: Event) => {
      this.validationDayInputMessage(event);
    });

    this.month.addEventListener('input', (event: Event) => {
      this.validationMonthInputMessage(event);
    });

    this.month.addEventListener('invalid', (event: Event) => {
      this.validationMonthInputMessage(event);
    });

    this.year.addEventListener('input', (event: Event) => {
      this.validationYearInputMessage(event);
    });

    this.year.addEventListener('invalid', (event: Event) => {
      this.validationYearInputMessage(event);
    });

    this.form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
      this.renderOutput();
    });
  }

  private renderOutput() {
    const date = this.calculateDate();
    document.querySelector<HTMLSpanElement>('#yearNumber')!.innerText = date.year;
    document.querySelector<HTMLSpanElement>('#monthNumber')!.innerText = date.month;
    document.querySelector<HTMLSpanElement>('#dayNumber')!.innerText = date.day;
  }

  private calculateDate() {
    const currentMonth = new Date().getMonth() + 1;
    const day = this.calculateDay(Number.parseInt(this.day.value, 10));
    const month = this.calculateMonth(Number.parseInt(this.month.value, 10));
    let year = this.calculateYear(Number.parseInt(this.year.value, 10));

    if (Number.parseInt(this.month.value, 10) > currentMonth) {
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
    }

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

  private validationYearInputMessage(event: Event) {
    event.preventDefault();

    this.customValidationInputMessage({
      event,
      labelId: '#birthYearLabel',
      messageId: '#birthYearMessage',
      message: 'Must be from the past',
    });
  }

  private validationMonthInputMessage(event: Event) {
    event.preventDefault();

    this.customValidationInputMessage({
      event,
      labelId: '#birthMonthLabel',
      messageId: '#birthMonthMessage',
      message: 'Must be a valid month',
    });
  }

  private validationDayInputMessage(event: Event) {
    event.preventDefault();

    this.customValidationInputMessage({
      event,
      labelId: '#birthDayLabel',
      messageId: '#birthDayMessage',
      message: 'Must be a valid day',
    });
  }

  private customValidationInputMessage({
    event, labelId, messageId, message,
  }: TInvalidMessage) {
    const target = event.target as HTMLInputElement;
    const validityState = target.validity;

    const labelElement = document.querySelector<HTMLLabelElement>(labelId)!;
    const messageElement = document.querySelector<HTMLSpanElement>(messageId)!;

    if (validityState.valueMissing) {
      target.classList.add('invalid');
      labelElement.classList.add('invalid');
      messageElement.innerText = 'This field is required';
    }

    if (validityState.rangeOverflow) {
      target.classList.add('invalid');
      labelElement.classList.add('invalid');
      messageElement.innerText = message;
    }

    if (validityState.valid) {
      target.classList?.remove('invalid');
      labelElement.classList?.remove('invalid');
      messageElement.innerText = '';
    }
  }
}

export default SubmitInitiator;
