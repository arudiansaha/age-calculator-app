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
  button: document.querySelector<HTMLButtonElement>('#birthSubmit')!,
  day: document.querySelector<HTMLInputElement>('#birthDay')!,
  month: document.querySelector<HTMLInputElement>('#birthMonth')!,
  year: document.querySelector<HTMLInputElement>('#birthYear')!,
});

submitInitiator.init();
