import { tabsElms } from './tabs-dom-elements';

const INITIAL_TAB_INDEX = 1;
let activeTabElm = tabsElms.tabsContainerElm.children[INITIAL_TAB_INDEX];

const setActiveTabUnderline = (activeTab) => {
    const width = `${activeTab.clientWidth}px`;
    const left = `${activeTab.offsetLeft}px`;

    tabsElms.tabsContainerElm.style.setProperty('--width-value', width);
    tabsElms.tabsContainerElm.style.setProperty('--left-offset', left);
};

const setActiveTab = (tabIndex) => {
    [...tabsElms.tabsContainerElm.children].forEach((child) => {
        if (Number(child.dataset.tabButton) === tabIndex) {
            child.classList.add('gallery__tab-button--active');
        } else {
            child.classList.remove('gallery__tab-button--active');
        }
    });

    [...tabsElms.tabsContentElm.children].forEach((child) => {
        if (Number(child.dataset.tabIndex) === tabIndex) {
            child.classList.add('gallery__item--active');
        } else {
            child.classList.remove('gallery__item--active');
        }
    });

    setActiveTabUnderline(activeTabElm);
};

const tabClickHandler = (e) => {
    const selectedTabIndex = e.target.dataset.tabButton;
    if (selectedTabIndex) {
        activeTabElm = e.target;
        setActiveTab(Number(selectedTabIndex));
    }
};

const updateActiveTabView = () => {
    setActiveTabUnderline(activeTabElm);
};

tabsElms.tabsContainerElm.addEventListener('click', tabClickHandler);

window.addEventListener('resize', updateActiveTabView);

setActiveTab(INITIAL_TAB_INDEX);
