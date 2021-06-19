const sections = document.querySelectorAll('section'),
	scrollTop = document.querySelector('.scroll-top'),
	popup = document.getElementById('popup')
function showPopup() {
	setTimeout(() => {
		popup.classList.add('show')
	}, 100)
}
function removePopup() {
	setTimeout(() => {
		popup.classList.remove('show')
	}, 6e3)
}
;(window.sr = ScrollReveal()),
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (o) {
			var e
			location.pathname.replace(/^\//, '') !=
				this.pathname.replace(/^\//, '') ||
				location.hostname != this.hostname ||
				((e = (e = $(this.hash)).length
					? e
					: $('[name=' + this.hash.slice(1) + ']')).length &&
					(o.preventDefault(),
					$('html, body').animate(
						{ scrollTop: e.offset().top },
						100,
						function () {
							var o = $(e)
							if ((o.focus(), o.is(':focus'))) return !1
							o.attr('tabindex', '-1'), o.focus()
						}
					)))
		}),
	window.addEventListener('scroll', function () {
		const e = (window.innerHeight / 5) * 4
		sections.forEach(o => {
			o.getBoundingClientRect().top < e
				? (o.classList.add('fadeIn'), scrollTop.classList.add('show'))
				: (o.classList.remove('fadeIn'), scrollTop.classList.remove('show'))
		})
	}),
	window.addEventListener('DOMContentLoaded', function () {
		showPopup(), removePopup()
	})
