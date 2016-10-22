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
            payedState: _U.payedState[0]
        };

        return $.extend(o, data);
    };


    _U.data.push(_U.tp({id: "A016", visits: 121, start:"2016/09/01", end:"2016/09/30"}));                    
    _U.data.push(_U.tp({id: "A017", visits: 0, start:"2016/09/01", end:"2016/09/30"}));  
    _U.data.push(_U.tp({id: "A018", visits: 0, start:"2016/09/01", end:"2016/09/30"}));  
    _U.data.push(_U.tp({id: "A019", visits: 62893, start:"2016/09/01", end:"2016/09/30"}));  
    _U.data.push(_U.tp({id: "A020", visits: 89445, start:"2016/09/01", end:"2016/09/30"}));  
    _U.data.push(_U.tp({id: "A021", visits: 209546, start:"2016/09/01", end:"2016/09/30"}));  
    _U.data.push(_U.tp({id: "A022", visits: 46569, start:"2016/09/01", end:"2016/09/30"}));  



    return _U;
})();