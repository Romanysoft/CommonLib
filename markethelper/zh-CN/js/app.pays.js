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
        $.templateLoader.loadExtTemplate("markethelper/zh-CN/templates/tpl.app.pay.htm", function(){
            cb && cb();
        })
    };


    /// 更新支付记录数据
    _U.reloadData = function(dateObj){
        var t$ = this;
        var url = "data/zh-CN/marking_partner_ass.js" + "?t=" + (new Date()).getTime();
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
            ele.total_e = ele.total_e;
            //ele.total_e = ele.total_e > 10000 ? 10000 : ele.total_e; // E+C E最高1W
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
                        if(rec.id === partner.id 
                        && rec.start === payRecordObj.start
                        && rec.end === payRecordObj.end
                        ){
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

    _U.updateWithForec_ABC = function(yearMonth, partnersData){
        var t$ = this;
        var jsfile = "data/zh-CN/pays/E+C_A+B+C/base_" + yearMonth + ".js" + "?t=" + (new Date()).getTime();
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
            }else if(!data){
            	paysData = window["rty_pays_dataobj"].data;
        	}  
   
            var resultData = t$.calculatePaysForECABC(paysData, partnersData);
        
            $.each(resultData, function(index, obj){
                grid.dataSource.add(obj);
            })
            
        });
    };

    /// 更新数据
    _U.updateWith = function(yearMonth, partnersData){
        var t$ = this;
        t$.updateWithForec_ABC(yearMonth, partnersData);
    };

    _U.OptionsForec = {
            dataSource: {
                data: [],
                schema: {
                    model: {
                        fields: {
                            start: { type: "string" },
                            end: { type: "string" },
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
                    {field: "end", dir: "desc" }
                ], 
                pageSize: 50
            },
            height: 540,
            scrollable: true,
            groupable:{
                enabled: true,
                showFooter: true
            },
            reorderable: true,
            resizable: true,
            filterable: true,
            sortable: true,
            columnMenu: true,
            pageable: {
                input: true,
                numeric: false
            },
            columns: [
                {
                    title: "时间范围",
                    columns:[
                        { field: "start", title: "开始日期",  width: "44px" },
                        { field: "end", title: "结束日期", width: "44px" }
                    ]
                },
                {
                    title: "合作者",
                    columns:[
                        { field: "id", title: "编号",  width: "30px" },
                        { field: "name", title: "姓名", width: "36px" },
                        { field: "referrer", title: "推荐人", width: "40px"}
                    ]
                },
                {
                    title: "E 部分 - 分享信息 访客数量 * ¥(人民币元）/人",
                    columns:[
                        { field: "visits", title: "访客数量", width: "40px" },
                        { field: "prices", title: "¥/人", format: "¥ {0:n3}", width: "36px" },
                        { field: "total_e", title: "E总计", format: "¥ {0:n2}", width: "40px" }
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
                        { field: "total", title: "E+C", format: "¥ {0:n2}", width: "40px" }
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
                    title: "支付记录",
                    width: 1440,
                    position: {
                        top: 60
                    },                    
                    resizable: true,
                    resize: function(){
                        $('#pays-window > .pays-grid-ec').data("kendoGrid").setOptions({height:win.height() - 64});
                    },
                    model:false
                });

                kendo.culture("zh-CN");
                
 
                function getCacleDate(){
                        var curDate = new Date();
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

				setTimeout(function(){
	                /// 使用默认值
	                t$.reloadData(getCacleDate());
				},500);

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