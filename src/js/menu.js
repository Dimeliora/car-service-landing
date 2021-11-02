export const menu = ({
	menuSelector,
	menuButtonSelector,
	menuDropdownsSelector,
	menuDropdownsButtonSelector,
	submenuSelector,
	menuActiveClass,
	menuButtonActiveClass,
	submenuActiveClass,
	menuDropdownsButtonActiveClass,
}) => {
	const menu = document.querySelector(menuSelector);
	const menuButton = document.querySelector(menuButtonSelector);
	const menuDropDowns = document.querySelectorAll(menuDropdownsSelector);

	if (menu && menuButton) {
		menuButton.addEventListener("click", () => {
			menu.classList.toggle(menuActiveClass);
			menuButton.classList.toggle(menuButtonActiveClass);
			document.body.classList.toggle("scroll-prevent");
		});
	}

	menuDropDowns.forEach((dropdown) => {
		const dropdownBtn = dropdown.querySelector(menuDropdownsButtonSelector);
		const subMenu = dropdown.querySelector(submenuSelector);

		dropdownBtn.addEventListener("click", () => {
			dropdownBtn.classList.toggle(menuDropdownsButtonActiveClass);
			subMenu.classList.toggle(submenuActiveClass);
		});
	});
};
