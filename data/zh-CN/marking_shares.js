(function () {

    /// 本单元的处理
    var _U = {};

    _U.category = ["电脑软件", "手机软件", "网址", "视频"];
    _U.data = [];

    _U.tp = function(data){
        var o = {
            name: "",                      // 资源的名称 
            category: 0,                   // 资源的类别
            url:"",                        // 资源的下载地址
            comment:"",                    // 备注
        };

        return $.extend(o, data);
    };

    /// 网址
    if(0){
        _U.data.push(_U.tp({
            name: "E+C模式介绍",
            category: _U.category[2],
            url:"https://romanysoft.github.io/CommonLib/market-partners-ec",
            comment:"我们的国内主要合作模式，E+C模式介绍"
        }));
    }

    /// 软件  
    _U.data.push(_U.tp({
        name: "XX-Net 桌面版本",
        category: _U.category[0],
        url:"https://codeload.github.com/XX-net/XX-Net/zip/3.2.6",
        comment:"微软操作系统Windows 版本(要求XP SP3以上) 电脑上使用, 流量免费"
    }));  


    /// 视频教程
    _U.data.push(_U.tp({
        name: "安卓手机FaceBook上推广方法.mp4",
        category: _U.category[3],
        url:"https://github.com/Romanysoft/AppShareFile/raw/master/romanysoft_offices/marking/videos/安卓手机FaceBook上推广产品方法_720x480.mp4",
        comment:"安卓手机FaceBook上推广教程，包含步骤"
    }));                      
    _U.data.push(_U.tp({
        name: "安卓手机Twitter上推广产品方法.mp4",
        category: _U.category[3],
        url:"https://github.com/Romanysoft/AppShareFile/raw/master/romanysoft_offices/marking/videos/安卓手机Twitter上推广产品方法_720x480.mp4",
        comment:"安卓手机Twitter上推广教程，包含步骤"
    })); 
    _U.data.push(_U.tp({
        name: "苹果手机FaceBook上推广产品方法.mp4",
        category: _U.category[3],
        url:"https://github.com/Romanysoft/AppShareFile/raw/master/romanysoft_offices/marking/videos/苹果手机FaceBook上推广产品方法_720x480.mp4",
        comment:"苹果手机FaceBook上推广教程，包含步骤"
    })); 
    _U.data.push(_U.tp({
        name: "苹果手机Twitter上推广产品方法.mp4",
        category: _U.category[3],
        url:"https://github.com/Romanysoft/AppShareFile/raw/master/romanysoft_offices/marking/videos/苹果手机Twitter上推广产品方法_720x480.mp4",
        comment:"苹果手机Twitter上推广教程，包含步骤"
    }));             

	window["rty_share_dataobj"] = _U;  
    return _U;
})();