$(document).ready(function(){

    $("#noticiasIngTeleco").click(function (e) {
         
        $.getJSON("../json/noticias_universidades_ingenierias.json", function (datosJSON){
                $.each(datosJSON.datos.noticias_ingenierias[0].telecomunicaciones, function(){
                    $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                    + "<p>" + this["texto"] + "</p>" + "<br>" 
                    + "<p>" + this["informacion"] + "</p>" 
                    + "</section>");
                });
            });  
        $("#textoNoticias").show();
            
        });

        $("#noticiasIngInformatica").click(function (e) {
         
            $.getJSON("../json/noticias_universidades_ingenierias.json", function (datosJSON){
                    $.each(datosJSON.datos.noticias_ingenierias[1].informatica, function(){
                        $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                        + "<p>" + this["texto"] + "</p>" + "<br>" 
                        + "<p>" + this["informacion"] + "</p>" 
                        + "</section>");
                    });
                });  
            $("#textoNoticias").show();
                
            });

        
            $("#noticiasIngQuimica").click(function (e) {
         
                $.getJSON("../json/noticias_universidades_ingenierias.json", function (datosJSON){
                        $.each(datosJSON.datos.noticias_ingenierias[2].quimica_industrial, function(){
                            $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                            + "<p>" + this["texto"] + "</p>" + "<br>" 
                            + "<p>" + this["informacion"] + "</p>" 
                            + "</section>");
                        });
                    });  
                $("#textoNoticias").show();
                    
                });


                $("#noticiasLetTrabajoSocial").click(function (e) {
         
                    $.getJSON("../json/noticias_universidades_letras.json", function (datosJSON){
                            $.each(datosJSON.datos.noticias_letras[0].trabajo_social, function(){
                                $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                                + "<p>" + this["texto"] + "</p>" + "<br>" 
                                + "<p>" + this["informacion"] + "</p>" 
                                + "</section>");
                            });
                        });  
                    $("#textoNoticias").show();
                        
                    });

                    $("#noticiasLetTurismo").click(function (e) {
         
                        $.getJSON("../json/noticias_universidades_letras.json", function (datosJSON){
                                $.each(datosJSON.datos.noticias_letras[1].turismo, function(){
                                    $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                                    + "<p>" + this["texto"] + "</p>" + "<br>" 
                                    + "<p>" + this["informacion"] + "</p>" 
                                    + "</section>");
                                });
                            });  
                        $("#textoNoticias").show();
                            
                        });

                        $("#noticiasLetEconomia").click(function (e) {
         
                            $.getJSON("../json/noticias_universidades_letras.json", function (datosJSON){
                                    $.each(datosJSON.datos.noticias_letras[2].economia, function(){
                                        $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                                        + "<p>" + this["texto"] + "</p>" + "<br>" 
                                        + "<p>" + this["informacion"] + "</p>" 
                                        + "</section>");
                                    });
                                });  
                            $("#textoNoticias").show();
                                
                            });

                            $("#noticiasSalEnfermeria").click(function (e) {
         
                                $.getJSON("../json/noticias_universidades_salud.json", function (datosJSON){
                                        $.each(datosJSON.datos.noticias_salud[0].enfermeria, function(){
                                            $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                                            + "<p>" + this["texto"] + "</p>" + "<br>" 
                                            + "<p>" + this["informacion"] + "</p>" 
                                            + "</section>");
                                        });
                                    });  
                                $("#textoNoticias").show();
                                    
                                });

                                $("#noticiasSalMedicina").click(function (e) {
         
                                    $.getJSON("../json/noticias_universidades_salud.json", function (datosJSON){
                                            $.each(datosJSON.datos.noticias_salud[1].medicina, function(){
                                                $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                                                + "<p>" + this["texto"] + "</p>" + "<br>" 
                                                + "<p>" + this["informacion"] + "</p>" 
                                                + "</section>");
                                            });
                                        });  
                                    $("#textoNoticias").show();
                                        
                                    });

                                    $("#noticiasSalVeterinaria").click(function (e) {
         
                                        $.getJSON("../json/noticias_universidades_salud.json", function (datosJSON){
                                                $.each(datosJSON.datos.noticias_salud[2].veterinaria, function(){
                                                    $("#cajainfojson").append("<section>" + "<h4>" + this["titulo"] + "</h4>"
                                                    + "<p>" + this["texto"] + "</p>" + "<br>" 
                                                    + "<p>" + this["informacion"] + "</p>" 
                                                    + "</section>");
                                                });
                                            });  
                                        $("#textoNoticias").show();
                                            
                                        });





        ultmod("../json/noticias_universidades_ingenierias.json");
    });


