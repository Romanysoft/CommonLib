///
/// 合作内容介绍

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

    /// 加载模板
    _U.loadTemplate = function(cb){
        $.templateLoader.loadExtTemplate("markethelper/zh-CN/templates/tpl.app.intro.htm", function(){
            cb && cb();
        })
    };

    _U.launch = function (e) {
        var t$ = this;
        t$.loadTemplate(function(){
              
        });

    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.intro.init", function(e) {_U.launch()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());