import { initBuscador } from './buscador.js';

initBuscador();

const sonidito = 'sonidito.mp3';
const clickar = new Audio(sonidito);
const playSound = () => clickar.play();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', playSound);
});