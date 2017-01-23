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

      if(1){
         nowDate = 20170107;
         endDate = 20170108;
         curE = 6.91710;
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

      if(1){
         nowDate = 20170109;
         endDate = 20170110;
         curE = 6.92509;
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
         _U.data.push(_U.tp({id: "D15161031", cost: 0.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D18161213", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D19161215", cost: 0, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170111;
         endDate = 20170112;
         curE = 6.90219;
         _U.data.push(_U.tp({id: "D1150418", cost: 35.24, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 31.28, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 17.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 19.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 32.56, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 29.71, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 43.26, rate: curE, start:nowDate, end:endDate}));

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
         nowDate = 20170113;
         endDate = 20170114;
         curE = 6.89900;
         _U.data.push(_U.tp({id: "D1150418", cost: 30.31, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 31.07, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 18.82, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 33.27, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 42.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 25.83, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 6.03, rate: curE, start:nowDate, end:endDate}));

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
         nowDate = 20170115;
         endDate = 20170117;
         curE = 6.87054;
         _U.data.push(_U.tp({id: "D1150418", cost: 35.631, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 34.90, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 31.82, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 33.27, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 42.16, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 19.28, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 10.21, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D14161027", cost: 0.69, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D15161031", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D18161213", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D19161215", cost: 0, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170118;
         endDate = 20170118;
         curE = 6.84317;
         _U.data.push(_U.tp({id: "D1150418", cost: 10.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 9.1, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 5.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 23.2, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 11.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 9.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 7.3, rate: curE, start:nowDate, end:endDate}));

         _U.data.push(_U.tp({id: "D8160908", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D9161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D10161024", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D11161024", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D12161027", cost: 0, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D13161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D14161027", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D15161031", cost: 0.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D16161109", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D17161202", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D18161213", cost: 0, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D19161215", cost: 0, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170119;
         endDate = 20170119;
         curE = 6.85689;
         _U.data.push(_U.tp({id: "D1150418", cost: 16.48, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 7.1, rate: curE, start:nowDate, end:nowDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 13.7, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 11.2, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 8.6, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 6.5, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 12.1, rate: curE, start:nowDate, end:endDate}));
      }

      if(1){
         nowDate = 20170120;
         endDate = 20170121;
         curE = 6.87331;
         _U.data.push(_U.tp({id: "D1150418", cost: 17.51, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D2150425", cost: 24.37, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D3150522", cost: 19.43, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D4150728", cost: 14.15, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D5150916", cost: 9.26, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D6151112", cost: 10.84, rate: curE, start:nowDate, end:endDate}));
         _U.data.push(_U.tp({id: "D7151202", cost: 3.07, rate: curE, start:nowDate, end:endDate}));

      }


      window["rty_pays_dataobj"] = _U;

      return _U;
   }catch(e){
     console.error(e);
   }


  })();
