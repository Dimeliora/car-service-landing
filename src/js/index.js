"use strict";

import { menuHandler } from "./menu";
import { modalHandler } from "./modal";
import { videoFrameHandler } from "./video";

document.addEventListener("DOMContentLoaded", () => {
	menuHandler();

	const videoControl = videoFrameHandler("#video");

	modalHandler("#video-modal", '[data-trigger="video-modal"]', () => {
		videoControl("pauseVideo");
	});
});
