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

    _U.data.push(_U.tp({id: "A019", visits: 200+16867, start:20161001, end:20161021}));  
    _U.data.push(_U.tp({id: "A020", visits: 200+68872, start:20161001, end:20161021}));  
    _U.data.push(_U.tp({id: "A021", visits: 200+140395, start:20161001, end:20161021}));  
    _U.data.push(_U.tp({id: "A022", visits: 200+31847, start:20161001, end:20161021}));  
    _U.data.push(_U.tp({id: "A023", visits: 200+53, start:20161009, end:20161021}));

    //2016.10.22
    _U.data.push(_U.tp({id: "A019", visits: 2575, start:20161022, end:20161022}));  
    _U.data.push(_U.tp({id: "A020", visits: 3892, start:20161022, end:20161022}));  
    _U.data.push(_U.tp({id: "A021", visits: 3106, start:20161022, end:20161022}));  
    _U.data.push(_U.tp({id: "A022", visits: 2841, start:20161022, end:20161022}));  
    _U.data.push(_U.tp({id: "A023", visits: 5, start:20161022, end:20161022}));    

    //2016.10.23
    _U.data.push(_U.tp({id: "A019", visits: 1356, start:20161023, end:20161023}));  
    _U.data.push(_U.tp({id: "A020", visits: 1205, start:20161023, end:20161023}));  
    _U.data.push(_U.tp({id: "A021", visits: 1156, start:20161023, end:20161023}));  
    _U.data.push(_U.tp({id: "A022", visits: 96, start:20161023, end:20161023}));  
    _U.data.push(_U.tp({id: "A023", visits: 3, start:20161023, end:20161023}));  

    //2016.10.24
    nowDate = 20161024;
    _U.data.push(_U.tp({id: "A019", visits: 4318, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A020", visits: 2391, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A021", visits: 1502, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A022", visits: 1071, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A023", visits: 2, start:nowDate, end:nowDate})); 

    
    //2016.10.25
    nowDate = 20161025;
    _U.data.push(_U.tp({id: "A019", visits: 3020, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A020", visits: 2044, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A021", visits: 1003, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A022", visits: 654, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A023", visits: 6, start:nowDate, end:nowDate}));     

    //2016.10.26
    nowDate = 20161026;
    _U.data.push(_U.tp({id: "A019", visits: 4457, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A020", visits: 3123, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A021", visits: 1985, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A022", visits: 1033, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A023", visits: 7, start:nowDate, end:nowDate}));   
    _U.data.push(_U.tp({id: "A024", visits: 2, start:nowDate, end:nowDate})); 
    
    //2016.10.27
    nowDate = 20161027;
    _U.data.push(_U.tp({id: "A019", visits: 3712, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A020", visits: 3326, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A021", visits: 2458, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A022", visits: 1759, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A023", visits: 7, start:nowDate, end:nowDate}));   
    _U.data.push(_U.tp({id: "A024", visits: 3, start:nowDate, end:nowDate}));   
    
    //2016.10.28
    nowDate = 20161028;
    _U.data.push(_U.tp({id: "A019", visits: 3013, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A020", visits: 2417, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A021", visits: 1314, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A022", visits: 705, start:nowDate, end:nowDate}));  
    _U.data.push(_U.tp({id: "A023", visits: 1, start:nowDate, end:nowDate}));   
    _U.data.push(_U.tp({id: "A024", visits: 0, start:nowDate, end:nowDate}));  
    
    return _U;
})();