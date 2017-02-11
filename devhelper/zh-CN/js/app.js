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
        document.title = "Romanysoft 合作开发(中国区) Ver 1.2.1   _____2017.02_____" ;
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
