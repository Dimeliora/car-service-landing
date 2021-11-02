export const tabs = ({
	tabsSelector,
	tabContentSelector,
	tabActiveClass,
	tabItemActiveClass,
	initialTabIdx = 0,
}) => {
	const tabs = document.querySelector(tabsSelector);
	const tabContent = document.querySelector(tabContentSelector);

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
				btn.classList.remove(tabActiveClass);
			});

			activeButton.classList.add(tabActiveClass);

			tabContentItems.forEach((item) => {
				item.classList.remove(tabItemActiveClass);
			});

			activeContentItem.classList.add(tabItemActiveClass);

			activeTabUnderlineHandler(activeButton);
		};

		tabsButtons.forEach((button, idx) => {
			button.addEventListener("click", () => {
				activeTabHandler(idx);
			});
		});

		window.addEventListener("resize", () => {
			const activeTab = document.querySelector(`.${tabActiveClass}`);

			if (activeTab) {
				activeTabUnderlineHandler(activeTab);
			}
		});

		activeTabHandler(initialTabIdx);
	}
};
