$(document).ready( function(){
    $("#btn1").click (function(){
        /*respuesta();
        validaHorario();
        CrearTablas();*/
        var mult = $("#txingreso").val();
        TablaMultiplicar(mult);
    });
});

function respuesta(){
    var midiv = $("#dvResultado");
    var tiempo = new Date();
    midiv.html("<H1>Mi respuesta</H1>" + tiempo);   
}

function validaHorario(){

    var tiempo = new Date();
    var hora = tiempo.getHours();
    var dvResult = $("#dvSaludo");
    var saludo ="Buenos dias";
    if(hora > 12 && hora < 18)
    {
        saludo="Buenas tardes";
    }
    else if(hora >=18 && hora <= 24){
        saludo="Buenas noches";
    }
    dvResult.html(saludo);
}

function CrearTablas()
{
    var midiv = $("#dvTablas");
    var tablita = "<table border='1'>";
    for(var i= 1; i<= 100; i++)
    {
        tablita = tablita + "<tr><td> " + i.toString() + "</td>";
    }  
    tablita = tablita + "</table>";
    midiv.html(tablita);
}

function TablaMultiplicar(multiplicador)
{
    var estiloRojo = "class='rojo'";
    var estiloCeleste = "class='celeste'";
    var midiv = $("#dvTablas");
    var tablita = $("<table border='1'></table>");
    var clase = "rojo";

    for(var col=1; col<=10; col++){
        var filas = $("<tr></tr>");
        for(var fila=1; fila<=multiplicador; fila++){
            var mul = col * fila;
            var tx = col + " * " + fila + " = " + mul;
            clase = "rojo";
            if(fila % 2 == 0)
                clase = "celeste";
            var celda = $("<td></td>").addClass(clase).text(tx);
            filas.append(celda);            
        }
        tablita.append(filas);
    }
    
    midiv.append(tablita);
}
