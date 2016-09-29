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


    /// 加载模板
    _U.loadTemplate = function(cb){
        $.templateLoader.loadExtTemplate("markethelper/templates/tpl.app.setup.htm", function(){
            cb && cb();
        })
    };

    _U.launch = function () {
        var t$ = this;
        _U.loadTemplate(function(){
            var win = $('#setups-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "学习及操作步骤",
                    width: 800,
                    position: {
                        top: 70
                    },                    
                    resizable: true,
                    model:false
                });

                $.getScript("data/marking_setup.js").done(function(data, textStatus, jqxhr){
                    var dataList = [];
                    if($.RTYUtils.isString(data)){
                        var obj = eval(data);  
                        dataList = obj.data;
                    }
                    /// 初始化表格
                    $('#setups-window > .setups-grid').kendoGrid({
                            dataSource: {
                                data: dataList,
                                schema: {
                                    model: {
                                        fields: {
                                            order: { type: "number" },
                                            content: { type: "string" },
                                            comment: { type: "string" }
                                        }
                                    }
                                },
                                sort:[
                                    {field: "order", dir: "asc" }
                                ], 
                                pageSize: 50
                            },
                            height: 550,
                            scrollable: true,
                            sortable: true,
                            pageable: {
                                input: true,
                                numeric: false
                            },
                            columns: [
                                { field: "order", title: "步骤序号", width: "40px" },
                                { field: "content", title: "步骤内容", width: "180px" },
                                { field: "comment", title: "备注",  width: "80px" }
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
    _MC.register("app.showSetupsWindow", function(e) {_U.launch()}); 

    window.UI.c$ = $.extend(window.UI.c$, c$); 
}()); 