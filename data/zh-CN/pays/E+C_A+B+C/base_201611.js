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

    //2016.11.06
    nowDate = 20161106;
    _U.data.push(_U.tp({id: "A019", visits: 1511, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 936, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 804, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1319, start:nowDate, end:nowDate}));

    //2016.11.07
    nowDate = 20161107;
    _U.data.push(_U.tp({id: "A019", visits: 1271, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1043, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1003, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1455, start:nowDate, end:nowDate}));

    //2016.11.08
    nowDate = 20161108;
    _U.data.push(_U.tp({id: "A019", visits: 1045, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1271, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1141, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1253, start:nowDate, end:nowDate}));

    //2016.11.09
    nowDate = 20161109;
    _U.data.push(_U.tp({id: "A019", visits: 1422, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1331, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1083, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1015, start:nowDate, end:nowDate}));

    //2016.11.10
    nowDate = 20161110;
    _U.data.push(_U.tp({id: "A019", visits: 3334, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1331, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 2913, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1767, start:nowDate, end:nowDate}));

    //2016.11.11
    nowDate = 20161111;
    _U.data.push(_U.tp({id: "A019", visits: 2168, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1192, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1250, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1060, start:nowDate, end:nowDate}));

    //2016.11.12
    nowDate = 20161112;
    _U.data.push(_U.tp({id: "A019", visits: 2547, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1836, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1439, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1753, start:nowDate, end:nowDate}));

    //2016.11.13
    nowDate = 20161113;
    _U.data.push(_U.tp({id: "A019", visits: 3058, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 2003, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1117, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 1370, start:nowDate, end:nowDate}));

    //2016.11.14
    nowDate = 20161114;
    _U.data.push(_U.tp({id: "A019", visits: 1428, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 946, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 745, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 689, start:nowDate, end:nowDate}));

    //2016.11.15
    nowDate = 20161115;
    _U.data.push(_U.tp({id: "A019", visits: 3494, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 1303, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1933, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 2577, start:nowDate, end:nowDate}));

    //2016.11.16
    nowDate = 20161116;
    _U.data.push(_U.tp({id: "A019", visits: 3448, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A020", visits: 2519, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A021", visits: 1888, start:nowDate, end:nowDate}));
    _U.data.push(_U.tp({id: "A022", visits: 920, start:nowDate, end:nowDate}));

    window["rty_pays_dataobj"] = _U;

    return _U;
})();
