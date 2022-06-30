$(document).ready(function() {
    const swiper = new Swiper('.room__slider', {
        direction: 'horizontal',
        loop: true,
    });

    $(document).on("textarea", function(){
       $(this).outerHeight(38).outerHeight(this.scrollHeight);
    });

    $(".agreement__checkbox").on("click", function () {
        if ($(this).is(":checked")) {
            window.location.href = 'index.html';
        } else {
        }
    });

    /* Modal
    =====================================*/

    $('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        }, 100);
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');
        modalClose(modal);
    });


    $('.modal').on('click', function() {
        let modal = $(this);
        modalClose(modal);
    });


    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    });


    function modalClose(modal) {
        modal.find('.modal__content').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }

});