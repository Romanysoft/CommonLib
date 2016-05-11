(function() {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var _href = window.location.href,
        _mac = " for Mac",
        _win = "  for Windows",
        _linux = " for Linux";
    
    var found = false,
        foundProductID = "",
        foundProdutName = "",
        foundLinkID = "",
        _productsMap = {
            "55399-1": "SpeedTest" + _mac,
            "55399-2": "BarcodeUV" + _mac,
            "55399-3": "BarcodePro" + _mac,
            "55399-4": "AN PDF" + _mac,
            "55399-5": "Color Converter" + _mac,
            "55399-6": "CSSDesigner" + _mac,
            "55399-8": "GraphSketcher" + _mac,
            "55399-9": "CSVKiller" + _mac,
            "55399-10": "TryToMp3" + _mac,
            "55399-11": "TryToAVI" + _mac,
            "55399-12": "TryToAC3" + _mac,
            "55399-13": "TryToMPG" + _mac,
            "55399-14": "TryToWav" + _mac,
            "55399-15": "TryToSWF" + _mac,
            "55399-16": "ImageMinify" + _mac,
            "55399-17": "DataStorm" + _mac,
            "55399-18": "Batch File Translater" + _mac,
            "55399-19": "5BR3C" + _mac,
            "55399-20": "ExifImage" + _mac,
            "55399-21": "SRT2" + _mac,
            "55399-22": "TryToFLV" + _mac,
            "55399-23": "TryToMp4" + _mac,
            "55399-24": "TryToAAC" + _mac,
            "55399-25": "TryToAIFF" + _mac,
            "55399-26": "TryToALAC" + _mac,
            "55399-27": "TryToAMR" + _mac,
            "55399-28": "TryToOGG" + _mac,
            "55399-29": "TryToOpus" + _mac,
            "55399-30": "TryToWMA" + _mac,
            "55399-31": "Css Sprite Helper" + _win,
            "55399-32": "MarkdownD" + _mac,
            "55399-33": "SudokuMM" + _mac,
            "55399-34": "Try to translate" + _mac,
            "55399-35": "CurrencyCalc" + _mac,
            "55399-36": "LET" + _mac,
            "55399-37": "MarkdownD" + _win,
            "55399-38": "MarkdownD" + _linux,
            "55399-39": "Try to translate" + _win,
            "55399-40": "Try to translate" + _linux,
            "55399-41": "DataStorm" + _win,
            "55399-42": "DataStorm" + _linux,
            "55399-43": "XLS2csv" + _mac,
            "55399-44": "CSSDesigner" + _win,
            "55399-45": "CSSDesigner" + _linux,

        },
        _linkIdList = [ //
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
            "RF201604071748PTJ"
        ],
        _lowerHref = _href.toLowerCase();


    //------------------------------------------------
    //build redircet url.
    //eg. org: http://romanysoft.github.io/CommonLib/sellers.html?pid=55399-1&quantity=1&linkid=RF201603221800PTJ
    //    dest: https://shopper.mycommerce.com/checkout/cart/add/55399-1?quantity=1&linkid=RF201603221800PTJ
    var destUrl = "https://shopper.mycommerce.com/checkout/cart/add/",
        orgUrlRplace = "http://romanysoft.github.io/CommonLib/sellers.html?pid=";

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 便捷函数
     *  */
    //eg. https://shopper.mycommerce.com/checkout/cart/new/55399-17
    // find product
    function fnc_findProductName(_lowerHref, _productsMap) {
        $.each(Object.keys(_productsMap), function(i, item) {
            var _lowerItem = item.toLowerCase();
            if (_lowerHref.indexOf(_lowerItem) > -1) {
                foundProductID = item;
                foundProdutName = _productsMap[item];
                found = true;
                return false;
            }
        });
    };

    // find linkId,
    function fnc_findLinkID(_lowerHref, _linkIdList) {
        var found = false;
        $.each(_linkIdList, function(i, item) {
            var _lowerItem = 'linkid=' + item.toLowerCase();
            if (_lowerHref.indexOf(_lowerItem) > -1) {
                foundLinkID = item;
                found = true;
                return false;
            }

        });
    };


    /**
     * 配置有ga的时候
     *  */
    function process_when_has_ga() {
        try {
            // trace sheller information
            window.ga_debug = {
                trace: false
            };
            ga('create', 'UA-54045904-5', 'auto');
            ga(function(tracker) {
                console.log(tracker.get('clientId'));
                try {
                    _coreHandler();
                } catch (e) {
                    console.error(e);
                }

            });

            /**
             * 有Google分析的时候，处理方式
             *  */
            function _coreHandler(params) {
                try {
                    
                    var _lang = "MEME";
                    try{
                        _lang = navigator.language;
                    }catch(e){}
                    
                    //////////////////////////////////////////////////////////////
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'OrderProduct',
                        eventAction: 'traceProduct' + "--" + _lang,
                        eventLabel: foundProductID + " ## " + foundProdutName
                    });

                    ga('send', {
                        hitType: 'event',
                        eventCategory: foundProductID + " ## " + foundProdutName,
                        eventAction: 'gotoPurchase' + "--" + _lang,
                        eventLabel: foundProdutName + " || " + (new Date()).toUTCString()
                    });

                    if ("" !== $.trim(foundLinkID)) {
                        ga('send', {
                            hitType: 'event',
                            eventCategory: foundLinkID,
                            eventAction: 'gotoPurchase' + "--" + _lang,
                            eventLabel: foundProdutName + " || " + (new Date()).toUTCString()
                        });
                        ga('send', {
                            hitType: 'event',
                            eventCategory: foundLinkID + " ## " + foundProdutName,
                            eventAction: 'traceLinkIDProduct' + "--" + _lang,
                            eventLabel: foundProdutName + " || " + (new Date()).toUTCString()
                        });
                    }
                } catch (e) {
                    console.error(e);
                } finally {
                    direct_change_baseUrl();
                }
            }

            // 启动google分析事件记录下来        
            ga('send', {
                hitType: 'pageview',
                page: location.pathname
            });
        } catch (error) {
            console.log(error);
            window.location.href = "https://shopper.mycommerce.com/checkout/cart/add/55399-17?quantity=1&linkid=KevinER";
        }

    }

    /**
     * 处理订单重新定位的问题
     *  */
    function direct_change_baseUrl() {
        var hasChanged = false;
        try {
            var baseUrl = _lowerHref.replace(orgUrlRplace.toLowerCase(), destUrl);
            if (baseUrl.toLowerCase().indexOf(orgUrlRplace.toLowerCase()) == -1 && baseUrl.toLowerCase() !== _lowerHref) {
                baseUrl = baseUrl.replace('&quantity=', '?quantity=');

                if (foundProductID == "") {
                    hasChanged = true;
                    window.location.href = "https://shopper.mycommerce.com/checkout/cart/add/55399-1?quantity=1";
                } else {
                    hasChanged = true;
                    window.location.href = baseUrl;
                }
            } 
        } catch (error) {
            hasChanged = false;
            console.log(error);
        }

        if (!hasChanged) {
            // 导航到官方网站
            window.location.href = "//www.romanysoft.com";
        }

    }

   
    /**
     * 配置Loading UI 控件
     *  */
    function configSpinUI() {
        //-------------------------------------------------
        //loading....
        try {
            var opts = {
                lines: 13, // loading光暈長條的數量
                length: 7, // 光暈長條的長度
                width: 4, // 光暈長條的寬度
                radius: 10, // 整個圓形的半徑
                corners: 1, // 光暈長條的圓角
                rotate: 0, // loading動畫的旋展度數 (因為本身已經動態旋轉了所以這個沒什麼調整必要)
                color: '#000', // 顏色
                speed: 1, // 速度
                trail: 60, // 動作餘暉的百分比
                shadow: false, // 是否渲染出陰影
                hwaccel: false, // 是否啟用硬體加速
                className: 'spinner', // 給loading添加的class樣式名稱
                zIndex: 2e9, // z軸的層級 (預設2000000000)
                top: 'auto', // top相對定位
                left: 'auto' // left相對定位
            };
            var target = document.getElementById('loading'); //loading為自定義ID要和HTML中的ID相同
            var spinner = new Spinner(opts).spin(target);

        } catch (e) {
            console.log(e);
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
        // })(window, document, 'script', '//www.google-analytics.com/analytics_debug.js', 'ga');
    })(window, document, 'script', 'common/js/analytics.js', 'ga');


    $(document).ready(function() {
        // 现在就开始获取信息
        fnc_findProductName(_lowerHref, _productsMap);
        fnc_findLinkID(_lowerHref, _linkIdList);
        //Step1: 配置Loading 控件
        configSpinUI();
        //Step2: 如果含有ga对象，启动google分析
        if (ga) {
            process_when_has_ga();
        } else {
            direct_change_baseUrl();
        }
    });

})();