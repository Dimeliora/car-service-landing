export const modalHandler = (
	modal,
	triggers,
	onOpen = () => {},
	onClose = () => {}
) => {
	const modalElm = document.querySelector(modal);
	const openModalButtons = document.querySelectorAll(triggers);

	if (modalElm && openModalButtons) {
		const closeButton = modalElm.querySelector(".modal__close-button");

		const closeHandler = () => {
			modalElm.classList.remove("modal--visible");
			document.body.classList.remove("scroll-prevent");

			onClose();
		};

		modalElm.addEventListener("click", (e) => {
			if (e.target === modalElm) {
				closeHandler();
			}
		});

		closeButton.addEventListener("click", closeHandler);

		openModalButtons.forEach((button) => {
			button.addEventListener("click", () => {
				modalElm.classList.add("modal--visible");
				document.body.classList.add("scroll-prevent");

				onOpen();
			});
		});
	}
};
