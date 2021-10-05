"use strict";

import { menuHandler } from "./menu";
import { modalHandler } from "./modal";
import { videoFrameHandler } from "./video";
import { tabsHandler } from "./tabs";
import { counterHandler } from "./counter";

const VIDEO_FRAME = "#video";
const VIDEO_MODAL = "#video-modal";
const VIDEO_MODAL_TRIGGERS = '[data-trigger="video-modal"]';
const FORM_MODAL = "#appointment-modal";
const FORM_MODAL_TRIGGERS = '[data-trigger="appointment-modal"]';

const INITIAL_TAB_IDX = 1;
const MAX_CUSTOMERS_COUNTER = 1000;

document.addEventListener("DOMContentLoaded", () => {
	menuHandler();

	const video = videoFrameHandler(VIDEO_FRAME);
	if (video) {
		modalHandler(
			VIDEO_MODAL,
			VIDEO_MODAL_TRIGGERS,
			video.playVideo,
			video.pauseVideo
		);
	}

	modalHandler(FORM_MODAL, FORM_MODAL_TRIGGERS);

	tabsHandler(INITIAL_TAB_IDX);

	counterHandler(MAX_CUSTOMERS_COUNTER);
});
