$(function() {
	
	/*каталог меню*/
	$('.h-catalog').on('click', function() {
		$(this).toggleClass('active');
		$('.header__catmenu').fadeToggle(200);
		$('.h-catmenu__hidden').masonry({
			itemSelector: '.h-catmenu__cat'
		});
		$(document).click(function(event) {
			if ($(event.target).closest('.header__catmenu').length) return;
				$('.header__catmenu').fadeOut(200);
				$('.h-catalog').removeClass('active');
				event.stopPropagation();
			});
		return false
	});

	/*список блоков каталога*/
	$('.h-catmenu__menuitem').hover(function() {
		var thblock = $(this).attr('name');
		$('.h-catmenu__menuitem').removeClass('active');
		$(this).addClass('active');
		$('.h-catmenu__hidden').hide();
		$('.'+thblock).show();
	});

	$('.p-filter__more-brend').text('Показать все');
	$('.p-filter__more-width').text('Показать все');
	$('.p-filter__more-memor').text('Показать все');
	/*фильтр сортировка*/
	$('.p-filter__more-brend').on('click', function() {
		$('.p-filter__listvisible-brend').toggle();
		$('.p-filter__listhidden-brend').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-filter__more-width').on('click', function() {
		$('.p-filter__listvisible-width').toggle();
		$('.p-filter__listhidden-width').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-filter__more-memor').on('click', function() {
		$('.p-filter__listvisible-memor').toggle();
		$('.p-filter__listhidden-memor').toggle();
		var textbrend = $(this).text();

		if(textbrend == 'Показать все') {
			$(this).text('Свернуть');
			return false;
		}
		if(textbrend == 'Свернуть') {
			$(this).text('Показать все');
			return false;
		}
	});

	$('.p-filter__colorlink').hover(function() {
		$(this).parent().children('.p-filter__colortext').stop(false, true).fadeIn(200);
	}, function() {
		$(this).parent().children('.p-filter__colortext').stop(false, true).fadeOut(200);
	});

	$('.p-filter__colorlink').on('click', function() {
		$(this).parent().toggleClass('active');
		return false;
	});

	$('.p-filter__infbtn').on('click', function() {
		$(this).parent('.p-filter__subtitle').toggleClass('active');
		$(this).parent('.p-filter__subtitle').children('.p-filter__popup').fadeToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.p-filter__popup').length) return;
				$('.p-filter__popup').hide();
				$('.p-filter__subtitle').removeClass('active');
				event.stopPropagation();
			});
		return false
	});

});