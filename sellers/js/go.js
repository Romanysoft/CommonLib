(function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    $(document).ready(function() {
        try {
              //-------------------------------------------------  
              // spin 
              $('#loading').spin({
                  color:'#fff',
                  lines: 12
              });
                
              //-------------------------------------------------
              // trace sheller information  
              ga('create', 'UA-54045904-3', 'auto');
              //see some trace id
              var _href = window.location.href,
                  _mac = " for Mac", _win = "  for Windows", _linux = " for Linux",
                  _productsMap = {
                      "55399-1" : "SpeedTest" + _mac,
                      "55399-2" : "BarcodeUV" + _mac,
                      "55399-3" : "BarcodePro" + _mac,
                      "55399-4" : "AN PDF" + _mac,
                      "55399-5" : "Color Converter" + _mac,
                      "55399-6" : "CSSDesigner" + _mac,
                      "55399-8" : "GraphSketcher" + _mac,
                      "55399-9" : "CSVKiller" + _mac,
                      "55399-10" : "TryToMp3" + _mac,
                      "55399-11" : "TryToAVI" + _mac,
                      "55399-12" : "TryToAC3" + _mac,
                      "55399-13" : "TryToMPG" + _mac,
                      "55399-14" : "TryToWav" + _mac,
                      "55399-15" : "TryToSWF" + _mac,
                      "55399-16" : "ImageMinify" + _mac,
                      "55399-17" : "DataStorm" + _mac,
                      "55399-18" : "Batch File Translater" + _mac,
                      "55399-19" : "5BR3C" + _mac,
                      "55399-20" : "ExifImage" + _mac,
                      "55399-21" : "SRT2" + _mac,
                      "55399-22" : "TryToFLV" + _mac,
                      "55399-23" : "TryToMp4" + _mac,
                      "55399-24" : "TryToAAC" + _mac,
                      "55399-25" : "TryToAIFF" + _mac,
                      "55399-26" : "TryToALAC" + _mac,
                      "55399-27" : "TryToAMR" + _mac,
                      "55399-28" : "TryToOGG" + _mac,
                      "55399-29" : "TryToOpus" + _mac,
                      "55399-30" : "TryToWMA" + _mac,
                      "55399-31" : "Css Sprite Helper" + _win,
                      "55399-32" : "MarkdownD" + _mac,
                      "55399-33" : "SudokuMM" + _mac,
                      "55399-34" : "Try to translate" + _mac,
                      "55399-35" : "CurrencyCalc" + _mac,
                      "55399-36" : "LET" + _mac,
                      "55399-37" : "MarkdownD" + _win,
                      "55399-38" : "MarkdownD" + _linux,
                      "55399-39" : "Try to translate" + _win,
                      "55399-40" : "Try to translate" + _linux,
                      "55399-41" : "DataStorm" + _win,
                      "55399-42" : "DataStorm" + _linux,
                      "55399-43" : "XLS2csv" + _mac,
                      "55399-44" : "CSSDesigner" + _win,
                      "55399-45" : "CSSDesigner" + _linux,
                      
                  },
                  _linkIdList = [    // 
                      "RF201603221800PTJ",
                      "RF201604071748PTJ"
                  ]
              try{
                  _lowerHref = _href.toLowerCase();
                  
                  //eg. https://shopper.mycommerce.com/checkout/cart/new/55399-17
                  // find product
                  var foundProductID = "", foundProdutName = "";
                  var fnc_findProductName = function(_lowerHref){
                      $.each(Object.keys(_productsMap), function(i, item){
                        var _lowerItem = item.toLowerCase();
                        if(_lowerHref.indexOf(_lowerItem) > -1){
                            foundProductID = item;
                            foundProdutName = _productsMap[item];
                            found = true;
                            return false;
                        }
                        
                      });
                  };


                  // find linkId,
                  var foundLinkID = "";
                  var fnc_findLinkID = function(_lowerHref){
                      var found = false;
                      $.each(_linkIdList, function(i, item){
                        var _lowerItem = 'linkid='+item.toLowerCase();
                        if(_lowerHref.indexOf(_lowerItem) > -1){
                            foundLinkID = item;
                            found = true;
                            return false;
                        }
                        
                      });
                  };
                  
                  // process
                  fnc_findProductName(_lowerHref);
                  fnc_findLinkID(_lowerHref);

                  //////////////////////////////////////////////////////////////////////
                  ga('ec:linkID', foundLinkID);
                  ga('ec:productInfo',{
                     id:foundProductID,
                     name:foundProdutName,
                     linkID:foundLinkID   
                  })

              }catch(e){console.error(e);}
              
              ga('send',{hitType:'pageview', page: location.pathname});
              
              //------------------------------------------------
              //build redircet url.
              //eg. org: http://romanysoft.github.io/CommonLib/sellers?pid=55399-1&quantity=1&linkid=RF001
              //    dest: https://shopper.mycommerce.com/checkout/cart/add/55399-1?quantity=1&linkid=RF001
              var destUrl = "https://shopper.mycommerce.com/checkout/cart/add/",
                  orgUrlRplace = "http://romanysoft.github.io/CommonLib/sellers?pid=";
                  
              //go url
              var baseUrl = _lowerHref.replace(orgUrlRplace.toLowerCase(), destUrl);
              baseUrl = baseUrl.replace('&quantity=', '?quantity=');
              window.location.href = baseUrl;
        } catch (err) {
            console.error(err);
        }
    })


})();