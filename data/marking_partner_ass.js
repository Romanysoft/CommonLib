/**
 * Created by Ian on 2016/9/16.
 */
(function () {

    /// 本单元的处理
    var _U = {};

    _U.UserTypes = ["official", "blogger"];
    _U.PayWayTypes = ["支付宝", "微信", "银行卡","PayPal"];
    _U.Payments = ["P", "A+B+C", "E+C", "E2"];
    _U.KeepSecret = ["保密", "公开"];
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
            KeepSecret: _U.KeepSecret[0], // 薪资是否保密
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
        QQ:"124588***",
        payWayType:_U.PayWayTypes[2],        
        email:"124588***@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A002",
        name:"赵铭",  
        QQ:"1798552***",
        payWayType:_U.PayWayTypes[0], 
        email:"1798552***@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A003",
        name:"高明德",  
        QQ:"2459292***",
        payWayType:_U.PayWayTypes[2], 
        email:"2459292***@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "A004",
        name:"李丽清",  
        QQ:"766016***",
        payWayType:_U.PayWayTypes[1], 
        email:"766016***@qq.com"
    }));       
    _U.data.push(_U.tp({
        id: "A005",
        name:"侯明",  
        QQ:"532620***",
        payWayType:_U.PayWayTypes[2], 
        email:"532620***@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A006",
        name:"孙建明",  
        QQ:"314901***",
        payWayType:_U.PayWayTypes[2], 
        email:"314901***@qq.com"
    }));     
    _U.data.push(_U.tp({
        id: "A007",
        name:"谷晓东",  
        QQ:"974876***",
        payWayType:_U.PayWayTypes[0], 
        email:"974876***@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "A008",
        name:"陈建义",  
        QQ:"471717***",
        payWayType:_U.PayWayTypes[1], 
        email:"471717***@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "RF201603221800PTJ",
        name:"王娜",  
        QQ:"1315134***",
        payWayType:_U.PayWayTypes[2],      
        email:"1315134***@qq.com"
    }));    
    _U.data.push(_U.tp({
        id: "A009",
        name:"王丹",  
        QQ:"1358062***",
        payWayType:_U.PayWayTypes[1], 
        email:"1358062***@qq.com"
    }));
    _U.data.push(_U.tp({
        id: "A010",
        name:"徐伟",  
        QQ:"1551975***",
        payWayType:_U.PayWayTypes[1], 
        email:"1551975***@qq.com"
    }));
    _U.data.push(_U.tp({
        id: "A011",
        name:"查群子",  
        QQ:"280018***",
        payWayType:_U.PayWayTypes[0], 
        email:"280018***@qq.com"
    }));    
    _U.data.push(_U.tp({
        id: "A012",
        name:"任海燕",  
        QQ:"84101***",
        payWayType:_U.PayWayTypes[1], 
        email:"84101***@qq.com"
    })); 
    _U.data.push(_U.tp({
        id: "A013",
        name:"胡小群",  
        QQ:"973042***",
        payWayType:_U.PayWayTypes[1], 
        email:"973042***@qq.com"
    }));      
    _U.data.push(_U.tp({
        id: "A014",
        name:"杨锦锦",  
        QQ:"270451***",
        payWayType:_U.PayWayTypes[1], 
        email:"270451***@qq.com"
    })); 
    _U.data.push(_U.tp({
        id: "A015",
        name:"张萍",  
        QQ:"953265***",
        payWayType:_U.PayWayTypes[1], 
        email:"953265***@qq.com"
    }));             

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// A + B + C 或 E + C 模式兼职人员
    /// 官方Blogger地址 lauer3912@gmail.com
    _U.data.push(_U.tp({
        id: "A016",
        name:"林东",  
        QQ:"1363196***",
        email:"1363196***@qq.com",
        isPact:true,
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[1],
        payWayAcount:"a15598123598",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"lindong0921@gmail.com",
            facebook:"",
            twitter:""    
        }
    }));

    _U.data.push(_U.tp({
        id: "A017",
        name:"李晓斌",  
        QQ:"190334***",
        email:"190334***@qq.com",
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"li190334262",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        }
    }));    


    _U.data.push(_U.tp({
        id: "A018",
        name:"朱小港",  
        QQ:"2773803***",
        email:"2773803***@qq.com",
        lastSignedDate:20160901,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        },
        referrer:"A017"
    }));     

    _U.data.push(_U.tp({
        id: "A019",
        name:"陈飞",  
        QQ:"323067***",
        email:"323067***@qq.com",
        lastSignedDate:20160905,
        payWayType:_U.PayWayTypes[1],
        payWayAcount:"",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));   

    _U.data.push(_U.tp({
        id: "A020",
        name:"赵慧敏",  
        QQ:"470856***",
        email:"470856***@qq.com",
        lastSignedDate:20160918,
        payWayType:_U.PayWayTypes[0],
        payWayAcount:"",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));   

    _U.data.push(_U.tp({
        id: "A021",
        name:"吴敏曦",  
        QQ:"626087***",
        email:"626087***@qq.com",
        lastSignedDate:20160918,
        payWayType:_U.PayWayTypes[1],
        payWayAcount:"",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));  

    _U.data.push(_U.tp({
        id: "A022",
        name:"王哲",  
        QQ:"175184***",
        email:"175184***@qq.com",
        lastSignedDate:20160918,
        payWayType:_U.PayWayTypes[1],
        payWayAcount:"",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));  

    _U.data.push(_U.tp({
        id: "A023",
        name:"韩晓光",  
        QQ:"30369***",
        email:"30369***@qq.com",
        lastSignedDate:20161008,
        payWayType:_U.PayWayTypes[1],
        payWayAcount:"",
        payment:_U.Payments[2], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"hanxiaoguang1020@gmail.com",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));   

    _U.data.push(_U.tp({
        id: "A024",
        name:"Idrees Waqar Safi",  
        QQ:"",
        email:"muhammadidrees1922@gmail.com",
        lastSignedDate:20161016,
        payWayType:_U.PayWayTypes[3],
        payWayAcount:"fazalrahim1420@gmail.com",
        payment:_U.Payments[3], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"muhammadidrees1922@gmail.com",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));     

    _U.data.push(_U.tp({
        id: "A025",
        name:"Margaret Smith",  
        QQ:"",
        email:"Marsmith328@gmail.com",
        lastSignedDate:20161017,
        payWayType:_U.PayWayTypes[3],
        payWayAcount:"Marsmith328@gmail.com",
        payment:_U.Payments[3], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"Marsmith328@gmail.com",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));  

    _U.data.push(_U.tp({
        id: "A026",
        name:"gary.requiz",  //https://www.facebook.com/gary.requiz
        QQ:"",
        email:"gargen0701@gmail.com",
        lastSignedDate:20161017,
        payWayType:_U.PayWayTypes[3],
        payWayAcount:"gargen0701@gmail.com",
        payment:_U.Payments[3], 
        KeepSecret: _U.KeepSecret[1], // 薪资是否保密
        assOtherAcounts:{             
            gmail:"gargen0701@gmail.com",
            facebook:"",
            twitter:""    
        },
        referrer:""
    }));         

    return _U;
})();