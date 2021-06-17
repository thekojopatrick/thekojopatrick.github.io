;(window.sr = ScrollReveal()),
	sr.reveal('h1', {
		delay: 0,
		duration: 200,
		origin: 'bottom',
		distance: '100px',
	}),
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (e) {
			var o
			location.pathname.replace(/^\//, '') !=
				this.pathname.replace(/^\//, '') ||
				location.hostname != this.hostname ||
				((o = (o = $(this.hash)).length
					? o
					: $('[name=' + this.hash.slice(1) + ']')).length &&
					(e.preventDefault(),
					$('html, body').animate(
						{ scrollTop: o.offset().top },
						100,
						function () {
							var e = $(o)
							if ((e.focus(), e.is(':focus'))) return !1
							e.attr('tabindex', '-1'), e.focus()
						}
					)))
		})
        
const sections = document.querySelectorAll('section'),
	scrollTop = document.querySelector('.scroll-top')
window.addEventListener('scroll', function () {
	const o = (window.innerHeight / 5) * 4
	sections.forEach(e => {
		e.getBoundingClientRect().top < o
			? (e.classList.add('fadeIn'), scrollTop.classList.add('show'))
			: (e.classList.remove('fadeIn'), scrollTop.classList.remove('show'))
	})
})
