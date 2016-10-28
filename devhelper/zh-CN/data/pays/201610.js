(function () {

    /// 本单元的处理
    var _U = {};

    _U.payedState = ["完成", "待支付", "支付失败", "零不支付"];
    _U.data = [];
    _U.tp = function(data){
        var o = {
            start:"",                     
            end:"",                      
            id: "",                       
            cost: 0,    //纯收入（总共的）
            rate: 0,    //汇率
            referrer:"",                  
            payedState: _U.payedState[0]
        };

        return $.extend(o, data);
    };

    var curE = 6.76392;
    var nowDate = 0;

    //2016.10.01 - 2016.10.23
    _U.data.push(_U.tp({id: "D1150418", cost: 945.3, rate: curE, start:20161001, end:20161023}));  
    _U.data.push(_U.tp({id: "D2150425", cost: 176.7, rate: curE, start:20161001, end:20161023}));  
    _U.data.push(_U.tp({id: "D3150522", cost: 153.6, rate: curE, start:20161001, end:20161023}));  
    _U.data.push(_U.tp({id: "D4150728", cost: 748.5, rate: curE, start:20161001, end:20161023}));  
    _U.data.push(_U.tp({id: "D5150916", cost: 856.2, rate: curE, start:20161001, end:20161023}));  
    _U.data.push(_U.tp({id: "D6151112", cost: 577.9, rate: curE, start:20161001, end:20161023}));
    _U.data.push(_U.tp({id: "D7151202", cost: 192.5, rate: curE, start:20161001, end:20161023}));
    _U.data.push(_U.tp({id: "D8160908", cost: 2.3, rate: curE, start:20161001, end:20161023}));  

    //2016.10.24
    if(1){
        nowDate = 20161024;
        curE = 6.76364;
        _U.data.push(_U.tp({id: "D1150418", cost: 42.7, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D2150425", cost: 10.2, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D3150522", cost: 13.4, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D4150728", cost: 47.1, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D5150916", cost: 58.6, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D6151112", cost: 9.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 14.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
    }

    //2016.10.25
    if(1){
        nowDate = 20161025;
        curE = 6.77009;
        _U.data.push(_U.tp({id: "D1150418", cost: 15.4, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D2150425", cost: 23.5, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D3150522", cost: 19.8, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D4150728", cost: 30.3, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D5150916", cost: 27.9, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D6151112", cost: 16.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 23.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
    }

    //2016.10.26
    if(1){
        nowDate = 20161026;
        curE = 6.77678;
        _U.data.push(_U.tp({id: "D1150418", cost: 5.4, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D2150425", cost: 32.5, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D3150522", cost: 7.8, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D4150728", cost: 23.3, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D5150916", cost: 35.9, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D6151112", cost: 34.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 56.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
    }

    //2016.10.27
    if(1){
        nowDate = 20161027;
        curE = 6.77083;
        _U.data.push(_U.tp({id: "D1150418", cost: 1.4, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D2150425", cost: 14.3, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D3150522", cost: 17.1, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D4150728", cost: 5.7, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D5150916", cost: 14.6, rate: curE, start:nowDate, end:nowDate}));  
        _U.data.push(_U.tp({id: "D6151112", cost: 7.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 24.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]})); 
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));  
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));   
    }



    return _U;
})();