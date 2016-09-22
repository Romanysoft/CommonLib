/**
 * Created by Ian on 2016/9/16.
 */
(function () {

    /// 本单元的处理
    var _U = {};

    _U.UserTypes = ["official", "blogger"];
    _U.PayWayTypes = ["微信", "支付宝", "银行卡"];
    _U.Payments = ["P(前期合作)", "A+B+C模式", "E+C模式"];
    _U.data = [];

    _U.tp = function(data){
        var o = {
            type:_U.UserTypes[0],         // 用户类型
            id: "id",                     // 用户ID 
            name:"name",                  // 姓名 
            qq:"qq",                      // QQ 
            email:"email",                // 电子邮件
            onJob:true,                   // 是否在职 
            isPact:false,                 // 是否签订合同 
            pactDeadline:1,               // 合同有效期 默认为1年
            lastSignedDate:0,             // 最近一次签订合同的时间
            payment:_U.Payments[0],       // 合同约定结算方式
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

    /// 官方9月前，申请加入我们的兼职人员。这里只做简单记录，工资详细另结算。不在此系统中计算显示
    _U.data.push(_U.tp({
        id: "A001",
        name:"李明哲",  
        QQ:"1245880**",
        email:"1245880**@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A002",
        name:"赵铭",  
        QQ:"17985528**",
        email:"17985528**@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A003",
        name:"高明德",  
        QQ:"24592926**",
        email:"24592926**@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "A004",
        name:"李丽清",  
        QQ:"7660168**",
        email:"7660168**@qq.com"
    }));       
    _U.data.push(_U.tp({
        id: "A005",
        name:"侯明",  
        QQ:"5326202**",
        email:"5326202**@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A006",
        name:"孙建明",  
        QQ:"3149014**",
        email:"3149014**@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A007",
        name:"谷晓东",  
        QQ:"9748767**",
        email:"9748767**@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "A008",
        name:"陈建义",  
        QQ:"4717179**",
        email:"4717179**@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "A008",
        name:"李丽",  
        QQ:"5747875**",
        email:"5747875**@qq.com"
    }));    
    _U.data.push(_U.tp({
        id: "A009",
        name:"王丹",  
        QQ:"13580623**",
        email:"13580623**@qq.com"
    }));
    _U.data.push(_U.tp({
        id: "A010",
        name:"徐伟",  
        QQ:"15519755**",
        email:"15519755**@qq.com"
    }));
    _U.data.push(_U.tp({
        id: "A011",
        name:"查群子",  
        QQ:"2800186**",
        email:"2800186**@qq.com"
    }));    
    _U.data.push(_U.tp({
        id: "A012",
        name:"任海燕",  
        QQ:"841015**",
        email:"841015**@qq.com"
    })); 
    _U.data.push(_U.tp({
        id: "A013",
        name:"胡小群",  
        QQ:"9730421**",
        email:"9730421**@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "A014",
        name:"杨锦锦",  
        QQ:"2704513**",
        email:"2704513**@qq.com"
    })); 
    _U.data.push(_U.tp({
        id: "A015",
        name:"张萍",  
        QQ:"9532658**",
        email:"9532658**@qq.com"
    }));             

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// A + B + C 或 E + C 模式兼职人员
    /// 官方Blogger地址 lauer3912@gmail.com
    _U.data.push(_U.tp({
        id: "A016",
        name:"林东",  
        QQ:"13631962**",
        email:"13631962**@qq.com",
        isPact:true,
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"a15598123598",
        payment:_U.Payments[2], 
        assOtherAcounts:{             
            gmail:"lindong0921@gmail.com",
            facebook:"",
            twitter:""    
        }
    }));

    _U.data.push(_U.tp({
        id: "A017",
        name:"李晓斌",  
        QQ:"1903342**",
        email:"1903342**@qq.com",
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"li190334262",
        payment:_U.Payments[2], 
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        }
    }));    


    _U.data.push(_U.tp({
        id: "A018",
        name:"朱小港",  
        QQ:"27738035**",
        email:"27738035**@qq.com",
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"",
        payment:_U.Payments[2], 
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        },
        referrer:"A017"
    }));     

    return _U;
})();