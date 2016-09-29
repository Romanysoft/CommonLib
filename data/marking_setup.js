(function () {

    /// 本单元的处理
    var _U = {};

    _U.category = ["电脑软件", "手机软件", "网址", "视频"];
    _U.data = [];

    _U.tp = function(data){
        var o = {
            order: 0,                      // 步骤编号 
            content: "",                   // 步骤内容
            urls: [],                      // 资源的下载地址
            comment:"",                    // 备注
        };

        return $.extend(o, data);
    };

    var index = 0;
    _U.data.push(_U.tp({
        order: ++index,
        content: "提供收款方式（支付宝、微信、银行卡）。建议使用支付宝。"
    }));

    _U.data.push(_U.tp({
        order: ++index,
        content: "安装VPN工具（俗称翻墙工具）。电脑上安装，请与我们联系。\n" + 
                 "1)针对苹果手机：应用商店中，搜索\"Green VPN\" \n" +
                 "2)针对安卓手机：登录QQ，公司官方QQ共享应用, 方便你安装VPN工具 \n" 
    }));

    _U.data.push(_U.tp({
        order: ++index,
        content: "手机上FaceBook 客户端。\n" + 
                 "1)针对苹果手机：应用商店中，搜索\"FaceBook\" \n" +
                 "2)针对安卓手机：登录QQ，公司官方QQ共享应用, 方便你安装FaceBook \n" 
    }));

    _U.data.push(_U.tp({
        order: ++index,
        content: "运行VPN工具。"
    }));  

    _U.data.push(_U.tp({
        order: ++index,
        content: "注册Google（谷歌）邮箱。"
    })); 

    _U.data.push(_U.tp({
        order: ++index,
        content: "注册FaceBook（脸谱）账号。"
    }));  

    _U.data.push(_U.tp({
        order: ++index,
        content: "学会教学视频：根据自己的手机类型，自己选择 \n" + 
                 "1)苹果手机FaceBook上推广产品方法 \n" +
                 "2)安卓手机FaceBook上推广产品方法 \n"
    }));   

    _U.data.push(_U.tp({
        order: ++index,
        content: "公司分配合作者编号（工号）给你。"
    }));  

    _U.data.push(_U.tp({
        order: ++index,
        content: "公司分配给你一个博客网址。"
    })); 

    _U.data.push(_U.tp({
        order: ++index,
        content: "实践：学会获取博客网站中文章的链接地址（手机端或者电脑上）"
    }));  

    _U.data.push(_U.tp({
        order: ++index,
        content: "实践：学会分享文章链接到FaceBook小组"
    })); 

    _U.data.push(_U.tp({
        order: ++index,
        content: "公司开放后台权限给你，可以查询有多少人浏览你分享的链接"
    }));         

                      

    return _U;
})();