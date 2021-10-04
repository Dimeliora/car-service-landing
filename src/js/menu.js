export const menuHandler = () => {
	const menu = document.querySelector("#header-menu");
	const menuButton = document.querySelector(".header__menu-button");
	const menuDropDowns = document.querySelectorAll(
		".header__menu-item--dropdown"
	);

	if (menu && menuButton) {
		menuButton.addEventListener("click", () => {
			menu.classList.toggle("header__row--visible");
			menuButton.classList.toggle("header__menu-button--active");
			document.body.classList.toggle("scroll-prevent");
		});
	}

	menuDropDowns.forEach((dropdown) => {
		const dropdownBtn = dropdown.querySelector(
			".header__submenu-expand-button"
		);
		const subMenu = dropdown.querySelector(".header__submenu");

		dropdownBtn.addEventListener("click", () => {
			dropdownBtn.classList.toggle(
				"header__submenu-expand-button--active"
			);
			subMenu.classList.toggle("header__submenu--visible");
		});
	});
};
