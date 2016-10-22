(function () {
    window['UI'] = window['UI'] ||  {};
    window.UI.c$ = window.UI.c$ ||  {};
})();

(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ =  {};
    c$ = $.extend(window.UI.c$,  {});
    var b$ = BS.b$;
    var _MC = c$.MessageCenter;

    var _U =  {};

    _U.initTitleAndVersion = function(){
        document.title = "Romanysoft 市场推广合作管理 Ver 1.0" ;
    };

    _U.launch = function () {
        var t$ = this;
        t$.initTitleAndVersion();

        _MC.send("app.initToolbar");
        _MC.send("app.intro.init");
    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.init", function(e) {_U.launch()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());