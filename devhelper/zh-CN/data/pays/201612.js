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
        nowDate = 20161201;
        curE = 6.88903;
        _U.data.push(_U.tp({id: "D1150418", cost: 23.01, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 41.43, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 26.79, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 19.43, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 58.48, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 27.39, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 13.94, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161202;
        curE = 6.88431;
        _U.data.push(_U.tp({id: "D1150418", cost: 17.51, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 24.37, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 19.43, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 14.15, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 9.26, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 10.84, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 3.07, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161203;
        curE = 6.88456;
        _U.data.push(_U.tp({id: "D1150418", cost: 16.13, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 15.61, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 12.12, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 8.92, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 18.31, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 0, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161204;
        curE = 6.88427;
        _U.data.push(_U.tp({id: "D1150418", cost: 7.21, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 20.66, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 18.29, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 6.56, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 7.31, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 39.82, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 19.74, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161205;
        curE = 6.98339;
        _U.data.push(_U.tp({id: "D1150418", cost: 51.56, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 21.61, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 29.53, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 15.34, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 47.94, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 31.73, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 19.23, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161206;
        curE = 7.06274;
        _U.data.push(_U.tp({id: "D1150418", cost: 14.35, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 8.73, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 2.16, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 7.3, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 11.27 rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 3.73, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 0, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161207;
        curE = 6.87737;
        _U.data.push(_U.tp({id: "D1150418", cost: 36.91, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 15.84, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 12.41, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 9.14, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 19.61, rate: curE, start:nowDate,  end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 11.25, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 17.23, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    window["rty_pays_dataobj"] = _U;

      return _U;
  })();
