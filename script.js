let box = document.querySelector('.box');
let hexValue = document.querySelector('.hexValue');
let btn = document.querySelector('.btn');
btn.addEventListener('click', changeColor);


function changeColor() {
	code_color = document.querySelector('.hexValue'),
		r = Math.floor(Math.random() * (256)),
		g = Math.floor(Math.random() * (256)),
		b = Math.floor(Math.random() * (256)),
		color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	box.style.background = color;
	hexValue.innerHTML = color;

}