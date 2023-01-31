const ellabButton = document.querySelector('.menu__element_ellab');
const sksButton = document.querySelector('.menu__element_sks');
const elmontagButton = document.querySelector('.menu__element_elmontag');
const opsButton = document.querySelector('.menu__element_ops');
const videoButton = document.querySelector('.menu__element_video');

const ellabModule = document.querySelector('.module_ellab');
const sksModule = document.querySelector('.module_sks');
const elmontagModule = document.querySelector('.module_elmontag');
const opsModule = document.querySelector('.module_ops');
const videoModule = document.querySelector('.module_video');

let activeModule = ellabModule;
let activeButtom = ellabButton;

function chengeModule(m, b) {
  if (b != activeButtom) {
    activeButtom.classList.remove('menu__element_checked');
    activeButtom = b;
    b.classList.add('menu__element_checked');
    activeModule.classList.remove('module_opened');
    activeModule = m;
    m.classList.add('module_opened'); 
  }
}

ellabButton.addEventListener('click', () => chengeModule(ellabModule, ellabButton));
sksButton.addEventListener('click', () => chengeModule(sksModule, sksButton));
elmontagButton.addEventListener('click', () => chengeModule(elmontagModule, elmontagButton));
opsButton.addEventListener('click', () => chengeModule(opsModule, opsButton));
videoButton.addEventListener('click', () => chengeModule(videoModule, videoButton));

