$(document).ready(function(){

    $("#mesajeBoton1").click(function () { 
        alert("Necesita estar logeado!"); 
    });

    $("#mesajeBoton2").click(function () { 
        alert("Necesita estar logeado!"); 
    });

    $("#mesajeBoton3").click(function () { 
        alert("Necesita estar logeado!"); 
    });

    $("#mesajeBoton4").click(function () { 
        alert("Necesita estar logeado!"); 
    });

    $("#mesajeBoton5").click(function () { 
        alert("Necesita estar logeado!"); 
    });

    $("#mesajeBoton6").click(function () { 
        alert("Necesita estar logeado!"); 
    });
    
    $("#ranking").click(function() {
        window.open("https://www.u-ranking.es/analisis.php#");
    })
    $("#botonUbi").click(function() {
        window.open("https://goo.gl/maps/Du1BZEUTcV7586sD8");
    })
    $("#botonBiblio").click(function() {
        window.open("https://biblioteca.ulpgc.es/");
    })
    $("#botonDeportes").click(function() {
        window.open("https://deportes.ulpgc.es/");
    })
    $("#logoInstagram").click(function() {
        window.open("https://www.instagram.com/ulpgc_para_ti/?hl=es");
    })
    $("#logoFacebook").click(function() {
        window.open("https://www.facebook.com/ULPGC/");
    })
    $("#logoYoutube").click(function() {
        window.open("    https://www.youtube.com/channel/UCsRpLsk84fZmKA4BnLkA0Hg");
    })
    $("#logoTwitter").click(function() {
        window.open("https://twitter.com/ULPGC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
    })
    $("#maspalomas").click(function() {
        window.open("https://www.google.es/maps/place/Reserva+Natural+Especial+de+Las+Dunas+de+Maspalomas/@27.7450015,-15.5786953,17z/data=!3m1!4b1!4m5!3m4!1s0xc3f62d965433ccb:0xa04f0c64a2be6d25!8m2!3d27.7449968!4d-15.5765066?hl=es");
    })
    $("#roque").click(function() {
        window.open("https://www.google.es/maps/place/Monumento+natural+del+Roque+Nublo/@27.9683515,-15.6195881,15z/data=!3m1!4b1!4m5!3m4!1s0xc408ffc0bcc0911:0xd9606a0159b3abdc!8m2!3d27.9683333!4d-15.6108333?hl=es");
    })
    $("#tejeda").click(function() {
        window.open("https://www.google.es/maps/place/35360+Tejeda,+Las+Palmas/@27.996127,-15.6173752,17z/data=!3m1!4b1!4m5!3m4!1s0xc408fc9a699e9a3:0x67fb97bea7fd99cb!8m2!3d27.9962238!4d-15.6152286?hl=es");
    })
    $("#mogan").click(function() {
        window.open("https://www.google.es/maps/place/Mog%C3%A1n,+Las+Palmas/@27.8527504,-15.869385,11z/data=!3m1!4b1!4m5!3m4!1s0xc40812c140254db:0x40340f3be4d13a0!8m2!3d27.8783885!4d-15.7116464?hl=es");
    })
    $("#arucas").click(function() {
        window.open("https://www.google.es/maps/place/35400+Arucas,+Las+Palmas/@28.1211003,-15.5328393,15z/data=!3m1!4b1!4m5!3m4!1s0xc40930d81c094ab:0x27da06a433c198e1!8m2!3d28.1201412!4d-15.5210607?hl=es");
    })
    $("#agaete").click(function() {
        window.open("https://www.google.es/maps/place/Agaete,+Las+Palmas/@28.1004375,-15.7039277,16z/data=!3m1!4b1!4m5!3m4!1s0xc408b65894cde91:0x2a021e37bef00582!8m2!3d28.1002592!4d-15.6996738?hl=es");
    })



    

});
showTime();
function showTime(){
myDate = new Date();
hours = myDate.getHours();
minutes = myDate.getMinutes();
seconds = myDate.getSeconds();
if (hours < 10) hours = 0 + hours;

if (minutes < 10) minutes = "0" + minutes;

if (seconds < 10) seconds = "0" + seconds;

$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
setTimeout("showTime()", 1000);
}
