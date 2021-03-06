$(document).ready(function () {

	/* header =========*/
	$(".menu-toggle").click(function () {
		$(this).toggleClass('active');
		$(this).next(".menu").addClass('active');
		$('header').addClass('z-index');
		$('header').addClass('logo-w');
	});
	$('.menu-close').click(function () {
		$(this).parent('.menu').removeClass('active');
		$('header').removeClass('z-index');
		$('header').removeClass('logo-w');
	});

	$('#header-web').each(function () {
		$(".menu-web-toggle").click(function () {
			$(this).toggleClass('active');
			$(this).next(".menu-web").toggleClass('active');
		});

		$('.goNews').click(function(){
			$('.menu-web').removeClass('active');
		});

		if (jQuery(window).width() < 991) {
			$('.sub-web-toggle').click(function () {
				$(this).find('.sub-nav').slideToggle();
			});
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header-web').addClass('active');
		} else {
			$('#header-web').removeClass('active');
		}
	});


	$('.lang-btn i').click(function () {
		$(this).next('.lang-menu').slideToggle();
	});

	$('.lang-btn').click(function () {
		$('.lang-nav').slideToggle();
		$('.member-nav').slideUp();
	});

	$('.member-btn').click(function () {
		$('.member-nav').slideToggle();
		$('.lang-nav').slideUp();
	});

	$('.search-btn').click(function () {
		$(this).next('.search-bar').toggleClass('active');
	});

	if (jQuery(window).width() > 992) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$("header").addClass("active");
			} else {
				$("header").removeClass("active");
			}
		});
	}

	$('.sign_up_toggle').click(function () {
		$('#sign_up').addClass('active');
		$('#sign_in').removeClass('active');
		$('#forgetpassword').removeClass('active');
		$('#welcome').removeClass('active');
		$('.pop_bg').addClass('active');
	});
	$('.sign_in_toggle').click(function () {
		$('#sign_in').addClass('active');
		$('#sign_up').removeClass('active');
		$('#forgetpassword').removeClass('active');
		$('#welcome').removeClass('active');
		$('.pop_bg').addClass('active');
	});
	$('.forgetpassword_toggle').click(function () {
		$('#forgetpassword').addClass('active');
		$('#sign_in').removeClass('active');
		$('#sign_up').removeClass('active');
		$('#welcome').removeClass('active');
		$('.pop_bg').addClass('active');
	});

	$('.pop_close').click(function () {
		$('.pop_bg').removeClass('active');
		$('.pop').removeClass('active');
	});


	$('.tag-btn').click(function () {
		$('.tag-btn-inner').slideToggle();
	});

	$('.tagrow-item').click(function () {
		$(this).toggleClass('active');
	});
	$('.tagrow-item .tag-cancel').click(function () {
		$(this).parent('.tagrow-item').remove();
	});

	$('.edit-favorite-btn').click(function () {
		$('#favorite-tagedit-pop').addClass('active');
		$('.pop_bg').addClass('active');
	});

	$('.tags-edit-btn').click(function () {
		$('#manage-pop').addClass('active');
		$('.pop_bg').addClass('active');
	});

	$('.pop_bg').click(function () {
		$('.pop').removeClass('active');
		$('.pop_bg').removeClass('active');
	});

	$('.add-btn').click(function(){
		$(this).toggleClass('active');
	});

	$('#showMewhere').click(function () {
		$('.showMewhere-inner').toggleClass('active');
	});

	$('#manage-pop').each(function () {
		$('.tagrow-item').click(function () {
			$('.manage-selectControl').slideDown();
		});

		$('.tag-editor').click(function () {
			$('.tag-editor-input').slideToggle();
		});
	});

	setInterval(function() {
		$('.cube-container').hide();
	}, 1000);

	/* ==========================================================================
			select
	==========================================================================*/
	$('.selectstyle').each(function () {
		var $this = $(this),
			numberOfOptions = $(this).children('option').length;

		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');

		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function () {
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			//console.log($this.val());
		});

		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
		});

	});

	$("a.anchor").on('click', function (event) {

		if (this.hash !== "") {
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top - 90
			}, 800, function () {

				window.location.hash = hash;
			});
		} // End if
	});


	/* ==========================================================================
			頁籤
	==========================================================================*/

	$(function () {
		var _showTab = 0;
		var $defaultLi = $('ul.cutover li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().removeClass('show');

		$('ul.cutover li').click(function () {
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');

			return false;
		}).find('a').focus(function () {
			this.blur();
		});
	});

});

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#blah')
				.attr('src', e.target.result);
		};

		reader.readAsDataURL(input.files[0]);
	}
}


var passiveSupported = false;
try {
	var options = Object.defineProperty({}, "passive", {
		get: function () {
			passiveSupported = true;
		}
	});
	window.addEventListener("test", null, options);
} catch (err) {}

function fn() {
	console.log("fn")
}