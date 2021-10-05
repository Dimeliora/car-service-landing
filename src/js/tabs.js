export const tabsHandler = (initialTabIdx = 0) => {
	const tabs = document.querySelector(".gallery__tabs");
	const tabContent = document.querySelector(".gallery__view");

	if (tabs && tabContent) {
		const tabsButtons = [...tabs.children];
		const tabContentItems = [...tabContent.children];

		const activeTabUnderlineHandler = (activeButton) => {
			const width = `${activeButton.clientWidth}px`;
			const left = `${activeButton.offsetLeft}px`;

			tabs.style.setProperty("--width-value", width);
			tabs.style.setProperty("--left-offset", left);
		};

		const activeTabHandler = (activeTabIdx) => {
			const activeButton = tabsButtons[activeTabIdx];
			const activeContentItem = tabContentItems[activeTabIdx];

			if (!activeButton || !activeContentItem) {
				return;
			}

			tabsButtons.forEach((btn) => {
				btn.classList.remove("gallery__tab-button--active");
			});

			activeButton.classList.add("gallery__tab-button--active");

			tabContentItems.forEach((item) => {
				item.classList.remove("gallery__item--active");
			});

			activeContentItem.classList.add("gallery__item--active");

			activeTabUnderlineHandler(activeButton);
		};

		tabsButtons.forEach((button, idx) => {
			button.addEventListener("click", () => {
				activeTabHandler(idx);
			});
		});

		window.addEventListener("resize", () => {
			const activeTab = document.querySelector(".gallery__tab-button--active");

			if (activeTab) {
				activeTabUnderlineHandler(activeTab);
			}
		});

		activeTabHandler(initialTabIdx);
	}
};
