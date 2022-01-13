import { menuElms } from './menu-dom-elements';

const menuHandler = () => {
    menuElms.menuElm.classList.toggle('header__row--visible');
    menuElms.menuButtonElm.classList.toggle('header__menu-button--active');

    document.body.classList.toggle('scroll-prevent');
};

menuElms.menuButtonElm.addEventListener('click', menuHandler);
