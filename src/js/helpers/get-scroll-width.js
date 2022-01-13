export const getScrollWidth = () => {
	const div = document.createElement("div");
	div.style.cssText = `
			width: 50px;
			heigth: 50px;
			overflow-y: scroll;
			visibility: hidden
		`;

	document.body.append(div);
	const scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	return scrollWidth;
};
