/**
 * Created by Ian on 2016/9/16.
 */
(function () {
    window['RSData'] = window['RSData'] || {};
    window.RSData.d$ = window.RSData.d$ || {};
})();

(function () {
    var d$ = {};
    d$ = $.extend(window.RSData.d$, {});

    /// 本单元的处理
    var _U = {};

    _U.UserTypes = ["official", "blogger"];
    _U.PayWayTypes = ["微信", "支付宝", "银行卡"];
    _U.data = [];

    _U.tp = function(data){
        var o = {
            type:_U.UserTypes[0],         // 用户类型
            id: "id",                     // 用户ID 
            name:"name",                  // 姓名 
            qq:"qq",                      // QQ 
            email:"email",                // 电子邮件
            onJob:true,                   // 是否在职 
            isPact:true,                  // 是否签订合同 
            pactDeadline:1,               // 合同有效期 默认为1年
            lastSignedDate:20160901,      // 最近一次签订合同的时间
            payWayType:_U.PayWayTypes[0], // 支付方式
            payWayAcount:"",              // 支付账户
            assOtherAcounts:{             // 关联的其他账号信息  
                gmail:"",
                facebook:"",
                twitter:""    
            },
            referrer:""                   // 推荐人，上线人员
        };

        return $.extend(o, data);
    };

    /// 官方Blogger地址 lauer3912@gmail.com
    _U.data.push(_U.tp({
        id: "A016",
        name:"林东",  
        QQ:"1363196218",
        email:"1363196218@qq.com",
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"a15598123598",
        assOtherAcounts:{             
            gmail:"lindong0921@gmail.com",
            facebook:"",
            twitter:""    
        }
    }));

    _U.data.push(_U.tp({
        id: "A017",
        name:"李晓斌",  
        QQ:"190334262",
        email:"190334262@qq.com",
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"li190334262",
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        }
    }));    






    d$["marking_partner_ass"] = _U;
    window.RSData.d$ = $.extend(window.RSData.d$, d$);
})();