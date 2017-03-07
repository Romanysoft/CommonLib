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
         nowDate = 20170301;
         endDate = 20170301;
         curE = 6.87758;
         _U.data.push(_U.tp({id: "D1150418", cost: 13.83, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 5.98, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 4.2, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 3.48, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 3.0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 4.1, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 3.3, rate: curE, start:nowDate, end:endDate}));

      }

      if(1){
         nowDate = 20170302;
         endDate = 20170304;
         curE = 6.89439;
         _U.data.push(_U.tp({id: "D1150418", cost: 36.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 21.98, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 19.74, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 27.68, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 19.4, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 21.51, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 19.6, rate: curE, start:nowDate, end:endDate}));

      }

      if(1){
         nowDate = 20170305;
         endDate = 20170305;
         curE = 6.88387;
         _U.data.push(_U.tp({id: "D1150418", cost: 12.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 11.28, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 9.34, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 7.38, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 9.54, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 4.41, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 3.72, rate: curE, start:nowDate, end:endDate}));

      }


      window["rty_pays_dataobj"] = _U;

      return _U;
   }catch(e){
     console.error(e);
   }


  })();
