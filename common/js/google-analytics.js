(function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    $(document).ready(function() {
        try {
              // all traceid  
              ga('create', 'UA-54045904-3', 'auto');

              
              //-------------------------------------------------
              //see some trace id
              var _href = window.location.href,
                  _mac = " for Mac", _win = "  for Windows", _linux = " for Linux",
                  _linkIdList = [    // 
                      "RF201603221800PTJ",
                      "RF201604071748PTJ"
                  ]
              try{
                  _lowerHref = _href.toLowerCase();
                  
                  //eg. https://shopper.mycommerce.com/checkout/cart/new/55399-17
                  // find product
                   var productList = $('.dr_cart_product strong');
                   $.each(productList, function(index, ele){
                       var productName = $(ele).html();
                       ga('ec'+productName, {'date': (new Date()).toGMTString()});
                   });

                  // find linkId,
                  var fnc_findLinkID = function(_lowerHref){
                      var found = false, linkId = "";
                      $.each(_linkIdList, function(i, item){
                        var _lowerItem = 'linkid='+item.toLowerCase();
                        if(_lowerHref.indexOf(_lowerItem) > -1){
                            linkId = item;
                            found = true;
                            return false;
                        }
                        
                      });
                      
                      return linkId;
                  };

                  //////////////////////////////////////////////////////////////////////
                  ga('ec:linkID', fnc_findLinkID(_lowerHref));

              }catch(e){console.error(e);}
              
              //ga('send', 'pageview', );
              ga('send',{hitType:'pageview', page: location.pathname});
              
              
        } catch (err) {
            console.error(err);
        }
    })


})();