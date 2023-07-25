import '../styles/main.scss';
import './components/birth-input';
import './components/birth-output';
import SubmitInitiator from './utils/submit-initiator';

const app = document.querySelector<HTMLDivElement>('#app');
app?.setAttribute('class', 'birth');
app!.innerHTML = `
  <birth-input></birth-input>
  <birth-output></birth-output>
`;

const submitInitiator = new SubmitInitiator({
  form: document.querySelector<HTMLFormElement>('#birthForm')!,
  day: document.querySelector<HTMLInputElement>('#birthDayInput')!,
  month: document.querySelector<HTMLInputElement>('#birthMonthInput')!,
  year: document.querySelector<HTMLInputElement>('#birthYearInput')!,
});

submitInitiator.init();
