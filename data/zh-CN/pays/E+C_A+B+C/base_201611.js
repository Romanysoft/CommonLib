(function () {

    /// 本单元的处理
    var _U = {};

    _U.payedState = ["完成", "待支付", "支付失败", "不用支付"];
    _U.data = [];
    _U.tp = function(data){
        var o = {
            start:"",                     //时间范围Start
            end:"",                       //时间范围End
            id: "",                       // 用户ID
            visits: 0,
            referrer:"",                   // 推荐人，上线人员
            payedState: _U.payedState[0]
        };

        return $.extend(o, data);
    };

    var nowDate = 0;

    //2016.11.01
    nowDate = 20161101;
    _U.data.push(_U.tp({id: "A019", visits: 1935, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1322, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1432, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 917, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A023", visits: 7, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A024", visits: 0, start:nowDate, end:nowDate}));


    //2016.11.02
    nowDate = 20161102;
    _U.data.push(_U.tp({id: "A019", visits: 1060, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 727, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 33, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 636, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A023", visits: 2, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A024", visits: 0, start:nowDate, end:nowDate}));

    //2016.11.03
    nowDate = 20161103;
    _U.data.push(_U.tp({id: "A019", visits: 1845, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 968, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 645, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1477, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A023", visits: 0, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A024", visits: 0, start:nowDate, end:nowDate}));

    //2016.11.04
    nowDate = 20161104;
    _U.data.push(_U.tp({id: "A019", visits: 1248, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1395, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 946, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1875, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A023", visits: 0, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A024", visits: 0, start:nowDate, end:nowDate}));

    //2016.11.05
    nowDate = 20161105;
    _U.data.push(_U.tp({id: "A019", visits: 1321, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 944, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 713, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1124, start:nowDate, end:nowDate}));



    window["rty_pays_dataobj"] = _U;

    return _U;
})();
