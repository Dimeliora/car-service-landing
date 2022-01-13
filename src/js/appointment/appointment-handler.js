import { appointmentElms } from './appointment-dom-elements';
import { getScrollWidth } from '../helpers/get-scroll-width';

const scrollWidth = getScrollWidth();

const openAppointmentModalHandler = () => {
    appointmentElms.appointmentModalElm.classList.add('modal--visible');

    document.body.style.setProperty('overflow', 'hidden');
    document.body.style.setProperty('margin-right', `${scrollWidth}px`);
};

const closeAppointmentModalHandler = () => {
    appointmentElms.appointmentModalElm.classList.remove('modal--visible');

    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('margin-right');
};

const overlayClickHandler = (e) => {
    if (e.target === appointmentElms.appointmentModalElm) {
        closeAppointmentModalHandler();
    }
};

appointmentElms.appointmentModalTriggerElms.forEach((trigger) => {
    trigger.addEventListener('click', openAppointmentModalHandler);
});

appointmentElms.appointmentModalCloseElm.addEventListener(
    'click',
    closeAppointmentModalHandler
);

appointmentElms.appointmentModalElm.addEventListener(
    'click',
    overlayClickHandler
);
