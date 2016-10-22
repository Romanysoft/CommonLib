///
/// 系统登记的现有所有的合作者

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
        $.templateLoader.loadExtTemplate("markethelper/zh-CN/templates/tpl.app.player.htm", function(){
            cb && cb();
        })
    };

    _U.launch = function (e) {
        var t$ = this;
        _U.loadTemplate(function(){
            var win = $('#player-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "播放器",
                    width: 1024,
                    position: {
                        top: 60
                    },                    
                    resizable: true,
                    model:false
                });

                $('#player-window > .mediaplayer').kendoMediaPlayer({
                    width:640,
                    height:360,
                    autoPlay: true,
                    navigatable: true,
                    media: {
                        title: e.data.name,
                        source: e.data.url
                    }
                });
            }else{
                $('#player-window > .mediaplayer').data("kendoMediaPlayer").media({
                        title: e.data.name,
                        source: e.data.url
                })
            }

            var w = win.data('kendoWindow');
            w.open();            
        }); 

    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.showPlayerWindow", function(e) {_U.launch(e)});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());