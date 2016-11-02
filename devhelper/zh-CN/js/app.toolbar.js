(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    var b$ = BS.b$;
    var _MC = c$.MessageCenter;

    var _U = {};


    _U.initToolbar = function () {
        var t$ = this;

        var tplStr = '<div><img src="images/logo_64.png" width="36"/><span>&nbsp;' + document.title+ '</span></div>';

        var toolItmes = [];
        toolItmes.push(
            { type: "button", id:'toolBtn-apply', spriteCssClass: "k-tool-icon k-font-icon k-i-plus", text: "申请加入", enable: true, click: function(){
               //_MC.send('app.showApplyWindow');
               //<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1420836008&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2::53" alt="欢迎您咨询或申请加入我们！" title="欢迎您咨询或申请加入我们！"/></a>
              //http://shang.qq.com/v3/widget.html
              b$.App.open("http://wpa.qq.com/msgrd?v=3&uin=34314687&site=qq&menu=yes")
            }}
        );

        toolItmes.push(
            { type: "button", id:'toolBtn-pays', spriteCssClass: "k-tool-icon k-font-icon  k-i-dollar", text: "支付记录", enable: true, click: function(){_MC.send('app.showPayHistoryWindow');}}
        );
        toolItmes.push(
            { type: "button", id:'toolBtn-partners', spriteCssClass: "k-tool-icon k-font-icon k-i-format-number", text: "合作者名单", enable: true, click: function(){_MC.send('app.showPartnersWindow');}}
        );
        toolItmes.push(
            { type: "button", id:'toolBtn-resources', spriteCssClass: "k-tool-icon k-font-icon  k-i-sort-asc", text: "收益计算器", enable: true, click: function(){
                b$.App.open('Calc.html');
            }}
        );
        toolItmes.push(
            { type: "button", id:'toolBtn-resources', spriteCssClass: "k-tool-icon k-font-icon  k-i-sort-asc", text: "合作说明", enable: true, click: function(){
                b$.App.open('https://github.com/Romanysoft/working/wiki/Business-Cooperation');
            }}
        );

        ///测试
        if(window.location.host.indexOf("127.0.0.1") > -1){
            toolItmes.push(
                //{ type: "button", id:'toolBtn-shares', spriteCssClass: "k-tool-icon k-font-icon   k-i-insert-file", text: "共享文件", enable: true, click: function(){_MC.send('app.showSharesWindow');}}
                { type: "button", id:'toolBtn-shares', spriteCssClass: "k-tool-icon k-font-icon   k-i-insert-file", text: "项目", enable: true, click: function(){_MC.send('app.showResourcesWindow');}}
            );

        }

        toolItmes.push(
            { type: "button", id:'toolBtn-feedback',  text: "有疑问？", enable: true, click: function(){
                //http://shang.qq.com/v3/widget.html
                b$.App.open("http://wpa.qq.com/msgrd?v=3&uin=34314687&site=qq&menu=yes")
            }},
            { type: "separator", spriteCssClass: "flex-width" },
            {template: tplStr }
        );


        $('#toolbar').kendoToolBar({
            items:toolItmes
        });
    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.initToolbar", function(e){_U.initToolbar()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());
