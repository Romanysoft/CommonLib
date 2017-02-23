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
         _U.data.push(_U.tp({id: "D2150425", cost: 57.28, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 47.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 13.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 12.56, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 19.71, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 33.26, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D14161027", cost: 0.66, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170204;
         endDate = 20170206;
         curE = 6.85354;
         _U.data.push(_U.tp({id: "D1150418", cost: 48.07, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 22.3, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 21, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 10.12, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 10.12, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 8.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 6.61, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D8160908", cost: 2.1, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170207;
         endDate = 20170207;
         curE = 6.87715;
         _U.data.push(_U.tp({id: "D1150418", cost: 16.13, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 15.61, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 12.12, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 8.92, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 18.31, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 0, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D14161027", cost: 0.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D15161031", cost: 0.7, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170208;
         endDate = 20170208;
         curE = 6.86738;
         _U.data.push(_U.tp({id: "D1150418", cost: 18.74, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 7.28, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 7.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 13.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 12.56, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 19.71, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 13.26, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D15161031", cost: 0.72, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170209;
         endDate = 20170209;
         curE = 6.86738;
         _U.data.push(_U.tp({id: "D1150418", cost: 18.74, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 17.28, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 7.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 13.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 12.56, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 9.71, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 3.26, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D14161027", cost: 0.7, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170210;
         endDate = 20170213;
         curE = 6.88360;
         _U.data.push(_U.tp({id: "D1150418", cost: 21.3, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 22.9, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 19.4, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 19.8, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 31.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 11.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 23.6, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D15161031", cost: 0.7, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170214;
         endDate = 20170214;
         curE = 6.87057;
         _U.data.push(_U.tp({id: "D1150418", cost: 17.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 16.8, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 21.3, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 19.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 47.4, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 19.3, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 1.23, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D14161027", cost: 0.62, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170215;
         endDate = 20170215;
         curE = 6.86866;
         _U.data.push(_U.tp({id: "D1150418", cost: 13.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 8.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 15.3, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 29.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 32.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 17.8, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 5.27, rate: curE, start:nowDate, end:endDate}));

      }

      if(1){
         nowDate = 20170216;
         endDate = 20170216;
         curE = 6.85853;
         _U.data.push(_U.tp({id: "D1150418", cost: 18.51, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 10.93, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 9.71, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 12.88, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 19.67, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 13.03, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 8.47, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D15161031", cost: 0.7, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170217;
         endDate = 20170219;
         curE = 6.86390;
         _U.data.push(_U.tp({id: "D1150418", cost: 54.3, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 34.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 23.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 41.9, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 64.87, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 39.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 27.6, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170220;
         endDate = 20170220;
         curE = 6.87219;
         _U.data.push(_U.tp({id: "D1150418", cost: 12.65, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 11.2, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 10.12, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 9.95, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 13.74, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 9.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 3.7, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170221;
         endDate = 20170221;
         curE = 6.87887;
         _U.data.push(_U.tp({id: "D1150418", cost: 22.85, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 14.57, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 11.2, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 3.13, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 12.96, rate: curE, start:nowDate, end:endDate}));

      }



      window["rty_pays_dataobj"] = _U;

      return _U;
   }catch(e){
     console.error(e);
   }


  })();
