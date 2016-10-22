(function () {

    /// 本单元的处理
    var _U = {};

    _U.payedState = ["完成", "待支付"];
    _U.data = [];
    _U.tp = function(data){
        var o = {
            id: "",                       // 用户ID 
            visits: 0,
            referrer:"",                   // 推荐人，上线人员
            payedState: _U.payedState[1]
        };

        return $.extend(o, data);
    };

    _U.data.push(_U.tp({
        id: "A024",
        visits: 0
    }));                    

    _U.data.push(_U.tp({
        id: "A025",
        visits: 0
    }));




    return _U;
})();