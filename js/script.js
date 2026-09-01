console.log(
    "Biblioteca Digital de Ciberseguridad en la Nube I cargada correctamente."
);


/* =====================================
   ENLACES ACTIVOS
===================================== */

const enlaces =
    document.querySelectorAll("nav a");


enlaces.forEach(function(enlace) {

    enlace.addEventListener(
        "click",
        function() {

            console.log(
                "Navegando hacia: "
                + enlace.textContent
            );

        }
    );

});


/* =====================================
   EFECTO DE APARICIÓN
===================================== */

const elementos =
    document.querySelectorAll(
        ".tarjeta, .bloque-contenido"
    );


elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(20px)";


    setTimeout(function() {

        elemento.style.transition =
            "0.6s";

        elemento.style.opacity =
            "1";

        elemento.style.transform =
            "translateY(0)";

    }, 200);

});