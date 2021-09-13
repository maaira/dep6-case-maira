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

function sendPageVisualization( ) {
    ga('send', {
        hitType: 'pageview',
        page: document.title
      });
      console.log("Send page vizualization."+ document.title);
}
