"use strict";

import { menuHandler } from "./menu";
import { modalHandler } from "./modal";
import { videoFrameHandler } from "./video";
import { tabsHandler } from "./tabs";

const VIDEO_FRAME = "#video";
const VIDEO_MODAL = "#video-modal";
const VIDEO_MODAL_TRIGGERS = '[data-trigger="video-modal"]';
const INITIAL_TAB_IDX = 1;

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

	tabsHandler(INITIAL_TAB_IDX);
});
