$(function () {

    let discografia = $('#discografia').offset().top,
    pelicula = $('#pelicula').offset().top,
    historia = $('#historia').offset().top,
    liveAid = $('#liveAid').offset().top,
    contacto = $('#contacto').offset().top;

        //Esto lo hace responsive
    window.addEventListener('resize', function(){
        let discografia = $('#discografia').offset().top,
            pelicula = $('#pelicula').offset().top,
            liveAid = $('#liveAid').offset().top,
            contacto = $('#contacto').offset().top;
    });

    $('#enlace__home').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace__discografia').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: discografia -100
        },600);
    });

    $('#enlace__pelicula').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: pelicula -100
        },600);
    });

    $('#enlace__historia').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: historia -100
        },600);
    });

    $('#enlace__liveAid').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: liveAid -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
});
