(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;

    var _U =  {};

    _U.launch = function () {
        var t$ = this;

        var cssUrls = [
            "common/kendoui/v2016.3.914/styles/kendo.common.min.css",
            "common/kendoui/v2016.3.914/styles/kendo.rtl.min.css",
            "common/kendoui/v2016.3.914/styles/kendo.rtl.min.css",


            "markethelper/styles/app.css"
        ];

        //var kendouiUrl = "common/kendoui/v2016.3.914";
        var kendouiUrl = "http://kendo.cdn.telerik.com/2016.3.914";

        var urls = [
            kendouiUrl + "/js/kendo.all.min.js",
            kendouiUrl + "/js/messages/kendo.messages.zh-CN.min.js",
            kendouiUrl + "/js/cultures/kendo.culture.zh-CN.min.js",

            //<!--App 核心-->
            "common/romanysoft/core/app.observer.js",
            "common/romanysoft/core/app.config.js",
            "common/romanysoft/core/app.util.js",

            //<!--App 插件-->

            //<!--App UI组件-->
            "markethelper/zh-CN/js/app.feedback.js",
            "markethelper/zh-CN/js/app.apply.js",
            "markethelper/zh-CN/js/app.partners.js",
            "markethelper/zh-CN/js/app.resources.js",
            "markethelper/zh-CN/js/app.shares.js",
            "markethelper/zh-CN/js/app.intro.js",
            "markethelper/zh-CN/js/app.pays.js",
            "markethelper/zh-CN/js/app.toolbar.js",
            "markethelper/zh-CN/js/app.player.js",
            "markethelper/zh-CN/js/app.setups.js",
            "markethelper/zh-CN/js/app.js",

            // <!--App 启动-->
            "markethelper/zh-CN/js/main.js",
        ];
        $.RTYUtils.queue()
            .next(function(nxt){
                var _f = function(urls){
                    if (urls.length > 0){
                        $.RTY_3rd_Ensure.ensure({css: urls.shift()}, function () {  _f && _f(urls);})
                    }else{
                        nxt && nxt();
                    }
                };

                _f(cssUrls);   
            })        
            .next(function(nxt){
                var _f = function(urls){
                    if (urls.length > 0){
                        $.RTY_3rd_Ensure.ensure({js: urls.shift()}, function () {  _f && _f(urls);})
                    }else{
                        nxt && nxt();
                    }
                };

                _f(urls);   
            })
            .done(function(nxt){
                console.log('----------- load complate ----------------');
            })                                                

    };

    //-----------------------------------------------------------------------------------------------------------------
    $(document).ready(function () {
        _U.launch();
    });

}());