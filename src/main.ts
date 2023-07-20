import '../styles/main.scss';
import './components/birth-input';
import './components/birth-output';

const app = document.querySelector<HTMLDivElement>('#app');
app?.setAttribute('class', 'birth');
app!.innerHTML = `
  <birth-input></birth-input>
  <birth-output></birth-output>
`;
