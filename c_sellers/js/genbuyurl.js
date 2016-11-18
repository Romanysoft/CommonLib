(function() {
    var c$ = {};

    var _productsMap = $.RTY_productsMap;
    var _videos = $.RTY_videos;
    var _shareTools = $.RTY_tools;
    var _curLinkID = "";

    c$.updateHomePage = function() {


        var productList = [];
        $.each(Object.keys(_productsMap), function(i, item) {
            var productObj = _productsMap[item];
            productObj.id = item;
            productList.push(productObj);
        });


        var htmlContent = "";
        /// 更新产品明细部分
        htmlContent = template('tmpl-nav-product-info',{productList: productList});
        $('#nav-product-info').html(htmlContent);

        /// 更新代理购买链接生成部分
        htmlContent = template('tmpl-nav-product-af',{productList: productList});
        $('#nav-product-af').html(htmlContent);

        /// 更新视频教程
        htmlContent = template('tmpl-nav-tutorial-videos',{videos: _videos});
        $('#nav-tutorial-videos').html(htmlContent);

        /// 更新工具分享
        htmlContent = template('tmpl-nav-share-tools',{tools: _shareTools});
        $('#nav-share-tools').html(htmlContent);

        ////////////////////////////////////////////////////////////////////////////


        function checkLinkIDisExist(){
           _curLinkID = $('#input-linkID').val();
           if($.trim(_curLinkID) === ""){
              alert("请输入自己的跟踪号，并确保正确");
              $('#input-linkID').focusin();
              return false;
           }

           localStorage.setItem("lastLinkID", _curLinkID);
           return true;
        }

        function common_gen_buyurl(obj){
              var comSellersUrl_base = "https://romanysoft.github.io/CommonLib/sellers.html?pid=",
                  mycommerceUrl_base = "https://shopper.mycommerce.com/checkout/cart/add/";

              function _preProductMsg(productObj){
                  var _message = "";
                  var _msgList = [
                     "产品标识：" + productObj.id,
                     "产品名称：" + productObj.name,
                     "定价($)："  + productObj.prices,
                     //"产品购买跟踪链接[主要]：" + comSellersUrl_base + productObj.id + "&quantity=1&linkid=" + _curLinkID,
                     "订单处理跟踪链接：" + mycommerceUrl_base + productObj.id + "?quantity=1&linkid=" + _curLinkID
                 ];

                 $.each(_msgList, function(i, msg){
                    _message = _message + ( '[' + ++i + "]." + msg + "\n");
                 });

                 return _message;
              }

              var contentMessage = "";
              if($.isArray(obj)){
                 $.each(obj, function(index, product){
                    contentMessage = contentMessage + "\n" + _preProductMsg(product);
                 });
              }else{
                 contentMessage = contentMessage + "\n" + _preProductMsg(obj);
              }


              $('#output-buyurls').text($('#output-buyurls').text() + contentMessage);

        }

        var lastLinkID = localStorage.getItem("lastLinkID") || "ian";
        $('#input-linkID').val(lastLinkID);

        $('#btn-saveLinkID').on('click', function(){
           _curLinkID = $('#input-linkID').val();
        });

        $('#btn-gen-onebuyurl').on('click', function(){
           if(checkLinkIDisExist()){
              var productId = $('#product-selector').find("option:selected").data('productid');
              $.each(productList, function(index, product){
                 if(product.id === productId){
                    common_gen_buyurl(product);
                 }
              })
           }

        });

        $('#btn-gen-allbuyurls').on('click', function(){
           if(checkLinkIDisExist()){
              common_gen_buyurl(productList);
           }
        });

        $('#btn-clear').on('click', function(){
           $('#output-buyurls').text("");
           alert("清空完毕") ;
        });
    }


    c$.updateHomePage();
})();
