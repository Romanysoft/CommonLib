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
        oldPartners:[
            "A017"
        ]      
    });    

    _U.data.push({
        type:_U.types[1], 
        id:"0004",  
        url:"whatsapptips.tumblr.com", 
        traceid:"UA-82372746-4", 
        ass:assObj,
        partnerID:"", 
        gmail:"",         
        oldPartners:[
            "A018"
        ]    
    });    

    _U.data.push({
        type:_U.types[1], 
        id:"0005",  
        url:"provenuclear.tumblr.com", 
        traceid:"UA-82372746-5", 
        ass:assObj,
        partnerID:"A019",   // 
        gmail:"",         // gmail邮箱 
        oldPartners:[]    // 此博客以前的合作者
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
        partnerID:"",   // 
        gmail:"",         // gmail邮箱  
        oldPartners:[]    // 此博客以前的合作者
    }); 

    _U.data.push({
        type:_U.types[1], 
        id:"0011",  
        url:"happybouquetdragonfan.tumblr.com", 
        traceid:"UA-82372746-11", 
        ass:assObj,
        partnerID:"",   // 
        gmail:"",         // gmail邮箱  
        oldPartners:[]    // 此博客以前的合作者
    });         

    return _U;

})();