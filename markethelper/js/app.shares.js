///
/// 系统配置情况

(function () {
    window['UI'] = window['UI'] ||  {}; 
    window.UI.c$ = window.UI.c$ ||  {}; 
})(); 

(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ =  {}; 
    c$ = $.extend(window.UI.c$,  {}); 
    var b$ = BS.b$; 
    var _MC = c$.MessageCenter; 

    var _U =  {}; 


    /// 加载模板
    _U.loadTemplate = function(cb){
        $.templateLoader.loadExtTemplate("markethelper/templates/tpl.app.shares.htm", function(){
            cb && cb();
        })
    };

    _U.launch = function () {
        var t$ = this;
        _U.loadTemplate(function(){
            var win = $('#shares-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "共享文件",
                    width: 1024,
                    position: {
                        top: 60
                    },                    
                    resizable: true,
                    model:false
                });

                $.getScript("data/marking_shares.js").done(function(data, textStatus, jqxhr){
                    var dataList = [];
                    var shareUnitObj = {};
                    if($.RTYUtils.isString(data)){
                        var shareUnitObj = eval(data);  
                        dataList = shareUnitObj.data;

                        //格式化数据模型

                    }
                    /// 初始化表格
                    $('#shares-window > .shares-grid').kendoGrid({
                            dataSource: {
                                data: dataList,
                                schema: {
                                    model: {
                                        fields: {
                                            category: { type: "string" },
                                            name: { type: "string" },
                                            url: { type: "string" },
                                            comment: { type: "string" }
                                        }
                                    }
                                },
                                sort:[
                                    {field: "category", dir: "asc" }
                                ], 
                                pageSize: 50
                            },
                            height: 550,
                            scrollable: true,
                            groupable:{
                                enabled: true,
                                showFooter: true
                            },
                            sortable: true,
                            filterable: true,
                            pageable: {
                                input: true,
                                numeric: false
                            },
                            columns: [
                                { field: "category", title: "类别", width: "50px" },
                                { field: "name", title: "名称", width: "100px" },
                                // { field: "url", title: "链接", width: "150px" },
                                { command: [{
                                        name: "查看",
                                        click: function(e) {
                                            // prevent page scroll position change
                                            e.preventDefault();
                                            // e.target is the DOM element representing the button
                                            var tr = $(e.target).closest("tr"); // get the current table row (tr)
                                            // get the data bound to the current table row
                                            var data = this.dataItem(tr);
                                            console.log("Details for: " + data.url);

                                            if(data.category === shareUnitObj.category[3]){
                                                _MC.send("app.showPlayerWindow", data);
                                            }else{
                                                window.open(data.url, 'new_win');
                                            }

                                            
                                        }
                                    }], title: "点击下载", width: "40px"
                                },                                
                                { field: "comment", title: "备注",  width: "120px" },

                            ]
                    })
                });


            }

            var w = win.data('kendoWindow');
            w.open();            
        }); 

    };


    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.showSharesWindow", function(e) {_U.launch()}); 

    window.UI.c$ = $.extend(window.UI.c$, c$); 
}()); 