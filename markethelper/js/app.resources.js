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
        $.templateLoader.loadExtTemplate("markethelper/templates/tpl.app.resources.htm", function(){
            cb && cb();
        })
    };

    _U.launch = function () {
        var t$ = this;
        _U.loadTemplate(function(){
            var win = $('#resources-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "E+C模式资源分配记录",
                    width: 1024,
                    position: {
                        top: 70
                    },                    
                    resizable: true,
                    model:false
                });

                var url = "data/google_blogger_analytics_ass.js" + "?t=" + (new Date()).getTime();
                $.getScript(url).done(function(data, textStatus, jqxhr){
                    var dataList = [];
                    if($.RTYUtils.isString(data)){
                        var obj = eval(data);  
                        dataList = obj.data;

                        //格式化数据模型

                    }
                    /// 初始化表格
                    $('#resources-window > .resources-grid').kendoGrid({
                            dataSource: {
                                data: dataList,
                                schema: {
                                    model: {
                                        fields: {
                                            partnerID: { type: "string" },
                                            id: { type: "string" },
                                            url: { type: "string" }
                                        }
                                    }
                                },
                                sort:[
                                    //{field: "partnerID", dir: "asc" },
                                    {field: "id", dir: "desc" }
                                ], 
                                pageSize: 50
                            },
                            height: 550,
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
                                { field: "id", title: "编号", width: "20px" },
                                { field: "url", title: "博客站点网址", width: "100px" },
                                { field: "partnerID", title: "关联工号",  width: "20px" }
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
    _MC.register("app.showResourcesWindow", function(e) {_U.launch()}); 

    window.UI.c$ = $.extend(window.UI.c$, c$); 
}()); 