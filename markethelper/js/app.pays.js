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
        var url = "data/marking_partner_ass.js" + "?t=" + (new Date()).getTime();
        $.getScript(url).done(function(data, textStatus, jqxhr){
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

    /// 计算及统计支付情况 for E+C and A+B+C
    _U.calculatePaysForECABC = function(paysData, partnersData){

        var resultsData = [];

        /// 获取自己的下线
        function getLinePartners(id){
            var linePartners = [];
            $.each(partnersData, function(index, ele){
                var referrer = ele.referrer;
                if (referrer === id){
                    linePartners.push(ele);
                }
            });

            return linePartners;
        }

        /// 获取自己的信息
        function getPartnerInfo(id){
            var info = null;
            $.each(partnersData, function(index, ele){
                if (id === ele.id){
                    info = ele;
                }
            });

            return info;
        }

        /// 先整理格式化
        $.each(paysData, function(index, ele){
            ele.prices = 0.025;
            ele.total_e = ele.visits * ele.prices;
            ele.total_e = ele.total_e > 10000 ? 10000 : ele.total_e; // E+C E最高1W
            ele.total_a = ele.total_e;
            ele.total_a = ele.total_a > 2000 ? 2000 : ele.total_a;   // A+C A最高1W
            ele.total_c = 0;
            ele.total = 0;
        });

        /// 获取下载总的提成
        function getPartnersPay(payRecordObj, allPaysData){
            var curPartnerPay = $.extend(payRecordObj, {});
            var info = getPartnerInfo(curPartnerPay.id);
            curPartnerPay.name = info.name;
            curPartnerPay.referrer = info.referrer;


            var linePartners = getLinePartners(curPartnerPay.id);
            if (linePartners.length < 1){
                if (info.payment === "E+C"){
                    curPartnerPay.total = curPartnerPay.total_e + curPartnerPay.total_c;
                } 
            }else{
                
                var linePartnersPaysData = [];
                $.each(linePartners, function(i, partner){
                    $.each(allPaysData, function(i, rec){
                        if(rec.id === partner.id){
                            linePartnersPaysData.push(rec);
                        }
                    })
                });

                var sum = 0;
                $.each(linePartnersPaysData, function(index, payObj){
                    var linePartnerTotalPayObj = getPartnersPay(payObj, allPaysData);
                    sum += linePartnerTotalPayObj.total;
                });

                curPartnerPay.total_c = sum * 0.15;
                curPartnerPay.total = curPartnerPay.total_e + curPartnerPay.total_c;
            }

            return curPartnerPay; 
        }

        /// 
        $.each(paysData, function(index, ele){
            var newPaysRecord = getPartnersPay(ele, paysData);
            resultsData.push(newPaysRecord);
        });

        return resultsData;
    };

    /// 计算及统计支付情况 for E2
    _U.calculatePaysForE2 = function(paysData, partnersData){

        var resultsData = [];

        /// 获取自己的信息
        function getPartnerInfo(id){
            var info = null;
            $.each(partnersData, function(index, ele){
                if (id === ele.id){
                    info = ele;
                }
            });

            return info;
        }

        /// 先整理格式化
        $.each(paysData, function(index, ele){
            ele.prices = 0.002;
            ele.total_e = ele.visits * ele.prices;
            ele.total_e = ele.total_e > 2500 ? 2500 : ele.total_e; // E2 E2最高2500
            ele.total_c = 0;
            ele.total = 0;
        });

        /// 获取下载总的提成
        function getPartnersPay(payRecordObj, allPaysData){
            var curPartnerPay = $.extend(payRecordObj, {});
            var info = getPartnerInfo(curPartnerPay.id);
            curPartnerPay.name = info.name;
            curPartnerPay.referrer = info.referrer;
            curPartnerPay.total = curPartnerPay.total_e + curPartnerPay.total_c;

            return curPartnerPay; 
        }

        /// 
        $.each(paysData, function(index, ele){
            var newPaysRecord = getPartnersPay(ele, paysData);
            resultsData.push(newPaysRecord);
        });

        return resultsData;
    };    

    _U.updateWithForec_ABC = function(yearMonth, partnersData){
        var t$ = this;
        var jsfile = "data/pays/E+C_A+B+C/base_" + yearMonth + ".js" + "?t=" + (new Date()).getTime();
        var grid = $('#pays-window > .pays-grid-ec').data('kendoGrid');
        while (grid.dataSource.total() > 0){
            grid.dataSource.remove(grid.dataSource.at(0));
        } 
    
        // For E+C/A+B+C模式
        $.getScript(jsfile).done(function(data, textStatus, jqxhr){
            var paysData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                paysData = obj.data;
            } 
   
            var resultData = t$.calculatePaysForECABC(paysData, partnersData);
        
            $.each(resultData, function(index, obj){
                grid.dataSource.add(obj);
            })
            
        });
    };

    _U.updateWithForE2 = function(yearMonth, partnersData){
        var t$ = this;
        var jsfile = "data/pays/E2/base_" + yearMonth + ".js" + "?t=" + (new Date()).getTime();
        var grid = $('#pays-window > .pays-grid-e2').data('kendoGrid');
        while (grid.dataSource.total() > 0){
            grid.dataSource.remove(grid.dataSource.at(0));
        } 
    
        // For E2模式
        $.getScript(jsfile).done(function(data, textStatus, jqxhr){
            var paysData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                paysData = obj.data;
            } 
   
            var resultData = t$.calculatePaysForE2(paysData, partnersData);
        
            $.each(resultData, function(index, obj){
                grid.dataSource.add(obj);
            })
            
        });
    };

    /// 更新数据
    _U.updateWith = function(yearMonth, partnersData){
        var t$ = this;
        t$.updateWithForec_ABC(yearMonth, partnersData);
        t$.updateWithForE2(yearMonth, partnersData);
    };

    _U.OptionsForec = {
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
                            payedState: {type: "string"}
                        }
                    }
                },
                sort:[
                    {field: "payment", dir: "asc" },
                    {field: "id", dir: "desc" }
                ], 
                pageSize: 50
            },
            height: 360,
            scrollable: true,
            groupable:{
                enabled: true,
                showFooter: true
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
                    title: "E 部分 - 分享信息 访问人数 * 元/人",
                    columns:[
                        { field: "visits", title: "访问人数", width: "40px" },
                        { field: "prices", title: "元/人", format: "¥ {0:n3}", width: "36px" },
                        { field: "total_e", title: "E总计", format: "¥ {0:n3}", width: "40px" }
                    ]
                },
                {
                    title: "C 部分 - 推荐提成",
                    columns:[
                        { field: "total_c", title: "C总计",format: "¥ {0:n3}", width: "50px" }    
                    ]
                },
                {
                    title: "总计 = E + C",
                    columns:[
                        { field: "total", title: "E+C", format: "¥ {0:n3}", width: "40px" }
                    ]
                },
                { field: "payedState", title: "支付状态", width: "40px" }
                
                
            ]
    };

    _U.OptionsForE2 = {
            dataSource: {
                data: [],
                schema: {
                    model: {
                        fields: {
                            id: { type: "string" },
                            name: { type: "string" },
                            visits: { type: "string" },
                            prices: { type: "number" },
                            total_e: { type: "string" },
                            total: { type: "string" },
                            payedState: {type: "string"}
                        }
                    }
                },
                sort:[
                    {field: "payment", dir: "asc" },
                    {field: "id", dir: "desc" }
                ], 
                pageSize: 50
            },
            height: 360,
            scrollable: true,
            groupable:{
                enabled: true,
                showFooter: true
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
                    title: "国外合作者",
                    columns:[
                        { field: "id", title: "编号",  width: "30px" },
                        { field: "name", title: "姓名", width: "40px" }
                    ]
                },
                {
                    title: "分享信息 访问人数 * $/人",
                    columns:[
                        { field: "visits", title: "访问人数", width: "40px" },
                        { field: "prices", title: "$/人", format: "$ {0:n3}", width: "36px" },
                        { field: "total_e", title: "总计", format: "$ {0:n3}", width: "40px" }
                    ]
                },
                { field: "payedState", title: "支付状态", width: "40px" }
                
            ]
    };    

    _U.launch = function () {
        var t$ = this;

        // 加载模板，然后初始化控件
        _U.loadTemplate(function(){
            var win = $('#pays-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "支付记录(适用于E+C/E2) 每月15日前结算并支付上个月报酬",
                    width: 1280,
                    position: {
                        top: 60
                    },                    
                    resizable: true,
                    model:false
                });

                kendo.culture("zh-CN");
                
 
                function getCacleDate(){
                        var curDate = new Date();
                        var curYear = curDate.getFullYear();
                        var curDays = curDate.getDate();
                        var curMonth = curDate.getMonth();

                        var mustChange = true;
                        if(mustChange){
                            var nearDay = 1;

                            if(curDays >= nearDay){
                                if(curMonth == 1){
                                    curMonth = 12;
                                    curYear = curYear - 1;
                                }else{
                                    curMonth = curMonth - 1;
                                }

                                curDate.setDate(nearDay);
                                curDate.setMonth(curMonth);
                                curDate.setFullYear(curYear); 
                            }else{
                                if(curMonth <= 2){
                                    curMonth = 10 + curMonth;
                                    curYear = curYear - 1;
                                }else{
                                    curMonth = curMonth - 2;
                                }

                                curDate.setDate(nearDay);
                                curDate.setMonth(curMonth);
                                curDate.setFullYear(curYear); 
                            }
                        }

                        return curDate;
                }

                $("#pays-monthpicker").kendoDatePicker({
                    // defines the start view
                    start: "year",

                    // defines when the calendar should return date
                    depth: "year",

                    // display month and year in the input
                    format: "yyyy/MM",

                    change: function(){
                        console.log("Change :: " + kendo.toString(this.value(), 'yyyyMM'));
                        t$.reloadData(this.value());
                    },
                    value: getCacleDate()
                });


                /// 初始化表格
                $('#pays-window > .pays-grid-ec').kendoGrid(t$.OptionsForec);
                $('#pays-window > .pays-grid-e2').kendoGrid(t$.OptionsForE2);

                /// 使用默认值
                t$.reloadData(getCacleDate());
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