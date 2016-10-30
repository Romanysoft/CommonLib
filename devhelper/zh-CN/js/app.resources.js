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
        $.templateLoader.loadExtTemplate("templates/tpl.app.resources.htm", function(){
            cb && cb();
        })
    };

    /// 更新支付记录数据
    _U.reloadData = function(dateObj){
        var t$ = this;
        var url = "data/partner_ass.js" + "?t=" + (new Date()).getTime();
        $.getScript(url).done(function(data, textStatus, jqxhr){
            var partnersData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                partnersData = obj.data;
            }else if(!data){
	            partnersData = 	window["rty_partners_dataobj"].data;
	        }

            // 获取当前时间格式
            var date = dateObj || new Date();
            var curYearMonth = kendo.toString(date, "yyyyMM");
            t$.updateWith(curYearMonth, partnersData);
        });
    };

    _U.launch = function () {
        var t$ = this;
        _U.loadTemplate(function(){
            var win = $('#resources-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "项目产品关联记录",
                    width: 1440,
                    position: {
                        top: 70
                    },                    
                    resizable: true,
                    model:false
                });

                var url = "data/products_ass.js";
                $.getScript(url).done(function(data, textStatus, jqxhr){
                    var dataList = [];
                    if($.RTYUtils.isString(data)){
                        var obj = eval(data);  
                        dataList = obj.data;
                    }else if(!data){
                    	dataList = window["rty_resources_dataobj"].data;
                    }
                    /// 初始化表格
                    $('#resources-window > .resources-grid').kendoGrid({
                            dataSource: {
                                data: dataList,
                                schema: {
                                    model: {
                                        fields: {
                                            partnerID: { type: "string" },
                                            partnerName: { type: "string" },
                                            productName: { type: "string" },
                                            srcdir: { type: "string" },
                                            appstoreurl: { type: "string" },
                                            demoName: { type: "string" },
                                            demoUrl: { type: "string" }
                                        }
                                    }
                                },
                                sort:[
                                    {field: "partnerID", dir: "desc" }
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
                                { field: "productName", title: "应用名称", width: "80px" },
                                { field: "srcdir", title: "源码路径", width: "100px" },
                                { field: "appstoreurl", title: "商店链接", width: "160px" },
                                { field: "demoName", title: "Demo名称", width: "100px" },
                                { field: "demoUrl", title: "参照", width: "100px" },
                                { field: "partnerID", title: "合作者ID",  width: "50px" },
                                { field: "partnerName", title: "合作者名称",  width: "50px" }
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