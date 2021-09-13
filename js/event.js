(function (jQuery) {   
    
    jQuery('.cards-montadoras').on('click tap', '.card-montadoras', function () {
        var data = jQuery(this).data();
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise' ,
            eventAction: 'ver_mais',
            eventLabel: data.name,
            'hitCallback' : function () {
                console.log("On click:"+ data.name +".Event received");
        }});
        
    });


})(jQuery);




