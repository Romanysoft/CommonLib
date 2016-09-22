///
/// 系统配置情况

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

    }; 

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.showResourcesWindow", function(e) {_U.launch()}); 

    window.UI.c$ = $.extend(window.UI.c$, c$); 
}()); 