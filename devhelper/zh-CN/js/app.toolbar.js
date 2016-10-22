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

        $('#toolbar').kendoToolBar({
            items:[
                { type: "button", id:'toolBtn-apply', spriteCssClass: "k-tool-icon k-font-icon k-i-plus", text: "申请加入", enable: true, click: function(){_MC.send('app.showApplyWindow');}},
                { type: "button", id:'toolBtn-pays', spriteCssClass: "k-tool-icon k-font-icon  k-i-dollar", text: "支付记录", enable: true, click: function(){_MC.send('app.showPayHistoryWindow');}},
                { type: "button", id:'toolBtn-partners', spriteCssClass: "k-tool-icon k-font-icon k-i-format-number", text: "合作者名单", enable: true, click: function(){_MC.send('app.showPartnersWindow');}},
                //{ type: "button", id:'toolBtn-resources', spriteCssClass: "k-tool-icon k-font-icon  k-i-sort-asc", text: "项目记录", enable: true, click: function(){_MC.send('app.showResourcesWindow');}},
                { type: "button", id:'toolBtn-shares', spriteCssClass: "k-tool-icon k-font-icon   k-i-insert-file", text: "共享文件", enable: true, click: function(){_MC.send('app.showSharesWindow');}},
                { type: "separator", spriteCssClass: "flex-width" },
                {template: tplStr }
            ]
        });
    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.initToolbar", function(e){_U.initToolbar()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());