const d = document,
      w = window;

//Los parámetros son el id donde aparecera el contenido, la MediaQuery(mq) para el responsive, el contenido para
//móvil y el contenido para escritorio.
function responsiveMedia(id,mq,mobileContent,desktopContent){
    //matchMedia() lo que hace es guardar una MediaQuery, contiene un objeto con las propiedades 'matches' y 'media',
    //'matches' es true o false segun si coincide la resolucion de la MediaQery, y 'media' guarda la MediaQuery
    //evaluada.
    let breakpoint = w.matchMedia(mq); 

    //matches lo que hace es ver que cuando la MediaQuery indicada en el matchMedia coincida devuelve true 
    //sino devuelve false.
    const responsive = e => {
        if (e.matches) { //Si coincide la MediaQuery establecida...
            d.getElementById(id).innerHTML = desktopContent;//Agregando al id el contenido para responsive de Desktop
        }else{
            d.getElementById(id).innerHTML = mobileContent;//Agregando al id el contenido para responsive de Móvil

        }

        // console.log('MQ',breakpoint,e.matches);
    }

    //addListener() lo que hace es generar el evento del Responsive es decir, que se activará cuando se cambia la
    //resolución segun la MediaQuery indicada en matcMedia()
    breakpoint.addListener(responsive); 
    responsive(breakpoint);//Ejecutando la función que contiene la MediaQuery como argumento 
}

d.addEventListener("DOMContentLoaded",() => {
//Funcion para mostrar ubicación de Google Maps usando responsible responsive design
    	responsiveMedia("gmaps","(min-width: 1024px)",
    	`<a href="https://goo.gl/maps/nqViL3YKc8B6bxuT6" target="_blank" rel="noopener">Ver Mapa</a>`,
    	`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.3115975306555!2d-			71.64623568510493!3d-33.048262484368806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!	1s0x9689e1481d042309%3A0x747467f74b63b72c!2sMelinka%20132%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!	4v1612117603345!5m2!1ses-419!2scl" width="600" height="450" frameborder="0" style="border:0;" 	allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);

});