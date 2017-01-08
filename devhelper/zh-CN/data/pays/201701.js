(function () {

   try{
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
      var nowDate = 0, endDate = 0;

      if(1){
         nowDate = 20170101;
         endDate = 20170102;
         curE = 6.94400;
         _U.data.push(_U.tp({id: "D1150418", cost: 10.17, rate: curE, start:nowDate,  end:nowDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 0, rate: curE, start:nowDate,  end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 7.24, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 12.14, rate: curE, start:nowDate,  end:nowDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 7.67, rate: curE, start:nowDate,  end:nowDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 3.17, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 5.23, rate: curE, start:nowDate, end:nowDate}));

         _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D18161213", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D19161215", cost: 0, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170103;
         endDate = 20170104;
         curE = 6.93400;
         _U.data.push(_U.tp({id: "D1150418", cost: 37.13, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 49.16, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 42.06, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 24.52, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 18.19, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 7.01, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 13.27, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D18161213", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D19161215", cost: 0, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170105;
         endDate = 20170106;
         curE = 6.94510;
         _U.data.push(_U.tp({id: "D1150418", cost: 28.74, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 57.28, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 47.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 13.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 12.56, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 19.71, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 33.26, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D18161213", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D19161215", cost: 0, rate: curE, start:nowDate, end:endDate}));
      }

      window["rty_pays_dataobj"] = _U;

      return _U;
   }catch(e){
     console.error(e);
   }


  })();
