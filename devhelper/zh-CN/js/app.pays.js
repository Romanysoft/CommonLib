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
        $.templateLoader.loadExtTemplate("templates/tpl.app.pay.htm", function(){
            cb && cb();
        })
    };


    /// 更新支付记录数据
    _U.reloadData = function(dateObj){
        var t$ = this;

        var url = "data/partner_ass.js" + "?t=" + (new Date()).getTime();
        $.getScript(url)
	        .done(function(data, textStatus, jqxhr){
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
	        })
 	       .fail(function( jqxhr, settings, exception) {
 	       	   console.log("-------------------[load]Error-----------------" + url);
 	       });
    };

    /// 计算及统计支付情况 for E+C and A+B+C
    _U.calculatePays = function(paysData, partnersData){

        var t$ = this;

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
            ele.total_cr = ele.cost * ele.rate;    // 美元*汇率
            var info;

            if(ele.end <= 20161023) {                // 大于7天，采用月结算
                info = t$._prcCalc(ele.total_cr, true);  // 使用计算器来计算
            }else{
                 info = t$._prcCalc(ele.total_cr, false);  // 使用计算器来计算
            }

            ele.total_e = info["shouyi"];          // 开发者直接收益
            ele.total_e_ratio =ele.total_cr === 0? 0 : ele.total_e*100/ele.total_cr;  // 开发者收益占比

            ele.total_fc = info["fengcheng"];      //  直接推荐人能够拿到的分成

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
                curPartnerPay.total = curPartnerPay.total_e + curPartnerPay.total_c;
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
                    sum += linePartnerTotalPayObj.total_fc;
                });

                curPartnerPay.total_c = sum;
                curPartnerPay.total = curPartnerPay.total_e + curPartnerPay.total_c;

            }

            return curPartnerPay;
        }

        ///
        $.each(paysData, function(index, ele){
            var newPaysRecord = getPartnersPay(ele, paysData);

            // 修正支付状态
            if(!(newPaysRecord.payedState in ["待支付", "支付失败"] )){
                newPaysRecord.payedState = newPaysRecord.total > 0 ?  "完成" :  "零不支付";
            }

            resultsData.push(newPaysRecord);
        });

        return resultsData;
    };

    /// 计算器, 开发者收益, 直接推荐人收益
    _U._prcCalc = function(RMB_total, isMonth){
        var total = RMB_total;


        //// 开发者收益计算
        var shouyi = 0;
        var gs = " 0 ";

        var _b = 1000;

        var inC_List, RatioList;

        if(isMonth){
            inC_List = [0, 4*_b, 6*_b, 10*_b, 20*_b, 50*_b, 200*_b];
            RatioList = [0, 0.5, 0.55, 0.6,    0.75,   0.8,   0.85, 0.9];
        }else{
            inC_List =  [0, 0.2*_b, 0.4*_b, 0.8*_b, 1.2*_b, 1.8*_b, 2.6*_b, 3.6*_b, 4.8*_b];
            RatioList = [0,    0.5,   0.55,    0.6,    0.65,   0.7,    0.75,   0.8,    0.85,  0.9];
        }

        var inc_Count = inC_List.length;
        var inC_pos = 1;
        for(var i = 1; i < inc_Count; ++i){
            // 大于最大值
            if(total > inC_List[inc_Count - 1]){
                inC_pos = inc_Count;
                break;
            }


            if(total <= inC_List[i]){
                inC_pos = i;
                break;
            }
        }

        var total_income = 0;
        for(var i = 0; i < inC_pos; ++i){
            var left = i + 1;
            var right = i;

            var inCome = 0;


            if(left == inC_pos){
                inCome = (total - inC_List[right]) * RatioList[left];
                gs += " + (" + total + " - " + inC_List[right] + ") * " + RatioList[left];
            }else{
                inCome = (inC_List[left] - inC_List[right]) * RatioList[left];
                gs += " + (" + inC_List[left] + " - " + inC_List[right] + ") * " + RatioList[left];
            }

            total_income += inCome;
        }


        ///直接推荐人收益计算
        var referrer_ratio = 0.07;
        var fengcheng = (RMB_total - total_income) * referrer_ratio;
        var gs_f = "(" + RMB_total + " - " + total_income + ") * " + referrer_ratio*100 + "%;";

        return {
            "gs":gs,
            "shouyi":total_income,
            "gs_f": gs_f,
            "fengcheng": fengcheng
        };
    };


    _U.updateWithForec_ABC = function(yearMonth, partnersData){
        //console.log("updateWithForec_ABC");
        var t$ = this;
        var jsfile = "data/pays/" + yearMonth + ".js" + "?t=" + (new Date()).getTime();
        var gridElement = $('#pays-window > .pays-grid-ec');
        var grid = gridElement.data('kendoGrid');
        while (grid.dataSource.total() > 0){
            grid.dataSource.remove(grid.dataSource.at(0));
        }

        // For E+C/A+B+C模式
        //console.log("jsfile = %s", jsfile);
        $.get({
          url:jsfile,
          dataType: "text"
        }).done(function(data, textStatus, jqxhr){
            var paysData = [];
            console.log("GetData====");
            if($.RTYUtils.isString(data)){
                var obj = eval(data);
                paysData = obj.data;
            }else if(!data){
            	paysData = window["rty_pays_dataobj"].data;
        	}

            var resultData = t$.calculatePays(paysData, partnersData);

            $.each(resultData, function(index, obj){
                grid.dataSource.add(obj);
            });

            t$.hideLoading();

        });
    };

    /// 更新数据
    _U.updateWith = function(yearMonth, partnersData){
        var t$ = this;
        t$.showLoading();
        t$.updateWithForec_ABC(yearMonth, partnersData);
    };

    _U.showLoading = function(e) {
      var gridElement = $('#pays-window > .pays-grid-ec');
      kendo.ui.progress(gridElement, true);
    };

    _U.hideLoading = function(e){
      var gridElement = $('#pays-window > .pays-grid-ec');
      kendo.ui.progress(gridElement, false);
    };



    _U.OptionsForec = {
            dataSource: {
                batch: true,
                data: [],
                schema: {
                    model: {
                        fields: {
                            start: { type: "string" },
                            end: { type: "string" },
                            id: { type: "string" },
                            name: { type: "string" },
                            referrer: { type: "string" },
                            cost: { type: "number" },
                            rate: { type: "number" },
                            total_cr: { type: "number" },
                            total_e_ratio: { type: "number" },
                            total_e: { type: "number" },
                            total_fc: { type: "number" },
                            total_c: { type: "number" },
                            total: { type: "number" },

                            payedState: {type: "string"}
                        }
                    }
                },
                sort:[
                    {field: "end", dir: "desc" },
                    {field: "total", dir: "desc" }
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
            sortable: true,
            filterable: true,
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
                    title: "E部分：合作Apps纯收入 * 开发者占比",
                    columns:[
                        { field: "cost", title: "收入($)", format: "${0:n2}", width: "40px" },
                        { field: "rate", title: "汇率", format: "{0:n5}", width: "40px" },
                        { field: "total_cr", title: "收入(¥)", format: "¥{0:n2}", width: "40px" },
                        { field: "total_e_ratio", title: "占比", format: "{0:n2}%", width: "32px" },
                        { field: "total_e", title: "E收入(¥)", format: "¥{0:n2}", width: "50px" }
                        //,{ field: "total_fc", title: "推荐人收入(¥)", format: "¥{0:n2}", width: "50px" }
                    ]
                },
                {
                    title: "C部分：推荐提成",
                    columns:[
                        { field: "total_c", title: "C收入(¥)",format: "¥{0:n3}", width: "50px" }
                    ]
                },
                {
                    title: "总计 = E + C",
                    columns:[
                        { field: "total", title: "总计", format: "¥{0:n2}", width: "60px" }
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
                    width: 1680,
                    maxWidth: 1680,
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
                 t$.showLoading();
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
