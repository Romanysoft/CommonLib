///
/// 系统登记的现有所有的合作者

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

  _U.winObj = null;
  _U.appsMap = {}; // key: 产品名称，value：合作者ID
  _U.apps2partnerID = [];
  _U.partnerID2Earning = {}; // 合作者ID对应的收入

  /// 加载模板
  _U.loadTemplate = function(cb) {
    $.templateLoader.loadExtTemplate("templates/tpl.app.calc.htm", function() {
      cb && cb();
    })
  };

  _U.getGridOptions = function(in_data, cb) {

    var dataSource = new kendo.data.DataSource({
        //offlineStorage: "offline-product-calc",
        batch: true,
        pageSize: 20,
        data:[],
        schema: {
            model: {
                fields: {
                    productName: { type: "string" },
                    earning: { type: "number", validation: { min: 0.0, required: true } }
                }
            }
        },
        change: function(e){
           cb && cb(e, this);
        }
    });

    function productDropDownEditor(container, options){
      $('<input required name="' + options.field + '"/>')
          .appendTo(container)
          .kendoDropDownList({
              autoBind: false,
              dataTextField: "productName",
              //dataValueField: "partnerID",
              dataValueField: "productName",
              dataSource: _U.apps2partnerID
          });
    }

    var options = {
            dataSource: dataSource,
            allowCopy: true,
            scrollable: true,
            sortable: true,
            filterable: true,
            pageable: {
                input: true,
                numeric: false
            },
            toolbar: [ "create" ],
            height: 450,
            columns: [
                { field: "productName", title: "产品名称",  width: "80px", editor: productDropDownEditor, template: "#=productName#" },
                //{ field: "productName", title: "产品名称",  width: "80px"},
                { field: "earning", title: "收益($)", format: "{0:c}", width: "20px" },
                { command: "destroy", title: " ", width: "10px" }
            ],
            editable: true, // 适合于自定义模式编辑
            //detailTemplate: "<div>Product: #: productName #</div><div>Earning: #: earning #</div>"
    };

    if(window.location.host.indexOf("127.0.0.1") > -1){
        //options.columns.push({ field: "onJob", title: "状态", width: "30px" });
    }

    return options;
  };


  _U.launch = function() {
    var t$ = this;

    t$.loadTemplate(function() {
      var win = _U.winObj = $('#app-calc-window');
      if (!win.data("kendoWindow")) {
        win.kendoWindow({
          actions: ["Pin", "Close"],
          title: "产品收益统计",
          width: 1440,
          position: {
            top: 60
          },
          resizable: true,
          maxWidth: 1680,
          Height: 400,
          model: false
        });


        /// 以下按照下面方式来处理
        $.RTYUtils.queue()
          .next(function(nxt) {
            var url = "data/products_ass.js" + "?t=" + (new Date()).getTime();
            $.getScript(url).done(function(data, textStatus, jqxhr) {
              var dataList = [];
              if ($.RTYUtils.isString(data)) {
                var obj = eval(data);
                dataList = obj.data;
              } else if (!data) {
                dataList = window["rty_resources_dataobj"].data;
              }

              /// 将数据存储到_U.appsMap中
              $.each(dataList,
                function(i, product) {
                  if(product.productName.length > 0){
                    _U.appsMap[product.productName] = product.partnerID;
                    _U.apps2partnerID.push({
                      productName:product.productName,
                      partnerID:product.partnerID
                    });
                  }
                });

              nxt && nxt();
            })
          })
          .next(function(nxt) {
            _U.UI_winTextAreaObj = win.find("textarea");
            _U.UI_winTextAreaObj.css({width: "98%", height:"200px"});
            nxt && nxt();
          })
          .next(function(nxt) {
            /// 初始化表格
            win.children(".grid").kendoGrid(t$.getGridOptions(
              [], function(e, $that){
                console.log($that.data().length); // displays "77"

                //处理公式
                var partnerID2Earning = {};
                $.each($that.data(), function(i, info){
                    // 产品的名称，收益
                    var name = info.productName, earning = info.earning;
                    console.log(name, earning); // displays "77"

                    // 获取合作者ID
                    var partnerID = _U.appsMap[name];
                    partnerID2Earning[partnerID] = partnerID2Earning[partnerID] || 0 + earning;
                });

                //输出公式
                // 示例：_U.data.push(_U.tp({id: "D1150418", cost: 10.17, rate: curE, start:nowDate,  end:nowDate}));
                var allFormula = "";
                $.each(Object.keys(partnerID2Earning), function(i, key){
                    if(partnerID2Earning.hasOwnProperty(key)){
                      var id = key;
                      var earning = partnerID2Earning[key];

                      var formula = "_U.data.push(_U.tp({id: \"" + id + "\", cost: " + earning +", rate: curE, start:nowDate,  end:nowDate}));\n";
                      allFormula += formula;
                    }
                });

                _U.UI_winTextAreaObj.val(allFormula);

              }));
            nxt && nxt();
          })
          .done(function(nxt, err) {
            if (err) {
              console.log(err); // 输出 fail
            } else {
              console.log('----------- run complate ----------------');
            }
          });



      }

      var w = win.data('kendoWindow');
      w.open();
    });

  };

  //-----------------------------------------------------------------------------------------------------------------
  //绑定可识别的消息
  _MC.register("app.showCalcWindow", function(e) {
    _U.launch()
  });

  window.UI.c$ = $.extend(window.UI.c$, c$);
}());
