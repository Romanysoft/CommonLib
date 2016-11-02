///
/// 系统配置情况

(function() {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function() {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    var b$ = BS.b$;
    var _MC = c$.MessageCenter;

    var _U = {};


    /// 加载模板
    _U.loadTemplate = function(cb) {
        $.templateLoader.loadExtTemplate("templates/tpl.app.resources.htm", function() {
            cb && cb();
        })
    };

    _U.getGridOptions = function(dataList) {
        var t$ = this;
        return {
            dataSource: {
                data: dataList,
                schema: {
                    model: {
                        fields: {
                            partnerID: {
                                type: "string"
                            },
                            partnerName: {
                                type: "string"
                            },
                            productName: {
                                type: "string"
                            },
                            srcdir: {
                                type: "string"
                            },
                            devdir: {
                                type: "string"
                            },
                            appstoreurl: {
                                type: "string"
                            },
                            appstroePrice: {
                                type: "number"
                            },
                            officialPrice: {
                                type: "number"
                            },
                            officialUrl: {
                                type: "string"
                            },
                            hasPromo: {
                                type: "boolean"
                            },
                            platforms: {
                                type: "string"
                            },

                            demoName: {
                                type: "string"
                            },
                            demoUrl: {
                                type: "string"
                            }
                        }
                    }
                },
                sort: [{
                    field: "partnerID",
                    dir: "desc"
                }],
                pageSize: 50
            },

            //height: 550,
            scrollable: true,
            groupable: {
                enabled: true,
                showFooter: true,
                messages: {
                    empty: "拖拽你想分组的列到这里..."
                }
            },
            //reorderable: true,
            resizable: true,
            sortable: true,
            filterable: true,
            pageable: {
                input: true,
                numeric: false
            },
            columns: [{
                    field: "productName",
                    title: "应用",
                    width: 80
                }, {
                    field: "srcdir",
                    title: "源码public",
                    width: 100
                }, {
                    field: "devdir",
                    title: "源码dev",
                    width: 100
                }, {
                    field: "appstoreurl",
                    title: "商店链接",
                    width: 100
                }, {
                    field: "appstroePrice",
                    title: "商店定价",
                    width: 100
                }, {
                    field: "officialUrl",
                    title: "官方网站",
                    width: 100
                }, {
                    field: "officialPrice",
                    title: "售价",
                    width: 100
                }, {
                    field: "hasPromo",
                    title: "促销?",
                    width: 40
                }, {
                    field: "platforms",
                    title: "平台",
                    width: 90
                },

                {
                    field: "demoName",
                    title: "Demo名称",
                    width: 100
                }, {
                    field: "demoUrl",
                    title: "参照",
                    width: 200
                }, {
                    field: "partnerID",
                    title: "合作者ID",
                    width: 50
                }, {
                    field: "partnerName",
                    title: "合作者名称",
                    width: 50
                }
            ]
        };
    };

    _U.launch = function() {
        var t$ = this;
        _U.loadTemplate(function() {
            var win = $('#resources-window');
            if (!win.data("kendoWindow")) {
                win.kendoWindow({
                    actions: ["Pin", "Close"],
                    title: "项目产品关联记录",
                    position: {
                        top: 70
                    },
                    resizable: true,
                    model: false
                });

                var url = "data/products_ass.js";
                $.getScript(url).done(function(data, textStatus, jqxhr) {
                    var dataList = [];
                    if ($.RTYUtils.isString(data)) {
                        var obj = eval(data);
                        dataList = obj.data;
                    } else if (!data) {
                        dataList = window["rty_resources_dataobj"].data;
                    }

                    url = "data/partner_ass.js" + "?t=" + (new Date()).getTime();
                    $.getScript(url).done(function(data, textStatus, jqxhr) {
                        var partnersData = [];
                        if ($.RTYUtils.isString(data)) {
                            var obj = eval(data);
                            partnersData = obj.data;
                        } else if (!data) {
                            partnersData = window["rty_partners_dataobj"].data;
                        }

                        /// 格式化数据
                        $.each(dataList, function(i, product) {
                            $.each(partnersData, function(j, partner) {
                                if (product.partnerID === partner.id) {
                                    product.partnerName = partner.name;
                                }
                            });
                        });

                        /// 初始化表格
                        $('#resources-window > .resources-grid').kendoGrid(t$.getGridOptions(
                            dataList));
                    });



                });


            }

            var w = win.data('kendoWindow');
            w.open();
        });

    };


    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.showResourcesWindow", function(e) {
        _U.launch()
    });

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());
