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


    _U.launch = function () {
        var t$ = this;
        _MC.send('app.init');
    };

    //-----------------------------------------------------------------------------------------------------------------
    $(document).ready(function () {
        _U.launch();
    });

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());