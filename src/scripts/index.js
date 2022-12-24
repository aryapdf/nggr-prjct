import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu-btn'),
  drawer: document.querySelector('#navigation'),
  content: document.querySelector('#main-content'),
  close: document.querySelector('#btn-close'),
  menu: document.querySelector('#drawer-menu'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
});
