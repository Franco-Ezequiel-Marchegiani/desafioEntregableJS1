const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', e => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}
// Modificación fotos Historia
//Creación de variables con un valor inicial (para saber si está el modo oscuro o no)
var fotoMostrada = "logoDark";
var fotoQueen = "queenColor";
var fotoFreddie = "freddieColor";
var fotoBrian = "brianColor";
var fotoJohn = "johnColor";
var fotoRoger = "rogerColor";
var fotoQueenArg = "queenArgColor"
function funcionDarkMode(){
    //Acá define las variables con el elemento del HTML (utilizando DOM)
    var logoQueen = document.getElementById("logoQueen");
    var imagenQueen = document.getElementById("queen");
    var imagenFreddie = document.getElementById("freddieMercury");
    var imagenBrian = document.getElementById("brianMay");
    var imagenJohn = document.getElementById("johnDeacon");
    var imagenRoger = document.getElementById("rogerTaylor");
    var imagenQueenArg = document.getElementById("queenArgentina");
    //Condicional foto Logo
    //Cambio a foto a color
    if(fotoMostrada == "logoDark"){
        logoQueen.src = "./Imagenes/logo_icon.png";
        fotoMostrada = "logoColor";
    } else{ //Vuelve el ícono a blanco y negro
        logoQueen.src = "./Imagenes/logo.png";
        fotoMostrada = "logoDark";
    }
    //Condicional foto Queen
    //Mantiene foto a color
    if(fotoQueen == "queenColor"){
        imagenQueen.src = "http://madafackismounderground.com/wp-content/uploads/2018/05/UMG_Web_CROP_FINAL_V3_Queen-800x445.jpg";
        fotoQueen = "queenDark"
    } else{
        imagenQueen.src = "https://static2.abc.es/media/cultura/2020/01/26/queen-kXVB--620x349@abc.jpg";
        fotoQueen = "queenColor"
    }
    //Condicional foto Freddie
    if(fotoFreddie == "freddieColor"){
        imagenFreddie.src = "https://hips.hearstapps.com/ellees.h-cdn.co/assets/16/47/3200x4044/gettyimages-56271496.jpg?resize=480:*";
        fotoFreddie = "freddieDark";
    } else{
        imagenFreddie.src = "https://wallpaperaccess.com/full/1268434.jpg";
        fotoFreddie = "freddieColor";
    }
    //Condicional foto Brian
    if(fotoBrian == "brianColor"){
        imagenBrian.src = "https://i.pinimg.com/564x/19/dd/0a/19dd0af58c72407b98e7e7a1205465a0.jpg";
        fotoBrian = "brianDark";
    } else{
        imagenBrian.src = "https://64.media.tumblr.com/0aad6a93f004fce217c294b449a06710/tumblr_puw24bsGoE1qdslbvo1_1280.jpg";
        fotoBrian = "brianColor";
    }
    //Condicional foto John
    if(fotoJohn == "johnColor"){
        imagenJohn.src = "https://images5.fanpop.com/image/photos/31200000/-John-Deacon-john-deacon-31217218-700-982.jpg";
        fotoJohn = "johnDark";
    }else{
        imagenJohn.src = "https://images5.fanpop.com/image/photos/31200000/-John-Deacon-john-deacon-31217224-700-1073.jpg";
        fotoJohn = "johnColor";
    }
    //Condicional foto Roger
    if(fotoRoger = "rogerColor"){
        imagenRoger.src = "https://i.pinimg.com/originals/43/70/13/437013594f414923c6887a069d37fb5f.png";
        fotoRoger = "rogerDark";
    }else{
        imagenRoger.src = "https://i.pinimg.com/originals/76/4f/60/764f60048992249df4209f1c02e7c58f.jpg";
        fotoRoger = "rogerColor";
    }
    //Condicional ImagenFinal
    if(fotoQueenArg = "queenArgColor"){
        imagenQueenArg.src = "./imagenes/queenArgentinaDark.png";
        fotoQueenArg = "queenArgDark";
    } else{
        imagenQueenArg.src = "https://www.infobae.com/new-resizer/UIosEQLh0FILb_0nStFV_njE7i0=/1200x900/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/NUO63B763VBTFL5BCWTBNMZPTU.jpg";
        fotoQueenArg = "queenArgColor";
    }
}


