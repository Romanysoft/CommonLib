///
/// 用户申请成为合作伙伴

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
        $.templateLoader.loadExtTemplate("markethelper/templates/tpl.app.apply.htm", function(){
            cb && cb();
        })
    };

    /// 缓存记忆
    _U.cache = {
            key:'apply_info',
            current:{},
            load:function () {
                t$ = this;
                var _c = window.localStorage.getItem(t$.key) || null;
                if (_c){
                    try{
                        var obj = JSON.parse(_c);
                        t$.current = obj;
                    }catch(e){}
                }
            },
            save:function () {
                var t$ = this;
                if (t$.current){
                    var dataStr = JSON.stringify(t$.current);
                    window.localStorage.setItem(t$.key, dataStr);
                }
            }
    };    

    /// 启动
    _U.launch = function () {
        var t$ = this;
        _U.loadTemplate(function(){
            var win = $('#apply-window');
            if (!win.data("kendoWindow")){
                win.kendoWindow({
                    actions: ["Pin","Close"],
                    title: "申请加入合作",
                    width: '540px',
                    resizable: false,
                    model:false
                });

                var contentTemplate = kendo.template($('#template-window-apply').html(), {useWithBlock:false});
                win.html(contentTemplate({}));

                //初始化控件
                _U.cache.load();
                $('#apply-ui-name').val(_U.cache.current.userName || "");
                $('#apply-ui-gender').val(_U.cache.current.gender || "0");
                $('#apply-ui-qq').val(_U.cache.current.qq || "");

                var validator = $("#applyForm").kendoValidator().data("kendoValidator"),
                    status = $("#applyForm > .status");

                $('#apply-ui-gender').kendoDropDownList({
                        dataTextField: "text",
                        dataValueField: "value",
                        dataSource: [
                            { text: "女", value: "0" },
                            { text: "男", value: "1" }
                        ],
                        index: 0
                    });

                $("#apply-window > div > div.k-footer > .k-button").kendoButton({
                    click: function() {
                        var t$ = this;
                        
                        if (validator.validate()) {
                            t$.enable(false);
                            var userName = $('#apply-ui-name').val();
                            var gender = $('#apply-ui-gender').val();
                            var qq = $('#apply-ui-qq').val();

                            _U.cache.current = {
                                userName: userName,
                                gender: gender,
                                qq: qq
                            };

                            _U.cache.save();

                            /// 反馈给服务器
                            $.feedbackInfoEx("MARKET_APPLY_FROM_RS", _U.cache.current, function(o){
                                if(o.success){
                                    alert('申请已经发送成功！请等待回复！');
                                }    
                            });

                            setTimeout(function(){
                                t$.enable(true);
                            },5000);                            
                        }


                    }
                })                    

            }

            var w = win.data('kendoWindow');
            w.center();
            w.open();            
        });    
    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.showApplyWindow", function(e) {_U.launch()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());