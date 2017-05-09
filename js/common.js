$(document).ready(function(){
	
$(function() {
	var pull = $('.small-menu-butt');
	var menu = $('.main-nav-list');

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
        $(window).resize(function(){

    	var w = $(window).width();

    	if(w > 960 && menu.is(':hidden')) {

        menu.removeAttr('style');

    }

});

});



/*--------- form check & send ---------*/
    
(function( $ ){

	$(function() {

		$('.rf').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
			
			form.find('.rfield').addClass('empty_field');
			
			// Функция проверки полей формы
			function checkInput(){
            
            form.find('.rfield').each(function(){
              
              if($(this).hasClass('mailfield')) {
              
                var mailfield = $(this);
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if(pattern.test(mailfield.val())){
                  mailfield.removeClass('empty_field');
                } else {
                  mailfield.addClass('empty_field');
                }
              
              } else if($(this).val() != '') {
                
                $(this).removeClass('empty_field');
                
              } else {
                
                $(this).addClass('empty_field');
              }

            });
          }
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').length;
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},500);

			btn.click(function(e){
                e.preventDefault();
				if($(this).hasClass('disabled')){
					lightEmpty();
					return false
				} else {
                    $.ajax({
                        type: form.attr('method'),
                        url: form.attr('action'),
                        data: form.serialize()
                    }).done(function() {
                        $('#overlay').fadeIn(300,
		 	            function(){
				            $('.popup') 
					       .css('display', 'block')
					       .animate({opacity: 1, top: '50%'}, 200);
		                });
                    $('input[type=text]').val('');
                    $('textarea').val('');
                    }).fail(function() {
                        console.log('fail');
                    });  
				}
			});
			
		});
		
	});

})( jQuery );
    
$('.popup-button, #overlay').click( function(){
    $('.popup').animate({opacity: 0, top: '45%'}, 200,
    function(){
        $(this).css('display', 'none');
        $('#overlay').fadeOut(300);
    }
    );
});

	
});

