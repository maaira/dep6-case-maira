// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function addAnalitics( ) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');
}
function sendPageVisualization(){
    ga('send', {
        'hitType': 'pageview',
        'page': location.pathname,
        'title': document.title,        
        'hitCallback' : function () {
            console.log("Event received");
    }});
}

function sendPageVisualizationOnLoad( ) {
    addAnalitics( );
    //console.log("Send page vizualization:"+ location.pathname);
    //console.log("Send page vizualization:"+ document.title);
    if(window.addEventListener) {
        window.addEventListener('load',sendPageVisualization,false); //W3C
    } else {
        window.attachEvent('onload',sendPageVisualization); //IE
    }
}

function sendEvent(cat,act,label){
    ga('send', {
        hitType: 'event',
        eventCategory: cat ,
        eventAction: act,
        eventLabel: label,
        'hitCallback' : function () {
            console.log("Event received");
    }});
}