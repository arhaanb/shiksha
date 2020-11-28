// Text Change Effect

var sentences = [
	'Teach',
	'Learn',
	'Mentor',
];

var counter = 1;

var ticker = $(".ticker");

function changeText() {
	var el = ticker,
		text = sentences[counter],
		oldText = el.text();

	var x = setInterval(function () {
		if (oldText.length != 0) {
			oldText = oldText.slice(0, -1);
			el.text(oldText);
		}
		else {
			setTimeout(function () {
				var y = setInterval(function () {
					if (el.text().length != text.length) {
						el.text(text.slice(0, el.text().length + 1));
					}
					else {
						setTimeout(function () {
							if (counter >= sentences.length - 1)
								counter = 0;
							else
								counter++;

							changeText();
						}, 3000);
						clearInterval(y);
					}
				}, 60);
			}, 60);
			clearInterval(x);
		}
	}, 60);
}

ticker.html(sentences[0]);

setTimeout(changeText, 3000);



// Responsive Navbar effect

$(document).ready(function () {
	$("#lines").click(function () {
		$(this).hide();
		$('#close').fadeIn(700);
		$('.mobnav').slideDown(700);
	});

	$("#close").click(function () {
		$(this).hide();
		$('#lines').fadeIn(700);
		$('.mobnav').slideUp(700)
	});
});

$(document).on('click', function (event) {
	$('.mobnav').slideUp(700);
	$('#close').hide();
	$('#lines').fadeIn(700);
});
$('.nav').on('click', function (event) {
	event.stopPropagation();
});