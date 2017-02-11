/**
 * Created by Ian on 2016/9/16.
 */
(function () {

    /// 本单元的处理
    var _U = {};

    _U.PayWayTypes = ["支付宝", "微信", "银行卡","PayPal"];
    _U.isAdmin = ["", "是"];
    _U.data = [];

    _U.tp = function(data){
        var o = {
            id: "id",                     // 用户ID
            name:"name",                  // 姓名
            qq:"qq",                      // QQ
            email:"email",                // 电子邮件
            hometown:"",                  // 哪里人？
            onJob:true,                   // 是否在职
            speciality:"",                // 特长
            payWayType:_U.PayWayTypes[0], // 支付方式
            payWayAcount:"",              // 支付账户
            assOtherAcounts:{             // 关联的其他账号信息
                gmail:"",
                facebook:"",
                twitter:""
            },
            qqGroups:[],                   // 所属QQ群列表
            MgrQQs:[],                     // 主管QQ群
            mgrQQId:"",                    // QQ站长ID
            referrer:""                    // 推荐人，上线人员
        };

        return $.extend(o, data);
    };



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var No = 0;

    if(1){
      _U.data.push(_U.tp({
          id: "D" + ++No + "150418" ,
          name:"张鹏",
          QQ: "1289435xxx",
          email:"1289435xxx*@qq.com",
          payWayType:_U.PayWayTypes[0],
          payWayAcount:"",
          speciality:"前端Javascript, html, css 及C语言"
      }));

      _U.data.push(_U.tp({
          id: "D" + ++No + "150425" ,
          name:"李晨",
          QQ: "98546898xxx",
          email:"98546898xxx*@qq.com",
          payWayType:_U.PayWayTypes[0],
          payWayAcount:"",
          referrer:"D1150418",
          speciality:"前端Javascript, html, css"
      }));

      _U.data.push(_U.tp({
          id: "D" + ++No + "150522" ,
          name:"韩明",
          QQ: "12789135xxx",
          email:"12789135xxx*@qq.com",
          payWayType:_U.PayWayTypes[0],
          payWayAcount:"",
          referrer:"D1150418",
          speciality:"前端Javascript, html, css"
      }));

      _U.data.push(_U.tp({
          id: "D" + ++No + "150728" ,
          name:"李海东",
          QQ: "3185642xxx",
          email:"3185642xxx*@qq.com",
          payWayType:_U.PayWayTypes[0],
          payWayAcount:"",
          referrer:"D1150418",
          speciality:"前端Javascript, html, css"
      }));

      _U.data.push(_U.tp({
          id: "D" + ++No + "150916" ,
          name:"陈宇航",
          QQ: "4754798xxx",
          email:"4754798xxx*@qq.com",
          payWayType:_U.PayWayTypes[0],
          payWayAcount:"",
          speciality:"Java, Javascript, html, css"
      }));

      _U.data.push(_U.tp({
          id: "D" + ++No + "151112" ,
          name:"马德明",
          QQ: "5855642xxx",
          email:"5855642xxx*@qq.com",
          payWayType:_U.PayWayTypes[0],
          payWayAcount:"",
          referrer:"D1150418",
          speciality:"Java, Javascript, html, css"
      }));

      _U.data.push(_U.tp({
          id: "D" + ++No + "151202" ,
          name:"王志鹏",
          QQ: "5473623xxx",
          email:"5473623xxx*@qq.com",
          payWayType:_U.PayWayTypes[0],
          payWayAcount:"",
          speciality:"C++、C、Javascript, html, css"
      }));
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    _U.data.push(_U.tp({
        id: "D" + 8 + "160908" ,
        name:"王恒",
        QQ: kendo.toString(359126613/100, "####xxx"),
        hometown: "北京",
        email:"359126613*@qq.com",
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"15801493503",
        qqGroups:["LabsRS-Dev①"],        // 所属QQ群
        MgrQQs:["LabsRS-Dev①"],        // 管理QQ群站长
        speciality:"前端Javascript, html, css 及Java语言"
    }));


    if(1){
        _U.data.push(_U.tp({
            id: "D" + 9 + "161024" ,
            name:"刘磊",
            QQ: kendo.toString(490908595/100, "####xxx"),
            email:"liuxiaoer@live.cn",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"liuxiaoer@live.cn",
            referrer:"D8160908",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"Javascript, Java"
        }));

        _U.data.push(_U.tp({
            id: "D" + 10 + "161024" ,
            name:"曹亚男",
            QQ: kendo.toString(971882727/100, "####xxx"),
            email:"cyn_rich@163.com",// cyn_rich@163.com
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"cyn.cto@gmail.com",
            referrer:"D8160908",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"前端Html Javascript Css 及Java Python "
        }));

        if(1){
          _U.data.push(_U.tp({
              id: "D" + 11 + "161024" ,
              name:"柳梦阳 ",
              QQ: kendo.toString(1481632629/100, "####xxx"),
              email:"1481632629@qq.com",
              onJob: false,         // 解除
              payWayType:_U.PayWayTypes[0],
              payWayAcount:"13520805212",
              referrer:"D9161024",
              qqGroups:["LabsRS-Dev①"],        // 所属QQ群
              mgrQQId:"D8160908",
              speciality:"前端Html Javascript Css"
          }));
        }

        _U.data.push(_U.tp({
            id: "D" + 12 + "161027" ,
            name:"王洋", // 河北人
            QQ: kendo.toString(524200821/100, "####xxx"),
            email:"524200821@qq.com",
            hometown:"河北",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"18210498916",
            referrer:"D9161024",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"前端Html Javascript Css 及Java"
        }));

        _U.data.push(_U.tp({
            id: "D" + 13 + "161027" ,
            name:"赵红云", // 河北石家庄人
            QQ: kendo.toString(1262347593/100, "####xxx"),
            email:"1262347593@qq.com",
            hometown:"河北石家庄",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"1262347593@qq.com",
            referrer:"D9161024",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"前端Html Javascript Css"
        }));

        _U.data.push(_U.tp({
            id: "D" + 14 + "161027" ,
            name:"魏鑫鑫", // 安徽人
            QQ: kendo.toString(1286951868/100, "####xxx"),
            email:"1286951868@qq.com",
            hometown:"安徽",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"18500404550",
            referrer:"D9161024",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"前端Html Javascript Css"
        }));

        _U.data.push(_U.tp({
            id: "D" + 15 + "161031" ,
            name:"陆明", // 江苏盐城
            QQ: kendo.toString(505846360/100, "####xxx"),
            email:"505846360@qq.com",
            hometown:"江苏盐城",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"18618114524",
            referrer:"D8160908",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"前端Html Javascript Css"
        }));
    }


    if(1){
        _U.data.push(_U.tp({
            id: "D" + 16 + "161109" ,
            name:"袁成", // 江苏
            QQ: kendo.toString(434778770/100, "####xxx"),
            email:"yuancheng052@126.com",
            hometown:"江苏",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"15101668430",
            referrer:"D8160908",
            qqGroups:["LabsRS-Dev①","LabsRS-Dev③"],        // 所属QQ群
            mgrQQId:"D8160908",
            MgrQQs:["LabsRS-Dev③"],        // 管理QQ群站长
            speciality:"Javascript, html, css 及Java语言"
        }));
    }

    if(1){
        _U.data.push(_U.tp({
            id: "D" + 17 + "161202" ,
            name:"谢云鹏", // 广东深圳
            QQ: kendo.toString(214066150/100, "####xxx"),
            email:"megadron@qq.com",
            hometown:"广东深圳",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"megadron@qq.com",
            referrer:"",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"C#、HTML、Javascript"
        }));
    }

    if(1){
        _U.data.push(_U.tp({
            id: "D" + 18 + "161213" ,
            name:"王丁", // 河北，目前在北京，是王恒的同事
            QQ: kendo.toString(121824390/100, "####xxx"),
            email:"isswhy@126.com",
            hometown:"河北",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"wangding3579@126.com",
            referrer:"D8160908",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"Javascript node python java"
        }));
    }

    if(1){
        _U.data.push(_U.tp({
            id: "D" + 19 + "161215" ,
            name:"马泽龙", // 中国 浙江 杭州 上城区
            QQ: kendo.toString(30819873/100, "####xxx"),
            email:"30819873@qq.com",
            hometown:"浙江杭州",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"30819873@qq.com",
            referrer:"",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群长
            mgrQQId:"D8160908",
            speciality:"H5 Java"
        }));
    }

    if(1){
        _U.data.push(_U.tp({
            id: "D" + 20 + "161228" ,
            name:"牛延军", // 中国 河南 平顶山
            QQ: kendo.toString(429372385/100, "####xxx"),
            email:"429372385@qq.com",
            hometown:"河南平顶山",
            payWayType:_U.PayWayTypes[0],
            payWayAcount:"15801604626 或者 niu.yan.jun@hotmail.com", //
            referrer:"D8160908",
            qqGroups:["LabsRS-Dev①"],        // 所属QQ群
            mgrQQId:"D8160908",
            speciality:"H5 技术能人 java flex js "
        }));
    }

	window["rty_partners_dataobj"] = _U;

    return _U;
})();
