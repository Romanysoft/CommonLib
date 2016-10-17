(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;

    var _U =  {};

    _U.launch = function () {
        var t$ = this;
        var urls = [
            "https://kendo.cdn.telerik.com/2016.3.914/js/kendo.all.min.js",
            "https://kendo.cdn.telerik.com/2016.3.914/js/messages/kendo.messages.zh-CN.min.js",
            "https://kendo.cdn.telerik.com/2016.3.914/js/cultures/kendo.culture.zh-CN.min.js",

            //<!--App 核心-->
            "common/romanysoft/core/app.observer.js",
            "common/romanysoft/core/app.config.js",
            "common/romanysoft/core/app.util.js",

            //<!--App 插件-->

            //<!--App UI组件-->
            "markethelper/js/app.feedback.js",
            "markethelper/js/app.apply.js",
            "markethelper/js/app.partners.js",
            "markethelper/js/app.resources.js",
            "markethelper/js/app.shares.js",
            "markethelper/js/app.intro.js",
            "markethelper/js/app.pays.js",
            "markethelper/js/app.toolbar.js",
            "markethelper/js/app.player.js",
            "markethelper/js/app.setups.js",
            "markethelper/js/app.js",

            // <!--App 启动-->
            "markethelper/js/main.js",
        ];
        $.RTYUtils.queue()
            .next(function(nxt){
                var _f = function(urls){
                    if (urls.length > 0){
                        $.RTYUtils.loadScript(urls.shift(), function(){ 
                            _f && _f(urls);
                        }) 
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