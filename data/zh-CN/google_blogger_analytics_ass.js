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
    // _U.data.push({
    //     type:_U.types[1], 
    //     id:"0001",  
    //     url:"oschintweak.tumblr.com", 
    //     traceid:"UA-82372746-1", 
    //     ass:assObj,
    //     partnerID:"",  
    //     gmail:"",         
    //     oldPartners:[]   
    // });    
    _U.data.push({
        type:_U.types[1], 
        id:"0002",   
        url:"softfreetry.tumblr.com", 
        traceid:"UA-82372746-2", 
        ass:assObj,
        partnerID:"A016", 
        gmail:"",          
        oldPartners:[]    
    });
    _U.data.push({
        type:_U.types[1], 
        id:"0003",  
        url:"bigbigdatasoft.tumblr.com", 
        traceid:"UA-82372746-3", 
        ass:assObj,
        partnerID:"", 
        gmail:"",         
        oldPartners:["A017"]      
    });    

    _U.data.push({
        type:_U.types[1], 
        id:"0004",  
        url:"whatsapptips.tumblr.com", 
        traceid:"UA-82372746-4", 
        ass:assObj,
        partnerID:"", // 
        gmail:"",         // gmail邮箱 
        oldPartners:["A018"]    // 此博客以前的合作者
    });    

    _U.data.push({
        type:_U.types[1], 
        id:"0005",  
        url:"provenuclear.tumblr.com", 
        traceid:"UA-82372746-5", 
        ass:assObj,
        partnerID:"A019",   // 
        gmail:"",         // gmail邮箱 
        oldPartners:[""]    // 此博客以前的合作者
    }); 

    _U.data.push({
        type:_U.types[1], 
        id:"0006",  
        url:"top10Tips.tumblr.com", 
        traceid:"UA-82372746-6", 
        ass:assObj,
        partnerID:"A020",   // 
        gmail:"",         // gmail邮箱 
        oldPartners:[]    // 此博客以前的合作者
    });    

    _U.data.push({
        type:_U.types[1], 
        id:"0007",  
        url:"infograhictweak.tumblr.com", 
        traceid:"UA-82372746-7", 
        ass:assObj,
        partnerID:"A021",   // 
        gmail:"",         // gmail邮箱 
        oldPartners:[]    // 此博客以前的合作者
    });  

    _U.data.push({
        type:_U.types[1], 
        id:"0008",  
        url:"safarimsoft.tumblr.com", 
        traceid:"UA-82372746-8", 
        ass:assObj,
        partnerID:"A022",   // 
        gmail:"",         // gmail邮箱 
        oldPartners:[]    // 此博客以前的合作者
    }); 

    _U.data.push({
        type:_U.types[1], 
        id:"0009",  
        url:"national-romanysoft.tumblr.com", 
        traceid:"UA-82372746-9", 
        ass:assObj,
        partnerID:"A023",   // 
        gmail:"hanxiaoguang1020@gmail.com",         // gmail邮箱 
        oldPartners:[]    // 此博客以前的合作者
    }); 

    _U.data.push({
        type:_U.types[1], 
        id:"0010",  
        url:"stanfordtweak.tumblr.com", 
        traceid:"UA-82372746-10", 
        ass:assObj,
        partnerID:"A024",   // 
        gmail:"",         // gmail邮箱  
        oldPartners:[]    // 此博客以前的合作者
    }); 

    _U.data.push({
        type:_U.types[1], 
        id:"0011",  
        url:"happybouquetdragonfan.tumblr.com", 
        traceid:"UA-82372746-11", 
        ass:assObj,
        partnerID:"", // A026 
        gmail:"",         // gmail邮箱  
        oldPartners:[]    // 此博客以前的合作者
    });      

    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    _U.data.push({
        type:_U.types[1], 
        id:"0012",  
        title:"Builder Watch",
        url:"builderwatch-romanysoft.tumblr.com", 
        traceid:"UA-82372746-12", 
        ass:assObj,
        partnerID:"",  
        gmail:"",         
        oldPartners:[]
    });  

    _U.data.push({
        type:_U.types[1], 
        id:"0013",  
        title:"BlueSeeNews",
        url:"blueseenews-romanysoft.tumblr.com", 
        traceid:"UA-82372746-13", 
        ass:assObj,
        partnerID:"",  
        gmail:"",         
        oldPartners:[]
    });    

    _U.data.push({
        type:_U.types[1], 
        id:"0014",  
        title:"10 Ways",
        url:"ways10-romanysoft.tumblr.com", 
        traceid:"UA-82372746-14", 
        ass:assObj,
        partnerID:"",  
        gmail:"",         
        oldPartners:[]
    }); 

    _U.data.push({
        type:_U.types[1], 
        id:"0015",  
        title:"LiteCosts",
        url:"litecosts-romanysoft.tumblr.com", 
        traceid:"UA-82372746-15", 
        ass:assObj,
        partnerID:"",  
        gmail:"",         
        oldPartners:[]
    });    

    _U.data.push({
        type:_U.types[1], 
        id:"0016",  
        title:"DesignLeaks",
        url:"designleaks-romanysoft.tumblr.com", 
        traceid:"UA-82372746-16", 
        ass:assObj,
        partnerID:"",  
        gmail:"",         
        oldPartners:[]
    });     

    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////   

    if(1){
        _U.data.push({
            type:_U.types[1], 
            id:"0017",  
            title:"AreWe",
            url:"arewe-romanysoft.tumblr.com", 
            traceid:"UA-82372746-17", 
            ass:assObj,
            partnerID:"",  
            gmail:"",         
            oldPartners:[]
        });

        _U.data.push({
            type:_U.types[1], 
            id:"0018",  
            title:"Haskell",
            url:"haskell-romanysoft.tumblr.com", 
            traceid:"UA-82372746-18", 
            ass:assObj,
            partnerID:"",  
            gmail:"",         
            oldPartners:[]
        });    

        _U.data.push({
            type:_U.types[1], 
            id:"0019",  
            title:"Pods",
            url:"pods-romanysoft.tumblr.com", 
            traceid:"UA-82372746-19", 
            ass:assObj,
            partnerID:"",  
            gmail:"",         
            oldPartners:[]
        });

        _U.data.push({
            type:_U.types[1], 
            id:"0020",  
            title:"SuperCon",
            url:"supercon-romanysoft.tumblr.com", 
            traceid:"UA-82372746-20", 
            ass:assObj,
            partnerID:"",  
            gmail:"",         
            oldPartners:[]
        });   

        _U.data.push({
            type:_U.types[1], 
            id:"0021",  
            title:"Tracking",
            url:"tracking-romanysoft.tumblr.com", 
            traceid:"UA-82372746-21", 
            ass:assObj,
            partnerID:"",  
            gmail:"",         
            oldPartners:[]
        });   
    }   


    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////               

	window["rty_resources_dataobj"] = _U;
    return _U;

})();