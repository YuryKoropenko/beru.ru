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
	/*фильтр сортировка*/
	$('.p-filter__more-brend').on('click', function() {
		$('.p-filter__listvisible').toggle();
		$('.p-filter__listhidden').toggle();
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

});