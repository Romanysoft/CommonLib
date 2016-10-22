(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;

    var _U =  {};

    _U.launch = function () {
        var t$ = this;

        var cssUrls = [
            "markethelper/styles/app.css"
        ];

        var urls = [
            "common/kendoui/v2016.3.914/js/kendo.all.min.js",

            //<!--App 核心-->
            "common/romanysoft/core/app.observer.js",
            "common/romanysoft/core/app.config.js",
            "common/romanysoft/core/app.util.js",

            //<!--App 插件-->

            //<!--App UI组件-->
            "markethelper/en-US/js/app.feedback.js",
            "markethelper/en-US/js/app.apply.js",
            "markethelper/en-US/js/app.partners.js",
            "markethelper/en-US/js/app.resources.js",
            "markethelper/en-US/js/app.shares.js",
            "markethelper/en-US/js/app.intro.js",
            "markethelper/en-US/js/app.pays.js",
            "markethelper/en-US/js/app.toolbar.js",
            "markethelper/en-US/js/app.player.js",
            "markethelper/en-US/js/app.setups.js",
            "markethelper/en-US/js/app.js",

            // <!--App 启动-->
            "markethelper/en-US/js/main.js",
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