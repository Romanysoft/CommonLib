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

    window["rty_pays_dataobj"] = _U;

    return _U;
})();
