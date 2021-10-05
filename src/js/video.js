export const videoFrameHandler = (iframe) => {
	const iframeElm = document.querySelector(iframe);

	if (iframeElm) {
		const videoControl = (func) => {
			iframeElm.contentWindow.postMessage(
				JSON.stringify({ event: "command", func }),
				"*"
			);
		};

		return {
			playVideo() {
				videoControl("playVideo");
			},

			pauseVideo() {
				videoControl("pauseVideo");
			},

			stopVideo() {
				videoControl("stopVideo");
			},
		};
	}
};
