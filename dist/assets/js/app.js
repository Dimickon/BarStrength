$(document).ready(function() {
    const swiper = new Swiper('.room__slider', {
        direction: 'horizontal',
        loop: true,
    });

    $(document).on("textarea", function(){
       $(this).outerHeight(38).outerHeight(this.scrollHeight);
    });
});