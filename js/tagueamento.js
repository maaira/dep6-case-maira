// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function addAnalitics( ) {
    window.ga = window.ga || function(){(ga.q=ga.q||[]).push(arguments)}; 
    ga.l=+new Date;
    ga('create', 'G-6EL47LX6DE', 'auto');
    ga('send', 'pageview'); 
    console.log("Iniciar GA.");
}
function sendPageVisualization(){
    ga('send', {
        'hitType': 'pageview',
        'page': location.pathname,
        'title': document.title,        
        'hitCallback' : function () {
            alert("Event received");
    }
    });
}

function sendPageVisualizationOnLoad( ) {
    addAnalitics( );
    console.log("Send page vizualization:"+ location.pathname);
    console.log("Send page vizualization:"+ document.title);
    if(window.addEventListener) {
        window.addEventListener('load',sendPageVisualization,false); //W3C
    } else {
        window.attachEvent('onload',sendPageVisualization); //IE
    }
}
