const form = document.querySelector(".form");
const input = document.querySelector(".form__input");

input.addEventListener('focus', () => {
	form.classList.add('form--active');
})

input.addEventListener('blur', () => {
	form.classList.remove('form--active');
})


// Service hover on card

const card = document.querySelector(".card");
console.log(card);
card.addEventListener('mouseover', () => {
		card.classList.add("card--active");
		const img = card.getElementsByTagName('img');

		console.log(img.style.src);
})
card.addEventListener('mouseleave', () => {
	card.classList.remove("card--active");
})