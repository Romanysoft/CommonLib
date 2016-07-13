(function($) {
    $.RTY_linkIDs = [
            //// --- 01
            "RF201501221800RT",
            "RF201502221800RT",
            "RF201503221800RT",
            "RF201504221800RT",
            "RF201505221800RT",
            "RF201506221800RT",
            "AnnreChen",

            //// --- 02
            "RF201603221800PTJ",
            "RF201604071748PTJ",
            
            //// --- 03
            "rs",
    ];
     
    for(var j = 0; j < 10; ++j){
        var pre = "A" + j;
        //A001 - A009    
        for(var i=0; i < 10; ++i){
            $.RTY_linkIDs.push(pre + "0" + i);    
        } 
        for(var i=10; i < 100; ++i){
            $.RTY_linkIDs.push(pre + i);    
        }   
    }

        
})($ || jQuery);