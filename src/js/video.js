import { getScrollWidth } from "./helpers/getScrollWidth";

export const video = ({
	videoContainerId,
	videoModalSelector,
	videoTriggersSelector,
	videoModalCloseSelector,
	videoModalActiveClass,
	videoModalErrorClass,
}) => {
	const videoModal = document.querySelector(videoModalSelector);
	const videoTriggers = document.querySelectorAll(videoTriggersSelector);
	const videoModalClose = document.querySelector(videoModalCloseSelector);

	if (!videoModal || !videoContainerId) {
		return;
	}

	const scrollWidth = getScrollWidth();
	let videoPlayer;

	const initializeVideoPlayer = (videoId) => {
		const videoContainer = document.getElementById(videoContainerId);

		try {
			videoPlayer = new YT.Player(videoContainerId, {
				width: "100%",
				height: "100%",
				videoId,
				playerVars: {
					autoplay: 1,
				},
				events: {
					onReady: openVideoModalHandler,
				},
			});

			videoContainer.classList.remove(videoModalErrorClass);
		} catch (error) {
			videoContainer.classList.add(videoModalErrorClass);
			openVideoModalHandler();
		}
	};

	const openVideoModalHandler = () => {
		videoModal.classList.add(videoModalActiveClass);
		document.body.style.setProperty("overflow", "hidden");
		document.body.style.setProperty("margin-right", `${scrollWidth}px`);
	};

	const closeVideoModalHandler = () => {
		if (videoPlayer) {
			videoPlayer.destroy();
			videoPlayer = null;
		}

		videoModal.classList.remove(videoModalActiveClass);
		document.body.style.removeProperty("overflow");
		document.body.style.removeProperty("margin-right");
	};

	videoTriggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			const videoId = e.currentTarget.dataset.video;

			if (!videoPlayer) {
				initializeVideoPlayer(videoId);
			}
		});
	});

	videoModal.addEventListener("click", (e) => {
		if (e.target === videoModal) {
			closeVideoModalHandler();
		}
	});

	if (videoModalClose) {
		videoModalClose.addEventListener("click", closeVideoModalHandler);
	}
};
