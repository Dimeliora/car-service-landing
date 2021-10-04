export const videoFrameHandler = (iframe) => {
	const iframeElm = document.querySelector(iframe);

	if (iframeElm) {
		return (func) => {
			iframeElm.contentWindow.postMessage(
				JSON.stringify({ event: "command", func }),
				"*"
			);
		};
	}
};
