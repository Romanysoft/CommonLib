(function() {
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    $(document).ready(function() {
        try {
            // all traceid  
            ga('create', 'UA-54045904-3', 'auto');
            
            var sys_lang = "default";
            try{
                sys_lang = navigator.language || "zh-CN[default]";
            }catch(e){
                console.error(e);
            }
            
            //-------------------------------------------------

            try {
                //eg. https://shopper.mycommerce.com/checkout/cart/new/55399-17
                // find product
                var productList = $('.dr_cart_product strong');
                $.each(productList, function(index, ele) {
                    var productName = $(ele).html();
                    ga('send', {
                        hitType: 'event',
                        eventCategory: productName,
                        eventAction: 'gotoPurchase',
                        eventLabel: sys_lang + "__" + (new Date()).toUTCString()
                    });
                });

            } catch (e) {
                console.error(e);
            }

            ga('send', {
                hitType: 'pageview',
                page: location.pathname
            });

        } catch (err) {
            console.error(err);
        }
    });


})();