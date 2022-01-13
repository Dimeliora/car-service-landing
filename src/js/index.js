import './menu/menu-handler'

// import { menu } from "./menu";
import { modal } from "./modal";
import { video } from "./video";
import { tabs } from "./tabs";
import { counter } from "./counter";

document.addEventListener("DOMContentLoaded", () => {
	const INITIAL_TAB_IDX = 1;
	const MAX_CUSTOMERS_COUNTER = 1000;

	video({
		videoContainerId: "video-frame",
		videoModalSelector: "#video-modal",
		videoTriggersSelector: "button[data-trigger='video-modal']",
		videoModalCloseSelector: "#video-modal .modal__close",
		videoModalActiveClass: "modal--visible",
		videoModalErrorClass: "video__player--error",
	});

	modal({
		modalSelector: "#appointment-modal",
		modalTriggersSelector: '[data-trigger="appointment-modal"]',
		modalCloseButtonSelector: "#appointment-modal .modal__close",
		modalActiveClass: "modal--visible",
	});

	tabs({
		tabsSelector: ".gallery__tabs",
		tabContentSelector: ".gallery__view",
		tabActiveClass: "gallery__tab-button--active",
		tabItemActiveClass: "gallery__item--active",
		initialTabIdx: INITIAL_TAB_IDX,
	});

	counter({
		counterSelector: "#counter",
		counterAnimationClass: "appointment__counter-value--animate",
		maxCounterValue: MAX_CUSTOMERS_COUNTER,
	});
});
