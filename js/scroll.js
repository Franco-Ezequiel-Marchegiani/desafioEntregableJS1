/*  $(function(){
    $('#enlace-discografia').click(function(){
        $("document").animate({strollTop:1000},'1000');
    });
})  */

 $("#enlace-discografia").click(function(e){
    e.preventDefault();

    $("body").animate({
        scrollTop: $("#discografia").offset().top
    }, 1000);
})

 $('#enlace-pelicula').click(function(e){
    e.preventDefault();

    $('document').animate({
        scrollTop: $('#pelicula').offset().top
    }, 1000);
})  

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
}); 
