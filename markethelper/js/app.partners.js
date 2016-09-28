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
        $.templateLoader.loadExtTemplate("markethelper/templates/tpl.app.partner.htm", function(){
            cb && cb();
        })
    };

    _U.launch = function () {
        var t$ = this;
        _U.loadTemplate(function(){
            var win = $('#partner-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "合作者名单",
                    width: 1024,
                    position: {
                        top: 60
                    },                    
                    resizable: true,
                    model:false
                });

                $.getScript("data/marking_partner_ass.js").done(function(data, textStatus, jqxhr){
                    var partnersData = [];
                    if($.RTYUtils.isString(data)){
                        var obj = eval(data);  
                        partnersData = obj.data;
                    }
                    /// 初始化表格
                    $('#partner-window > .partner-grid').kendoGrid({
                            dataSource: {
                                data: partnersData,
                                schema: {
                                    model: {
                                        fields: {
                                            id: { type: "string" },
                                            name: { type: "string" },
                                            QQ: { type: "string" },
                                            email: { type: "string" },
                                            payment: { type: "string" },
                                            KeepSecret: { type: "string" },
                                            referrer: { type: "string" }
                                        }
                                    }
                                },
                                sort:[
                                    {field: "payment", dir: "asc" },
                                    {field: "id", dir: "desc" }
                                ], 
                                pageSize: 20
                            },
                            height: 550,
                            allowCopy: true,
                            scrollable: true,
                            groupable:{
                                enabled: true,
                                showFooter: true,
                                messages: {
                                    empty: "拖拽你想分组的列到这里..."
                                }
                            },
                            sortable: true,
                            filterable: true,
                            pageable: {
                                input: true,
                                numeric: false
                            },
                            columns: [
                                { field: "id", title: "编号",  width: "30px" },
                                { field: "name", title: "姓名", width: "40px" },
                                { field: "QQ", title: "QQ", width: "50px" },
                                { field: "email", title: "Email", width: "70px" },
                                { field: "payment", title: "结算方式", width: "40px" },
                                { field: "KeepSecret", title: "薪资保密", width: "40px" },
                                { field: "referrer", title: "推荐人", width: "40px" }
                            ]
                    })
                });


            }

            var w = win.data('kendoWindow');
            w.open();            
        }); 

    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.showPartnersWindow", function(e) {_U.launch()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());