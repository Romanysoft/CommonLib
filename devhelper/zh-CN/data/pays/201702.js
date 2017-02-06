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
         nowDate = 20170201;
         endDate = 20170201;
         curE = 6.88152;
         _U.data.push(_U.tp({id: "D1150418", cost: 9.4, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 12.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 3.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 15.8, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 10.4, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 3.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 11.8, rate: curE, start:nowDate, end:endDate}));

      }

      if(1){
         nowDate = 20170202;
         endDate = 20170203;
         curE = 6.87228;
         _U.data.push(_U.tp({id: "D1150418", cost: 28.74, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 57.28, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 47.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 13.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 12.56, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 19.71, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 33.26, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D14161027", cost: 0.66, rate: curE, start:nowDate, end:endDate}));
      }


      window["rty_pays_dataobj"] = _U;

      return _U;
   }catch(e){
     console.error(e);
   }


  })();
