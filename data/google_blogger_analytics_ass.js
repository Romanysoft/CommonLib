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

    _U.types = ["official", "blogger"]  // 博客的类型
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
        assDir:"01-50.Bloggers",
    };
    _U.data.push({
        type:_U.types[1], 
        name:"OS World",  
        url:"https://oschin-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail1@blogger.com",
        traceid:"UA-82372746-1", 
        ass:assObj,
        partnerID:"A016", // 林东
        oldPartners:[]    // 此博客以前的合作者  
    });
    _U.data.push({
        type:_U.types[1], 
        name:"Utility Softwares",  
        url:"https://wamus-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail2@blogger.com",
        traceid:"UA-82372746-3", 
        ass:assObj,
        partnerID:"A017", // 李晓斌
        oldPartners:[]    // 此博客以前的合作者  
    });    
    _U.data.push({
        type:_U.types[1], 
        name:"Soft World",  
        url:"https://soft-beta.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail3@blogger.com",
        traceid:"UA-82372746-2", 
        ass:assObj,
        partnerID:"M.RF",  // 王娜
        oldPartners:[]   // 此博客以前的合作者
    });
    _U.data.push({
        type:_U.types[1], 
        name:"Discovery",  
        url:"https://discovery-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail4@blogger.com",
        traceid:"UA-82372746-4", 
        ass:assObj,
        partnerID:"A018", // 朱小港
        oldPartners:[]    // 此博客以前的合作者
    });    

    ////Time and Date
    ////https://timeanddate-romanysoft.blogspot.com/
    _U.data.push({
        type:_U.types[1], 
        name:"Time and Date",  
        url:"https://timeanddate-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail5@blogger.com",
        traceid:"UA-82372746-5", 
        ass:assObj,
        partnerID:"",   // 
        oldPartners:[]    // 此博客以前的合作者
    }); 


    ////Entrez
    ////https://entrez-romanysoft.blogspot.com/
    _U.data.push({
        type:_U.types[1], 
        name:"Entrez",  
        url:"https://entrez-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail6@blogger.com",
        traceid:"UA-82372746-6", 
        ass:assObj,
        partnerID:"",   // 
        oldPartners:[]    // 此博客以前的合作者
    });    


    ////INRIA
    ////https://inria-romanysoft.blogspot.com/
    _U.data.push({
        type:_U.types[1], 
        name:"INRIA",  
        url:"https://inria-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail7@blogger.com",
        traceid:"UA-82372746-7", 
        ass:assObj,
        partnerID:"",   // 
        oldPartners:[]    // 此博客以前的合作者
    });  

    ////SafariM
    ////https://SafariM-romanysoft.blogspot.com/
    _U.data.push({
        type:_U.types[1], 
        name:"SafariM",  
        url:"https://SafariM-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail8@blogger.com",
        traceid:"UA-82372746-8", 
        ass:assObj,
        partnerID:"",   // 
        oldPartners:[]    // 此博客以前的合作者
    }); 

    ////National
    ////https://National-romanysoft.blogspot.com/
    _U.data.push({
        type:_U.types[1], 
        name:"National",  
        url:"https://National-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail9@blogger.com",
        traceid:"UA-82372746-9", 
        ass:assObj,
        partnerID:"",   // 
        oldPartners:[]    // 此博客以前的合作者
    }); 


    ////Stanford
    ////https://Stanford-romanysoft.blogspot.com/

    _U.data.push({
        type:_U.types[1], 
        name:"Stanford",  
        url:"https://Stanford-romanysoft.blogspot.com/", 
        mail:"blogger.01.romanysoft.mail10@blogger.com",
        traceid:"UA-82372746-10", 
        ass:assObj,
        partnerID:"",   // 
        oldPartners:[]    // 此博客以前的合作者
    });     



    d$["google_blogger_ass"] = _U;
    window.RSData.d$ = $.extend(window.RSData.d$, d$);
})();