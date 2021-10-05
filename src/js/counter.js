import { getRandomInt } from "./helpers/getRandomInt";

export const counterHandler = (maxCounterValue = 100) => {
	const counterElm = document.querySelector("#counter");
	let counter = 0;

	const updateCounterContent = () => {
		counterElm.textContent = `${counter.toLocaleString("en-EN")}+`;
		counterElm.classList.add("appointment__counter-value--animate");

		setTimeout(() => {
			counterElm.classList.remove("appointment__counter-value--animate");
		}, 700);
	};

	const startUpdateTimer = (observer) => {
		observer.disconnect();

		setTimeout(function recursive() {
			counter += getRandomInt(1, 99);
			updateCounterContent();

			if (counter < maxCounterValue) {
				setTimeout(recursive, getRandomInt(1000, 5000));
			}
		}, 1000);
	};

	if (counterElm) {
		counterElm.textContent = `${counter.toLocaleString("en-EN")}+`;

		const counterObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startUpdateTimer(observer);
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 1.0,
			}
		);

		counterObserver.observe(counterElm);
	}
};
