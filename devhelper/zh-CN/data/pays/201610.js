(function () {

    /// 本单元的处理
    var _U = {};

    _U.payedState = ["完成", "待支付", "支付失败"];
    _U.data = [];
    _U.tp = function(data){
        var o = {
            start:"",                     
            end:"",                      
            id: "",                       
            cost: 0,
            referrer:"",                  
            payedState: _U.payedState[0]
        };

        return $.extend(o, data);
    };

    var curE = 6.77;

    _U.data.push(_U.tp({id: "D1150418", cost: 345.3*curE, start:"2016/10/01", end:"2016/10/31"}));  
    _U.data.push(_U.tp({id: "D2150728", cost: 248.5*curE, start:"2016/10/01", end:"2016/10/31"}));  
    _U.data.push(_U.tp({id: "D3150916", cost: 156.2*curE, start:"2016/10/01", end:"2016/10/31"}));  
    _U.data.push(_U.tp({id: "D4151112", cost: 277.9*curE, start:"2016/10/01", end:"2016/10/31"}));
    _U.data.push(_U.tp({id: "D5151202", cost: 52.5*curE, start:"2016/10/01", end:"2016/10/31"}));
    _U.data.push(_U.tp({id: "D6160908", cost: 2.3*curE, start:"2016/10/01", end:"2016/10/31"}));  



    return _U;
})();