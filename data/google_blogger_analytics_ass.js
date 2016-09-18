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

    _U.types = ["official", "blogger"]
    _U.data = [];

    /// 官方Blogger地址 lauer3912@gmail.com
    _U.data.push({
        type:_U.types[0], 
        name:"OS World",  
        url:"https://rtyutilitysoftwares.blogspot.com/", 
        traceid:"", 
        partnerID:"rs"
    });
    _U.data.push({
        type:_U.types[0], 
        name:"Romanysoft Blog", 
        url:"https://romanysoft.blogspot.com/", 
        traceid:"", 
        partnerID:"rs"
    });

    /// Blogger集群  blogger.01.romanysoft@gmail.com
    var assObj = {};
    assObj = {
        ass:"blogger.01.romanysoft@blogger.com",
        assDir:"1-50.Bloggers",
    };
    _U.data.push({
        type:_U.types[1], 
        name:"OS World",  
        url:"https://oschin-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail1@blogger.com",
        traceid:"UA-82372746-1", 
        ass:assObj,
        partnerID:"A016" // 林东
    });
    _U.data.push({
        type:_U.types[1], 
        name:"Soft World",  
        url:"https://soft-beta.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail3@blogger.com",
        traceid:"UA-82372746-2", 
        ass:assObj,
        partnerID:"rs"  // 王娜
    });
    _U.data.push({
        type:_U.types[1], 
        name:"Utility Softwares",  
        url:"https://wamus-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail2@blogger.com",
        traceid:"UA-82372746-3", 
        ass:assObj,
        partnerID:""
    });





    d$["google_blogger_ass"] = _U;
    window.RSData.d$ = $.extend(window.RSData.d$, d$);
})();