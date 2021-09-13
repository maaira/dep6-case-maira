(function (jQuery) {   
    
    
    jQuery('.cards-montadoras').on('click tap', '.card-montadoras', function () {
        var data = jQuery(this).data();
        sendEvent('analise', 'ver_mais', data.name);
        
        
    });

    jQuery('#list li').click(function () {
        var data = jQuery(this).data();       

        if (this.id === '2'){
            sendEvent('menu', 'download_pdf', "download_pdf");
        }
        else if(this.id === '1')
        {
            sendEvent('menu', 'entre_em_contato', "link_externo");  
        }
        
    });

    jQuery('#name').click(function () {
        sendEvent('“contato', this.id, 'preencheu');
        
    });

    jQuery('#telefone').click(function () {
        sendEvent('“contato', this.id, 'preencheu');        
    }); 

    jQuery('#email').click(function () {
        sendEvent('“contato', this.id, 'preencheu');
        
    }); 

    jQuery('#enviar_contato').click(function () {
        sendEvent('contato', 'enviado', 'enviado');
        
    }); 
    
})(jQuery);




