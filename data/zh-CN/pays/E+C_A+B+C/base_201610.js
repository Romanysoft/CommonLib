(function () {

    /// 本单元的处理
    var _U = {};

    _U.payedState = ["完成", "待支付", "支付失败"];
    _U.data = [];
    _U.tp = function(data){
        var o = {
            start:"",                     //时间范围Start
            end:"",                       //时间范围End
            id: "",                       // 用户ID 
            visits: 0,
            referrer:"",                   // 推荐人，上线人员
            payedState: _U.payedState[1]
        };

        return $.extend(o, data);
    };


    _U.data.push(_U.tp({id: "A019", visits: 200+16867, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A020", visits: 200+68872, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A021", visits: 200+140395, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A022", visits: 200+31847, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A023", visits: 200+53, start:"2016/10/09", end:"2016/10/21"}));



    return _U;
})();