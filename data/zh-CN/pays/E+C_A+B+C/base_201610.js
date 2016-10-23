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


    _U.data.push(_U.tp({id: "A019", visits: 200+16867, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A020", visits: 200+68872, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A021", visits: 200+140395, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A022", visits: 200+31847, start:"2016/10/01", end:"2016/10/21"}));  
    _U.data.push(_U.tp({id: "A023", visits: 200+53, start:"2016/10/09", end:"2016/10/21"}));

    //2016.10.22
    _U.data.push(_U.tp({id: "A019", visits: 2575, start:"2016/10/22", end:"2016/10/22"}));  
    _U.data.push(_U.tp({id: "A020", visits: 3892, start:"2016/10/22", end:"2016/10/22"}));  
    _U.data.push(_U.tp({id: "A021", visits: 3106, start:"2016/10/22", end:"2016/10/22"}));  
    _U.data.push(_U.tp({id: "A022", visits: 2841, start:"2016/10/22", end:"2016/10/22"}));  
    _U.data.push(_U.tp({id: "A023", visits: 5, start:"2016/10/22", end:"2016/10/22"}));    

    //2016.10.23
    if(0){
        _U.data.push(_U.tp({id: "A019", visits: 1356, start:"2016/10/22", end:"2016/10/23"}));  
        _U.data.push(_U.tp({id: "A020", visits: 1205, start:"2016/10/22", end:"2016/10/23"}));  
        _U.data.push(_U.tp({id: "A021", visits: 1156, start:"2016/10/22", end:"2016/10/23"}));  
        _U.data.push(_U.tp({id: "A022", visits: 96, start:"2016/10/22", end:"2016/10/23"}));  
        _U.data.push(_U.tp({id: "A023", visits: 3, start:"2016/10/22", end:"2016/10/23"}));  
    }
    
    return _U;
})();