import { getScrollWidth } from './helpers/getScrollWidth';

export const modal = ({
    modalSelector,
    modalTriggersSelector,
    modalCloseButtonSelector,
    modalActiveClass,
}) => {
    const modalElm = document.querySelector(modalSelector);
    const openModalButtons = document.querySelectorAll(modalTriggersSelector);
    const closeButton = document.querySelector(modalCloseButtonSelector);

    const scrollWidth = getScrollWidth();

    const closeHandler = () => {
        modalElm.classList.remove(modalActiveClass);
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('margin-right');
    };

    modalElm.addEventListener('click', (e) => {
        if (e.target === modalElm) {
            closeHandler();
        }
    });

    closeButton.addEventListener('click', closeHandler);

    openModalButtons.forEach((button) => {
        button.addEventListener('click', () => {
            modalElm.classList.add(modalActiveClass);
            document.body.style.setProperty('overflow', 'hidden');
            document.body.style.setProperty('margin-right', `${scrollWidth}px`);
        });
    });
};
