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

    //2016.12.01
    nowDate = 20161201;
    _U.data.push(_U.tp({id: "A019", visits: 1676, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1318, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 978, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 452, start:nowDate, end:nowDate}));

    //2016.12.02
    nowDate = 20161202;
    _U.data.push(_U.tp({id: "A019", visits: 2206, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 2561, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1129, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1011, start:nowDate, end:nowDate}));

    //2016.12.03
    nowDate = 20161203;
    _U.data.push(_U.tp({id: "A019", visits: 1468, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1326, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 989, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 784, start:nowDate, end:nowDate}));

    //2016.12.04
    nowDate = 20161204;
    _U.data.push(_U.tp({id: "A019", visits: 2840, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 3380, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1152, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 817, start:nowDate, end:nowDate}));

    //2016.12.05
    nowDate = 20161205;
    _U.data.push(_U.tp({id: "A019", visits: 3154, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 2781, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1287, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1325, start:nowDate, end:nowDate}));

    //2016.12.06
    nowDate = 20161206;
    _U.data.push(_U.tp({id: "A019", visits: 2890, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1183, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 2755, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1216, start:nowDate, end:nowDate}));    

    window["rty_pays_dataobj"] = _U;

    return _U;
})();
