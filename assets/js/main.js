$(() => {
	// ====== [BEGIN] Wow Animation ======
	new WOW().init();
	// ====== [END] Wow Animation ======

	// ====== [BEGIN] Toggle the sidebar on mobile version ======
	const btnMenu = document.getElementById("menu-icon-trigger");
	btnMenu.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector('.menu-icon-wrapper').classList.toggle('open');
		document.querySelector('.nav-content').classList.toggle('is-active');
		document.querySelector('.brand').classList.toggle('is-active');
	});
	// ====== [END] Toggle the sidebar on mobile version ======

	// ====== [BEGIN] Ripple Button Effect ======
	const root = document.documentElement;
	document.addEventListener("mousedown", ev => {
		let el = ev.target,
			top = 0,
			left = 0;
		// this loop to get every button on the page
		do {
			top += el.offsetTop;
			left += el.offsetLeft;
		} while (el = el.offsetParent);
		const x = (ev.clientX - left) / ev.target.offsetWidth;
		const y = (ev.clientY - top) / ev.target.offsetHeight;
		// give these values to CSS root element to feed them to 'left' & 'right' properties
		root.style.setProperty("--ripple-x", x);
		root.style.setProperty("--ripple-y", y);
	})
	// ====== [END] Ripple Button Effect ======

	// ====== [BEGIN] navbar animation on scroll ======
	$(window).on('scroll', () => {
		var navmenu = $('.navbar');
		if ($(window).scrollTop() < 30) {
			navmenu.removeClass("on-scroll");
		} else {
			navmenu.addClass('on-scroll');
		}
	});
	// ====== [END] navbar animation on scroll ======


	// ====== [BEGIN] Typing and deleting effect ======
	let list = document.getElementsByClassName('list-val');
	let words = [];
	let i = 0;

	// Get words from ul list
	for (let i = 0; i < list.length; i++)
		words.push(list[i].textContent);

	// Typing Effect
	function typingEffect() {
		let word = words[i].split("");
		let loopTyping = function () {
			if (word.length > 0) {
				document.getElementById('word').innerHTML += word.shift();
			} else {
				setTimeout(deletingEffect, 700);
				return false;
			};
			setTimeout(loopTyping, 140); // typing a word duration
		};
		loopTyping();
	};

	// Deleting Effect
	function deletingEffect() {
		let word = words[i].split("");
		let loopDeleting = function () {
			if (word.length > 0) {
				word.pop();
				document.getElementById('word').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			setTimeout(loopDeleting, 70); // Deleting duration
		};
		loopDeleting();
	};

	// Run the code
	typingEffect();
	// ====== [END] Typing and deleting effect ======

});
