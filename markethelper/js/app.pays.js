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
        $.templateLoader.loadExtTemplate("markethelper/templates/tpl.app.pay.htm", function(){
            cb && cb();
        })
    };


    /// 更新支付记录数据
    _U.reloadData = function(dateObj){
        var t$ = this;
        $.getScript("data/marking_partner_ass.js").done(function(data, textStatus, jqxhr){
            var partnersData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                partnersData = obj.data;
            }

            // 获取当前时间格式
            var date = dateObj || new Date();
            var curYearMonth = kendo.toString(date, "yyyyMM");
            t$.updateWith(curYearMonth, partnersData);
        });
    };

    /// 计算及统计支付情况
    _U.calculatePays = function(paysData, partnersData){

        /// 定义计算C的方式
        /// 定义计算E的方式

        

    };

    /// 更新数据
    _U.updateWith = function(yearMonth, partnersData){
        var t$ = this;
        var jsfile = "data/pays/E+C_A+B+C/base_" + yearMonth + ".js"
        $.getScript(jsfile).done(function(data, textStatus, jqxhr){
            var paysData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                paysData = obj.data;
            } 
   
            var resultData = t$.calculatePays(paysData, partnersData);
        });
    };

    _U.launch = function () {
        var t$ = this;

        // 加载模板，然后初始化控件
        _U.loadTemplate(function(){
            var win = $('#pays-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "支付记录(适用于薪资公开合作者)",
                    width: 1024,
                    position: {
                        top: 120
                    },                    
                    resizable: true,
                    model:false
                });

                kendo.culture("zh-CN");

                $("#pays-monthpicker").kendoDatePicker({
                    // defines the start view
                    start: "year",

                    // defines when the calendar should return date
                    depth: "year",

                    // display month and year in the input
                    format: "yyyy/MM"
                });


                /// 初始化表格
                $('#pays-window > .pays-grid').kendoGrid({
                        dataSource: {
                            data: [],
                            schema: {
                                model: {
                                    fields: {
                                        id: { type: "string" },
                                        name: { type: "string" },
                                        referrer: { type: "string" },
                                        visits: { type: "string" },
                                        prices: { type: "number" },
                                        total_e: { type: "string" },
                                        total_c: { type: "string" },
                                        total: { type: "string" },
                                        isPayed: {type: "boolean"}
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
                        scrollable: true,
                        groupable:{
                            enabled: true,
                            showFooter: true,
                            messages: {
                                empty: "拖拽你想分组的列到这里..."
                            }
                        },
                        reorderable: true,
                        resizable: true,
                        filterable: true,
                        columnMenu: true,
                        pageable: {
                            input: true,
                            numeric: false
                        },
                        columns: [
                            {
                                title: "合作者",
                                columns:[
                                    { field: "id", title: "编号",  width: "30px" },
                                    { field: "name", title: "姓名", width: "40px" },
                                    { field: "referrer", title: "推荐人", width: "40px"}
                                ]
                            },
                            {
                                title: "E 部分 - 分享推广信息",
                                columns:[
                                    { field: "visits", title: "访问人数", width: "40px" },
                                    { field: "prices", title: "元/人", format: "{0:c}", width: "36px" },
                                    { field: "total_e", title: "E总计", format: "{0:c}", width: "40px" }
                                ]
                            },
                            {
                                title: "C 部分 - 推荐合作者提成",
                                columns:[
                                    { field: "total_c", title: "C总计",format: "{0:c}", width: "70px" }    
                                ]
                            },
                            {
                                title: "总计 = E + C",
                                columns:[
                                    { field: "total", title: "E+C", format: "{0:c}", width: "40px" }
                                ]
                            }
                            
                            
                        ]
                });

                /// 使用默认值
                t$.reloadData();
            }

            var w = win.data('kendoWindow');
            w.open();            
        }); 

    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.showPayHistoryWindow", function(e) {_U.launch()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());