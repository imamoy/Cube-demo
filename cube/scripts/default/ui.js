$(document).ready(function () {
	new WOW().init();

	/* header =========*/
	$(".menu-toggle").click(function() {
		$(this).toggleClass('active');
		$(this).next(".menu").addClass('active');
		$('header').addClass('z-index');
		$('header').addClass('logo-w');
	});
	$('.menu-close').click(function(){
		$(this).parent('.menu').removeClass('active');
		$('header').removeClass('z-index');
		$('header').removeClass('logo-w');
	});

	$('.lang-btn i').click(function(){
		$(this).next('.lang-menu').slideToggle();
	});
	$('.search-btn').click(function(){
		$(this).next('.search-bar').toggleClass('active');
	});

	$(window).scroll(function () {
		if (jQuery(window).width() > 992 && $(this).scrollTop() > 100) {
			$("header").addClass("active");
		} else {
			$("header").removeClass("active");
		}
	});

	if (jQuery(window).width() > 992){
		$(".myscrollbar").each(function(){
			$(this).mCustomScrollbar();
		})
	}





	/* ==========================================================================
			頁面
	==========================================================================*/

	$('#home').each(function(){
		$(this).prev('#header').addClass('white');
		$(this).prev('#header').addClass('fixed');

		$('.advanced-btn').click(function(){
			$('.search-box_btm').toggleClass('active');
			$('.advanced-box').toggleClass('active');
			$('.advanced-inner').slideToggle();
		});

		$(window).scroll(function () {
			if (jQuery(window).width() < 991 && $(this).scrollTop() > 100) {
				$("header").addClass("active");
			} else {
				$("header").removeClass("active");
			}
		});
	});
	

	$('#cube').each(function () {
		$('body').css('overflow','hidden');
		$('.mark-toggle').click(function () {
			$('.mark-list').toggleClass('active');
		});
		$('.cube_search_toggle').click(function () {
			$('.cube_search').slideToggle();
			$('#cube_left').toggleClass('active');
		});
		$('#cube_left .closs-btn').click(function(){
			$('#cube_left').addClass('close');
			$('.l-pageFill_main').addClass('fill');
		});
		$('#cube-house .closs-btn').click(function(){
			$('#cube-house').removeClass('active');
		});
		$('#cube_left-toggle').click(function(){
			$('#cube_left').removeClass('close');
			$('.l-pageFill_main').removeClass('fill');
		});

		$('.mark-item').click(function () {
			$(this).find('.mark-pop').toggleClass('active');
			$(this).find('.cylinder_box').toggleClass('active');
			$('#cube-house').toggleClass('active');
			$('.map_area').toggleClass('active');
		});
		$('.map').click(function () {
			$('.cylinder_box').removeClass('active');
			$('.mark-pop').removeClass('actvie');
		});

		$('.search-toggle').click(function () {
			$('.search-box').toggleClass('active');
		});

		$('.cube_house_close').click(function () {
			$('#cube-house').removeClass('active');
			$('.map_area').removeClass('active');
		});
		$('.rooms input:radio:checked').val();
	});

	$('#houseinfo').each(function(){
		$(this).prev('#header').addClass('gary');
		$(this).prev('#header').addClass('fixed');

		$('.houseinfo-tabtoggle').click(function(){
			$('.houseinfo-tabhide').slideToggle();
		});
		$('.check-btn').click(function(){
			$(this).toggleClass('active');
		});

		$('.bulid-detail-toggle').click(function(){
			$('.bulid-detail').slideToggle();
		});

		// $(window).scroll(function () {
		// 	if (jQuery(window).width() < 1025 && $(this).scrollTop() > 50) {
		// 		$(".houseinfo-head").addClass("fixed");
		// 		$(".houseinfo-nav").addClass("fixed");
		// 	} else {
		// 		$(".houseinfo-head").removeClass("fixed");
		// 		$(".houseinfo-nav").removeClass("fixed");
		// 	}
		// });

		$('.add-btn').click(function(){
			$(this).toggleClass('active');
		});

		$('#save-as').click(function(){
			$('#saveasfile-pop').addClass('active');
			$('.pop_bg').addClass('active');
		});
		$('#open').click(function(){
			$('#openfile-pop').addClass('active');
			$('.pop_bg').addClass('active');
		});
		$('.upload-btn').click(function(){
			$('#upload-pop').addClass('active');
			$('.pop_bg').addClass('active');
		});
		$('.searchImg-btn').click(function(){
			$('#searchimg-pop').addClass('active');
			$('.pop_bg').addClass('active');
		});

		$('.houseinfo2_block1_detail-toggle').click(function(){
			$(this).toggleClass('active');
			$(this).next('.houseinfo2_block1_detail').slideToggle();
		});

		$('#searchimg-pop .houseimg-item').click(function(){
			$(this).toggleClass('active');
		});

		$('#housenote .star').click(function(){
			$(this).toggleClass('active');
		});
	});


	// $('#house_padNav').each(function () {
	// 	$(window).scroll(function () {
	// 		if (jQuery(window).width() < 992 && $(this).scrollTop() > 60) {
	// 			$('#house_padNav').fadeIn();
	// 			$('#header').fadeOut();
	// 		} else {
	// 			$('#house_padNav').fadeOut();
	// 			$('#header').fadeIn();
	// 		}
	// 	});

	// 	// Cache selectors
	// 	var lastId,
	// 		topMenu = $("#house_padNav"),
	// 		topMenuHeight = topMenu.outerHeight() ,
	// 		// All list items
	// 		menuItems = topMenu.find("a"),
	// 		// Anchors corresponding to menu items
	// 		scrollItems = menuItems.map(function () {
	// 			var item = $($(this).attr("href"));
	// 			if (item.length) {
	// 				return item;
	// 			}
	// 		});

	// 	// Bind click handler to menu items
	// 	// so we can get a fancy scroll animation
	// 	menuItems.click(function (e) {
	// 		var href = $(this).attr("href"),
	// 			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
	// 		$('html, body').stop().animate({
	// 			scrollTop: offsetTop
	// 		}, 300);
	// 		e.preventDefault();
	// 	});

	// 	// Bind to scroll
	// 	$(window).scroll(function () {
	// 		// Get container scroll position
	// 		var fromTop = $(this).scrollTop() + topMenuHeight;

	// 		// Get id of current scroll item
	// 		var cur = scrollItems.map(function () {
	// 			if ($(this).offset().top < fromTop)
	// 				return this;
	// 		});
	// 		// Get the id of the current element
	// 		cur = cur[cur.length - 1];
	// 		var id = cur && cur.length ? cur[0].id : "";

	// 		if (lastId !== id) {
	// 			lastId = id;
	// 			// Set/remove active class
	// 			menuItems
	// 				.parent().removeClass("active")
	// 				.end().filter("[href='#" + id + "']").parent().addClass("active");
	// 		}
	// 	});
	// });

	$('#compare').each(function(){
		$('.filter-toggle').click(function(){
			$('.filter-btnbox').slideToggle();
		});

		var houseTop_height = $('.compare-houseItem .compare-houseTop').height();
		$('.compare-hold .compare-houseTop').css('height', houseTop_height + 5);

		$('.add-btn').click(function(){
			$('#compare_addpop').addClass('active');
			$('.pop_bg').addClass('active');
		});

		$('#compare_addpop_btn').click(function(){
			$('#compare_addpop').removeClass('active');
			$('.pop_bg').removeClass('active');
		});
		$('.pop_bg').click(function(){
			$('#compare_addpop').removeClass('active');
			$('.pop_bg').removeClass('active');
		});

		$("#header").removeClass("active");

		$(window).scroll(function () {
			if ($(this).scrollTop() > 120) {
				$("#header").addClass("hide");
				$('#compare > .compare-top').addClass("fixed");
				$('#compare > .compare-inner').addClass("active");
			} else {
				$("#header").removeClass("hide");
				$('#compare > .compare-top').removeClass("fixed");
				$('#compare > .compare-inner').removeClass("active");
			}
		});
	});

	$('.sign_up_toggle').click(function(){
		$('#sign_up').addClass('active');
		$('#sign_in').removeClass('active');
		$('#forgetpassword').removeClass('active');
		$('#welcome').removeClass('active');
		$('.pop_bg').addClass('active');
	});
	$('.sign_in_toggle').click(function(){
		$('#sign_in').addClass('active');
		$('#sign_up').removeClass('active');
		$('#forgetpassword').removeClass('active');
		$('#welcome').removeClass('active');
		$('.pop_bg').addClass('active');
	});
	$('.forgetpassword_toggle').click(function(){
		$('#forgetpassword').addClass('active');
		$('#sign_in').removeClass('active');
		$('#sign_up').removeClass('active');
		$('#welcome').removeClass('active');
		$('.pop_bg').addClass('active');
	});

	$('.pop_close').click(function(){
		$('.pop_bg').removeClass('active');
		$('.pop').removeClass('active');
	});


	$('.tag-btn').click(function(){
		$('.tag-btn-inner').slideToggle();
	});

	$('.tagrow-item').click(function(){
		$(this).toggleClass('active');
	});
	$('.tagrow-item .tag-cancel').click(function(){
		$(this).parent('.tagrow-item').remove();
	});
	
	$('.edit-favorite-btn').click(function(){
		$('#favorite-tagedit-pop').addClass('active');
		$('.pop_bg').addClass('active');
	});

	$('.save-favorite-btn').click(function(){
		$('#favorite-tagsave-pop').addClass('active');
		$('.pop_bg').addClass('active');
	});

	$('#reset').click(function(){
		$('#reset-pop').addClass('active');
		$('.pop_bg').addClass('active');
	});
	
	$('.pop_bg').click(function(){
		$('.pop').removeClass('active');
		$('.pop_bg').removeClass('active');
	});
	$('.detail-btn').click(function(){
		$(this).toggleClass('active');
		$(this).next('.detail-price').toggleClass('active');
	});
	$('.detail-btn').click(function(){
		$(this).toggleClass('active');
		$(this).next('.detail-inner').slideToggle();
	});

	$('.houseinfo-databtn').each(function(){
		$(this).click(function(){
			$('.houseinfo-dataInfo').addClass('active');
		});
	});
	
	$('.houseinfo-dataInfo .close').click(function(){
		$('.houseinfo-dataInfo').removeClass('active');
	});

	$('#showMewhere').click(function(){
		$('.showMewhere-inner').toggleClass('active');
	});
	// setTimeout(function(){
	// 	$('#welcome').addClass('active');
	// 	$('.pop_bg').addClass('active');
	// }, 5000);


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


	// $(function () {
	// 	if (jQuery(window).width() > 768 && jQuery(window).width() < 1441){

			
	// 		$('#house_salerentPhone').prependTo('#housePings');
	// 		$('#housePingsPhone').prependTo('#housePings');

	// 		var _showTab = 0;
	// 		var $defaultLi = $('ul.houseInfo_cutover li').eq(_showTab).addClass('active');
	// 		$($defaultLi.find('a').attr('href')).siblings().removeClass('show');

	// 		$('ul.houseInfo_cutover li').click(function () {
	// 			var $this = $(this),
	// 				_clickTab = $this.find('a').attr('href');
	// 			$this.addClass('active').siblings('.active').removeClass('active');
	// 			$(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');

	// 			return false;
	// 		}).find('a').focus(function () {
	// 			this.blur();
	// 		});
	// 	}
	// });

	// $(function () {
	// 	if (jQuery(window).width() < 767){
	// 		$('#housePings').remove();
	// 		var _showTab = 0;
	// 		var $defaultLi = $('ul.houseInfoPhone_cutover li').eq(_showTab).addClass('active');
	// 		$($defaultLi.find('a').attr('href')).siblings().removeClass('show');

	// 		$('ul.houseInfoPhone_cutover li').click(function () {
	// 			var $this = $(this),
	// 				_clickTab = $this.find('a').attr('href');
	// 			$this.addClass('active').siblings('.active').removeClass('active');
	// 			$(_clickTab).stop(false, true).addClass('show').siblings().removeClass('show');
	// 			return false;
	// 		}).find('a').focus(function () {
	// 			this.blur();
	// 		});
	// 	}
	// });

	/*document END*/
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
