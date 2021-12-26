$(document).ready(function(){

    $("#noticiasIngTeleco").click(function (e) {
         
        $.getJSON("https://warm-dusk-67087.herokuapp.com/teleconotices.json", function (datosJSON){
                $.each(datosJSON, function(){
                    $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                    + "<p>" + this["body"] + "</p>" + "<br>" 
                    + "<p>" + this["information"] + "</p>" 
                    + "</section>");
                });
               
            });  
        
            $("#textoNoticias").show();
        });


        $("#noticiasIngInformatica").click(function (e) {
         
            $.getJSON("https://warm-dusk-67087.herokuapp.com/informaticanotices.json", function (datosJSON){
                    $.each(datosJSON, function(){
                        $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                        + "<p>" + this["body"] + "</p>" + "<br>" 
                        + "<p>" + this["information"] + "</p>" 
                        + "</section>");
                    });
                   
                });  
            
                $("#textoNoticias").show();
            });

            $("#noticiasIngQuimica").click(function (e) {
         
                $.getJSON("https://warm-dusk-67087.herokuapp.com/quimicanotices.json", function (datosJSON){
                        $.each(datosJSON, function(){
                            $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                            + "<p>" + this["body"] + "</p>" + "<br>" 
                            + "<p>" + this["information"] + "</p>" 
                            + "</section>");
                        });
                       
                    });  
                
                    $("#textoNoticias").show();
                });

                $("#noticiasLetTrabajoSocial").click(function (e) {
         
                    $.getJSON("https://warm-dusk-67087.herokuapp.com/socialnotices.json", function (datosJSON){
                            $.each(datosJSON, function(){
                                $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                                + "<p>" + this["body"] + "</p>" + "<br>" 
                                + "<p>" + this["information"] + "</p>" 
                                + "</section>");
                            });
                           
                        });  
                    
                        $("#textoNoticias").show();
                    });

                    $("#noticiasLetTurismo").click(function (e) {
         
                        $.getJSON("https://warm-dusk-67087.herokuapp.com/turismonotices.json", function (datosJSON){
                                $.each(datosJSON, function(){
                                    $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                                    + "<p>" + this["body"] + "</p>" + "<br>" 
                                    + "<p>" + this["information"] + "</p>" 
                                    + "</section>");
                                });
                               
                            });  
                        
                            $("#textoNoticias").show();
                        });

                        $("#noticiasLetEconomia").click(function (e) {
         
                            $.getJSON("https://warm-dusk-67087.herokuapp.com/economianotices.json", function (datosJSON){
                                    $.each(datosJSON, function(){
                                        $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                                        + "<p>" + this["body"] + "</p>" + "<br>" 
                                        + "<p>" + this["information"] + "</p>" 
                                        + "</section>");
                                    });
                                   
                                });  
                            
                                $("#textoNoticias").show();
                            });

                            $("#noticiasSalEnfermeria").click(function (e) {
         
                                $.getJSON("https://warm-dusk-67087.herokuapp.com/enfermerianotices.json", function (datosJSON){
                                        $.each(datosJSON, function(){
                                            $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                                            + "<p>" + this["body"] + "</p>" + "<br>" 
                                            + "<p>" + this["information"] + "</p>" 
                                            + "</section>");
                                        });
                                       
                                    });  
                                
                                    $("#textoNoticias").show();
                                });

                                $("#noticiasSalMedicina").click(function (e) {
         
                                    $.getJSON("https://warm-dusk-67087.herokuapp.com/medicinanotices.json", function (datosJSON){
                                            $.each(datosJSON, function(){
                                                $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                                                + "<p>" + this["body"] + "</p>" + "<br>" 
                                                + "<p>" + this["information"] + "</p>" 
                                                + "</section>");
                                            });
                                           
                                        });  
                                    
                                        $("#textoNoticias").show();
                                    });

                                    $("#noticiasSalVeterinaria").click(function (e) {
         
                                        $.getJSON("https://warm-dusk-67087.herokuapp.com/veterinarianotices.json", function (datosJSON){
                                                $.each(datosJSON, function(){
                                                    $("#cajainfojson").append("<section>" + "<h4>" + this["title"] + "</h4>"
                                                    + "<p>" + this["body"] + "</p>" + "<br>" 
                                                    + "<p>" + this["information"] + "</p>" 
                                                    + "</section>");
                                                });
                                               
                                            });  
                                        
                                            $("#textoNoticias").show();
                                        });
    });