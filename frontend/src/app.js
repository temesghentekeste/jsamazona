import HomeScreen from './screens/HomeScreen.js';
const router = () => {
  const main = document.querySelector('#main-container');
  main.innerHTML = HomeScreen.render();
};

window.addEventListener('load', router);
