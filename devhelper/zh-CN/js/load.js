(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;

    var _U =  {};

    _U.launch = function () {
        var t$ = this;


        var kendouiUrl = "https://kendo.cdn.telerik.com/2016.3.914";
        if(window.location.host.indexOf("127.0.0.1") > -1){
          kendouiUrl = "../../common/kendoui/v2016.3.914";
        }

        if(location.href.indexOf("localhost") > -1){
            kendouiUrl = "../../common/kendoui/v2016.3.914";
        }

        var cssUrls = [
            kendouiUrl + "/styles/kendo.common.min.css",
            kendouiUrl + "/styles/kendo.rtl.min.css",
            kendouiUrl + "/styles/kendo.default.min.css",


            "styles/app.css"
        ];




        var urls = [
            kendouiUrl + "/js/kendo.all.min.js",
            kendouiUrl + "/js/messages/kendo.messages.zh-CN.min.js",
            kendouiUrl + "/js/cultures/kendo.culture.zh-CN.min.js",

            //<!--App 核心-->
            "../../common/romanysoft/core/app.observer.js",
            "../../common/romanysoft/core/app.config.js",
            "../../common/romanysoft/core/app.util.js",

            //<!--App 插件-->

            //<!--App UI组件-->
            "js/app.apply.js",
            "js/app.partners.js",
            "js/app.resources.js",
            "js/app.shares.js",
            "js/app.intro.js",
            "js/app.pays.js",
            "js/app.calc.js",
            "js/app.toolbar.js",
            "js/app.js",

            // <!--App 启动-->
            "js/main.js",
        ];
        $.RTYUtils.queue()
            .next(function(nxt){
                var _f = function(urls){
                    if (urls.length > 0){
                        var _fc = function () {  _f && _f(urls);};
                        $.RTY_3rd_Ensure.ensure({css: urls.shift()}, _fc, _fc)
                    }else{
                        nxt && nxt();
                    }
                };

                _f(cssUrls);
            })
            .next(function(nxt){
                var _f = function(urls){
                    if (urls.length > 0){
                        var _fc = function () {  _f && _f(urls);};
                        $.RTY_3rd_Ensure.ensure({js: urls.shift()}, _fc, _fc)
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
