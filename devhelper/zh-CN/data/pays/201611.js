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

    if(1){
        nowDate = 20161101;
        curE = 6.77086;
        _U.data.push(_U.tp({id: "D1150418", cost: 23.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 17.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 7.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 12.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 5.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 19.1, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 16.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
    }

    if(1){
        nowDate = 20161102;
        curE = 6.76014;
        _U.data.push(_U.tp({id: "D1150418", cost: 12.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 7.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 10.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 6.1, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 8.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 11.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 14.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate, payedState:_U.payedState[3]}));
    }

	window["rty_pays_dataobj"] = _U;

    return _U;
})();
