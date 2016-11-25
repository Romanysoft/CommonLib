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
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
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
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161103;
        curE = 6.76026;
        _U.data.push(_U.tp({id: "D1150418", cost: 18.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 17.1, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 13.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 11.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 9.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 12.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 18.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161104;
        curE = 6.75864;
        _U.data.push(_U.tp({id: "D1150418", cost: 20.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 22.71, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 7.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 24.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 14.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 20.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 11.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161105;
        curE = 6.75992;
        _U.data.push(_U.tp({id: "D1150418", cost: 35.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 27.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 11.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 9.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 19.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 8.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 14.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }


    if(1){
        nowDate = 20161106;
        curE = 6.76053;
        _U.data.push(_U.tp({id: "D1150418", cost: 28.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 10.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 29.1, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 15.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 11.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 25.1, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 8.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }


    if(1){
        nowDate = 20161107;
        curE = 6.78176;
        _U.data.push(_U.tp({id: "D1150418", cost: 26.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 25.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 21.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 9.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 22.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 23.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 12.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161108;
        curE = 6.78118;
        _U.data.push(_U.tp({id: "D1150418", cost: 8.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 27.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 11.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 21.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 7.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 12.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 8.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161109;
        curE = 6.77594;
        _U.data.push(_U.tp({id: "D1150418", cost: 39.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 83.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 48.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 46.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 32.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 41.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 17.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161110;
        curE = 6.79354;
        _U.data.push(_U.tp({id: "D1150418", cost: 11.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 27.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 15.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 7.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 12.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 13.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 3.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161111;
        curE = 6.80911;
        _U.data.push(_U.tp({id: "D1150418", cost: 27.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 105.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 31.1, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 17.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 21.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 18.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 32.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 2.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161112;
        curE = 6.80911;
        _U.data.push(_U.tp({id: "D1150418", cost: 16.7, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 9.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 30.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 20.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 22.8, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 44.5, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 19.4, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161113;
        curE = 6.81674;
        _U.data.push(_U.tp({id: "D1150418", cost: 8.87, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 0.72, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 4.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 14.52, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 3.46, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 9.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 5.2, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161113;
        curE = 6.81674;
        _U.data.push(_U.tp({id: "D1150418", cost: 8.87, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 0.72, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 4.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 14.52, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 3.46, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 9.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 5.2, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161114;
        curE = 6.84511;
        _U.data.push(_U.tp({id: "D1150418", cost: 35.3, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 18.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 25.1, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 37.6, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 19.2, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 7.9, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 31.2, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161115;
        curE = 6.85455;
        _U.data.push(_U.tp({id: "D1150418", cost: 22.13, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 65.28, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 14.77, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 27.65, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 31.72, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 21.63, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 17.24, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0.72, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161116;
        curE = 6.86671;
        _U.data.push(_U.tp({id: "D1150418", cost: 27.81, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 56.39, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 24.62, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 17.73, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 18.23, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 20.35, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 30.38, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161117;
        curE = 6.84799;
        _U.data.push(_U.tp({id: "D1150418", cost: 22.54, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 16.82, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 20.95, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 12.81, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 15.18, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 8.74, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 2.74, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161118;
        curE = 6.88600;
        _U.data.push(_U.tp({id: "D1150418", cost: 77.67, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 119.09, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 63.08, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 21.73, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 29.15, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 12.77, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 6.34, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161119;
        curE = 6.88722;
        _U.data.push(_U.tp({id: "D1150418", cost: 37.64, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 51.39, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 41.47, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 44.56, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 38.03, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 17.68, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 10.28, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161120;
        curE = 6.88722;
        _U.data.push(_U.tp({id: "D1150418", cost: 31.37, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 11.71, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 11.40, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 23.86, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 8.24, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 27.30, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 6.54, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161121;
        curE = 6.89267;
        _U.data.push(_U.tp({id: "D1150418", cost: 21.06, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 20.47, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 8.92, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 23.4, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 29.08, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 42.15, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 15.14, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161122;
        curE = 6.88862;
        _U.data.push(_U.tp({id: "D1150418", cost: 7.03, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 17.54, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 13.51, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 6.12, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 9.37, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 2.15, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 5.23, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

    if(1){
        nowDate = 20161123;
        curE = 6.90129;
        _U.data.push(_U.tp({id: "D1150418", cost: 45.63, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D2150425", cost: 29.97, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D3150522", cost: 15.06, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D4150728", cost: 16.62, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D5150916", cost: 27.59, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D6151112", cost: 31.42, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D7151202", cost: 13.46, rate: curE, start:nowDate, end:nowDate}));

        _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:nowDate}));
        _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:nowDate}));
    }

	window["rty_pays_dataobj"] = _U;

    return _U;
})();
