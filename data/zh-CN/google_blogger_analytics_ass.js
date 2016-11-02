/**
 * Created by Ian on 2016/9/16.
 */

(function () {

    /// 本单元的处理
    var _U = {};

    _U.types = ["official", "blogger"]  // 博客的类型
    _U.data = [];

    /// 官方Blogger地址 lauer3912@gmail.com
    // _U.data.push({
    //     type:_U.types[0],
    //     name:"OS World",
    //     url:"https://rtyutilitysoftwares.blogspot.com/",
    //     traceid:"",
    //     partnerID:"rs"
    // });
    // _U.data.push({
    //     type:_U.types[0],
    //     name:"Romanysoft Blog",
    //     url:"https://romanysoft.blogspot.com/",
    //     traceid:"",
    //     partnerID:"rs"
    // });

    /// Blogger集群  blogger.01.romanysoft@gmail.com
    var assObj = {};
    assObj = {
        ass:"blogger.01.romanysoft@blogger.com",
        assDir:"01-50.Bloggers",
    };

    _U.data.push({
        type:_U.types[1],
        id:"0009",
        url:"national-romanysoft.tumblr.com",
        traceid:"UA-82372746-9",
        ass:assObj,
        partnerID:"A023",   //韩晓光
        gmail:"hanxiaoguang1020@gmail.com",         // gmail邮箱
        oldPartners:[]    // 此博客以前的合作者
    });


    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////

	window["rty_resources_dataobj"] = _U;
    return _U;

})();
