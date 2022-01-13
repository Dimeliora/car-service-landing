import { counterElms } from './counter-dom-elements';
import { getRandomInt } from '../helpers/get-random-int';

const MAX_COUNTER_VALUE = 1000;
let counter = 0;

const updateCounterContent = (cnt) => {
    counterElms.counterValueElm.textContent = `${cnt.toLocaleString('en-EN')}+`;
    
    counterElms.counterValueElm.classList.add(
        'appointment__counter-value--animate'
    );
};

const startUpdateTimer = (observer) => {
    observer.disconnect();

    setTimeout(function recursive() {
        counter += getRandomInt(1, 99);
        updateCounterContent(counter);

        if (counter < MAX_COUNTER_VALUE) {
            setTimeout(recursive, getRandomInt(1000, 3000));
        }
    }, 1000);
};

counterElms.counterValueElm.addEventListener('animationend', () => {
    counterElms.counterValueElm.classList.remove(
        'appointment__counter-value--animate'
    );
});

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startUpdateTimer(observer);
            }
        });
    },
    {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    }
);

counterObserver.observe(counterElms.counterValueElm);
