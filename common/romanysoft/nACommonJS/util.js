/**
 * Created by Ian on 2014/7/21.
 * 常用功能集合
 * 优化
 * 2016年5月14日13:08:01 添加 window.addEventListener('error', function (e) ... 事件监测
 * 2016年5月28日12:23:26 参照Editor.md 添加加载css和javascript及插件的方式
 * 2016年5月28日15:34:19 添加统一的加载多语言的方式
 * 2016年5月29日09:17:08 添加google语言标识识别
 * 2016年5月29日09:17:24 添加帮助函数。判断undefined和null。 参数转换成数组
 * 2016年6月2日13:26:33 更新$.RTYWebHelper 代码结构，无实质功能升级
 * 2016年6月2日14:27:43 添加$.RTYWebHelper.isSafariExtend 用来扩展判断Safari版本
 * 2016年8月14日22:45:50 修正reportInfo不严谨的问题。现在可以与服务器进行通讯
 *                      添加App运行的平台信息
 * 2016年9月2日09:20:15  reportErrorInfo 添加新参数，用来处理附加的信息
 */
;
(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define("BS.util", ["jquery"], function() {
            return factory(jQuery || $)
        })
    } else {
        factory(jQuery || $);
    }

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(jQuery || $)
    }


}(function($, undefined) {
    "use strict";

    (function($) {
        window['$'] = $ || {};
        var b$ = {};
        if(window.BS){
            if(window.BS.b$){
                b$ = window.BS.b$;
            }
        }

        /// 统一设置ajax选项
        try{
            $.ajaxSetup({
                timeout: 5*60*1000
            });
        }catch(e){}


        $.RTYWebHelper = {
            ua: function() {
                return navigator.userAgent.toLowerCase();
            },
            isOpera: function() {
                var t$ = this;
                var ua = t$.ua();
                return ua.indexOf("opera") > -1;
            },
            isChrome: function() {
                var t$ = this;
                var ua = t$.ua();
                return ua.indexOf("chrome") > -1;
            },
            isSafari: function() {
                var t$ = this;
                var ua = t$.ua();
                var isChrome = t$.isChrome();
                return !isChrome && (/webkit|khtml/).test(ua);
            },
            isSafari3: function() {
                var t$ = this;
                var ua = t$.ua();
                var isSafari = t$.isSafari();
                return isSafari && ua.indexOf('webkit/5') != -1;
            },
            isSafariExtend: function(version) {
                var t$ = this;
                var ua = t$.ua();
                var isSafari = t$.isSafari();

                /** 各版本对照关系
                 * 可以通过 http://www.51.la/report/3_Client.asp?t=soft&id=2812271 获取现在机器的配置
                 * AppleWebKit/601.6.17    MacOSX 10.11.5
                 * AppleWebKit 601.5.17
                 * AppleWebKit 601.1.46
                 * AppleWebKit/600.8.9     MacSOX 10.10.5
                 * AppleWebKit 600.1.4

                 * AppleWebKit/537.75.14   MacSOX 10.9.3
                 * AppleWebKit/534.57      ====================　windows机器上测试环境
                 * AppleWebKit/534.55      MacSOX 10.7.3
                 * AppleWebKit/534.46
                 * AppleWebKit 534.34
                 * AppleWebKit/537.13      MacSOX 10.6.8
                 * AppleWebKit 534.30
                 * AppleWebKit/534.15      MacSOX 10.6.5
                 * AppleWebKit/533.1
                 */
                return isSafari && ua.indexOf('webkit/' + version) != -1; //Mac 10.10.5
            },
            isMacOS: function() {
                var nav = navigator;
                try {
                    var oscpu = nav["oscpu"]; // for firefox developer editon version
                    if (oscpu) {
                        var low_oscpu = oscpu.toLowerCase();
                        return low_oscpu.indexOf('mac') != -1;
                    }
                } catch (e) {
                    console.error(e);
                }

                return false;
            },
            isWinOS: function() {
                var nav = navigator;
                try {
                    var oscpu = nav["oscpu"]; // for firefox developer editon version
                    if (oscpu) {
                        var low_oscpu = oscpu.toLowerCase();
                        return low_oscpu.indexOf('windows') != -1;
                    }
                } catch (e) {
                    console.error(e);
                }

                return false;
            },
        };


        //============================================================================================
        //兼容函数处理
        //============================================================================================
        if (typeof window.console === "undefined") {
            window.console = {
                log: function() {}
            };
        }
        // there are places in the framework where we call `warn` also, so we should make sure it exists
        if (typeof window.console.warn === "undefined") {
            window.console.warn = function(msg) {
                this.log("warn: " + msg);
            }
        }

        if (!Array.from) {
            Array.from = (function() {
                var toStr = Object.prototype.toString;
                var isCallable = function(fn) {
                    return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
                };
                var toInteger = function(value) {
                    var number = Number(value);
                    if (isNaN(number)) {
                        return 0;
                    }
                    if (number === 0 || !isFinite(number)) {
                        return number;
                    }
                    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
                };
                var maxSafeInteger = Math.pow(2, 53) - 1;
                var toLength = function(value) {
                    var len = toInteger(value);
                    return Math.min(Math.max(len, 0), maxSafeInteger);
                };

                // The length property of the from method is 1.
                return function from(arrayLike /*, mapFn, thisArg */ ) {
                    // 1. Let C be the this value.
                    var C = this;

                    // 2. Let items be ToObject(arrayLike).
                    var items = Object(arrayLike);

                    // 3. ReturnIfAbrupt(items).
                    if (arrayLike == null) {
                        throw new TypeError(
                            "Array.from requires an array-like object - not null or undefined"
                        );
                    }

                    // 4. If mapfn is undefined, then let mapping be false.
                    var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                    var T;
                    if (typeof mapFn !== 'undefined') {
                        // 5. else
                        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                        if (!isCallable(mapFn)) {
                            throw new TypeError(
                                'Array.from: when provided, the second argument must be a function'
                            );
                        }

                        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                        if (arguments.length > 2) {
                            T = arguments[2];
                        }
                    }

                    // 10. Let lenValue be Get(items, "length").
                    // 11. Let len be ToLength(lenValue).
                    var len = toLength(items.length);

                    // 13. If IsConstructor(C) is true, then
                    // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
                    // 14. a. Else, Let A be ArrayCreate(len).
                    var A = isCallable(C) ? Object(new C(len)) : new Array(len);

                    // 16. Let k be 0.
                    var k = 0;
                    // 17. Repeat, while k < len… (also steps a - h)
                    var kValue;
                    while (k < len) {
                        kValue = items[k];
                        if (mapFn) {
                            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T,
                                kValue, k);
                        } else {
                            A[k] = kValue;
                        }
                        k += 1;
                    }
                    // 18. Let putStatus be Put(A, "length", len, true).
                    A.length = len;
                    // 20. Return A.
                    return A;
                };
            }());
        }

        //=============================================================================================
        //end 兼容函数处理

        $.enable_AppConfig_debug = false;

        $.ConfigServer = {
            getDomain: function(use_debug) {
                var debug = use_debug || $.enable_AppConfig_debug;
                var isHttps = 'https:' == document.location.protocol ? false : true;
                var prex = isHttps ? 'https://' : 'http://'

                return debug == true ? (prex + "127.0.0.1:3000") :  (prex + "www.romanysoft.com");
            },
            getMessageServer: function(use_debug) {
                var debug = use_debug || $.enable_AppConfig_debug;
                return debug == true ? "ws://127.0.0.1:3000" :
                    "ws://www.romanysoft.com:8000";
            }
        };

        $.ConfigClass = {
            domain: function() {
                return $.ConfigServer.getDomain($.enable_AppConfig_debug);
            }(),
            messageServer: function() { //消息服务器
                return $.ConfigServer.getMessageServer($.enable_AppConfig_debug);
            }(),

            CACHE_EXPIRE: 60000 * 10 // 数据缓存时间
        };

        // 对象克隆
        $.objClone = function(Obj) {
            var buf;
            if (Obj instanceof Array) {
                buf = []; //创建一个空的数组
                var i = Obj.length;
                while (i--) {
                    buf[i] = $.objClone(Obj[i]);
                }
                return buf;
            } else if (Obj instanceof Object) {
                buf = {}; //创建一个空对象
                for (var k in Obj) { //为这个对象添加新的属性
                    buf[k] = $.objClone(Obj[k]);
                }
                return buf;
            } else {
                return Obj;
            }
        };

        // 获取kendo的时间
        $.getMyDateStr = function(format) {
            if (kendo) {
                if (format == null) {
                    return kendo.toString((new Date()), "yyyy/MM/dd hh:mm:ss");
                } else {
                    return kendo.toString((new Date()), format);
                }
            }

            return "";
        };

        // 简易格式化Date
        $.getFormatDateStr = function(dateObj, fmt) {
            // 对Date的扩展，将 Date 转化为指定格式的String
            // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
            // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
            // 例子：
            // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
            // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
            var that = dateObj;

            var o = {
                "M+": that.getMonth() + 1, //月份
                "d+": that.getDate(), //日
                "h+": that.getHours(), //小时
                "m+": that.getMinutes(), //分
                "s+": that.getSeconds(), //秒
                "q+": Math.floor((that.getMonth() + 3) / 3), //季度
                "S": that.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (that.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(
                        ("" + o[k]).length)));
            return fmt;
        };

        // obj输出为String
        $.obj2string = function(o) {
            var r = [];
            if (typeof o == "string") {
                return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n")
                    .replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
            }
            if (typeof o == "object" && o != null) {
                if (!o.sort) {
                    for (var i in o) {
                        r.push(i + ":" + $.obj2string(o[i]));
                    }
                    if (!!document.all && !
                        /^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)
                    ) {
                        r.push("toString:" + o.toString.toString());
                    }
                    r = "{" + r.join() + "}";
                } else {
                    for (var i = 0; i < o.length; i++) {
                        r.push($.obj2string(o[i]))
                    }
                    r = "[" + r.join() + "]";
                }
                return r;
            }

            if (o != null) {
                return o.toString();
            }

            return '';
        };

        // 字符串参数格式化 {index}
        $.stringFormat = function() {
            if (arguments.length == 0) return null;
            var str = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
                str = str.replace(re, arguments[i]);
            }

            return str;
        };

        // 比较两个版本号
        $.compareVersion = function(version1, version2) {
            try {
                var version1Array = version1.split('.');
                var version2Array = version2.split('.');

                var ver1IntList = [],
                    ver2IntList = [];

                $.each(version1Array, function(idx, value) {
                    ver1IntList.push(parseInt(value));
                });
                $.each(version2Array, function(idx, value) {
                    ver2IntList.push(parseInt(value));
                });

                var i = 0;
                // format
                if (ver1IntList.length < ver2IntList.length) {
                    i = 0;
                    for (; i < (ver2IntList.length - ver1IntList.length); ++i) {
                        ver1IntList.push(0);
                    }
                }

                if (ver1IntList.length > ver2IntList.length) {
                    i = 0;
                    for (; i < (ver1IntList.length - ver2IntList.length); ++i) {
                        ver2IntList.push(0);
                    }
                }

                i = 0;
                for (; i < ver1IntList.length; ++i) {
                    var cVer1 = ver1IntList[i];
                    var cVer2 = ver2IntList[i];

                    if (cVer1 > cVer2) return 1;
                    if (cVer1 < cVer2) return -1;
                }

                return 0;
            } catch (e) {
                return -1;
            }
        };

        // 类型检查,类型不符合,弹出警告
        $.testObjectType = function(obj, type) {
            var actualType = $.type(obj);
            if (actualType !== type) {
                var errMsg = "TestType:[" + type + "], actual:[" + actualType + "].";
                $.error(errMsg);
                alert(errMsg);
            }
        };


        // 模板引擎
        var cache = {};
        $.tmpl = function(str, data) {
            try {
                data = data || {};
                if (str[0] == '#') str = $(str).html();
                var fn = cache[str] ||
                    new Function("o", "var p=[];with(o){p.push('" +
                        str.replace(/[\r\t\n]/g, " ")
                        .replace(/'(?=[^%]*%})/g, "\t")
                        .split("'").join("\\'")
                        .split("\t").join("'")
                        .replace(/{%=(.+?)%}/g, "',$1,'")
                        .split("{%").join("');")
                        .split("%}").join("p.push('") + "');} return p.join('');");
                return fn.apply(data, [data]);
            } catch (e) {
                console.error(e)
            }
        };

        // 数据通信
        $.getpcb = {};
        $.flush_cache = function() {
            cache = {};
        };
        $.setp = function(key) {
            return function(r) {
                var cb = $.getpcb[key];
                try {
                    if (typeof r == 'object') {
                        r.__t = (new Date()).getTime();
                        cache[cb.cache_key] = r;
                    }
                } catch (e) {}

                if ($.getpcb['now'] == cb || cb.no_cancel) {
                    $.event.trigger('ajaxComplete');
                    cb(r);
                }
                delete $.getpcb[key];
            }
        };

        $.getp = function(url, data, no_cache, cb, no_cancel) {
            try {
                var b$ = {};
                if(window.BS){
                    if(window.BS.b$){
                        b$ = window.BS.b$;
                    }
                }

                if (typeof data == 'function') {
                    cb = data;
                    data = {};
                } else if (typeof no_cache == 'function') {
                    cb = no_cache;
                    if (typeof data == 'object') {
                        no_cache = false;
                    } else {
                        no_cache = data;
                        data = {};
                    }
                }

                var cache_key = url + '::' + $.param(data);
                if (!no_cache && cache[cache_key]) {
                    if ((new Date()).getTime() - cache[cache_key].__t < $.ConfigClass.CACHE_EXPIRE) {
                        $.event.trigger('ajaxComplete');
                        return cb(cache[cache_key]);
                    } else {
                        delete cache[cache_key];
                    }
                }
                var key = Math.random();
                $.getpcb['now'] = $.getpcb[key] = cb;
                $.getpcb[key].no_cancel = no_cancel;
                $.getpcb[key].cache_key = cache_key;

                data = $.extend(data, {
                    cb: '$.setp(' + key + ')',
                    navigatorInfo: navigator.userAgent
                });

                try{
                    if(b$.App){
                        data =  $.extend(data, {
                            app_name: b$.App.getAppName() || 'app_name',
                            app_bundle_id: b$.App.getAppId() || 'app_id',
                            app_sandbox_enable: b$.App.getSandboxEnable() || 0,
                            isRegistered: b$.App.getIsRegistered() || 0,
                            os: b$.App.getAppRunOnOS() || "",
                            userName: b$.App.getUserName() || "UNKNWON_ROMANYSOFT",
                            serialNumber: b$.App.getSerialNumber() || "",
                            version: b$.App.getAppVersion() || '2.0'
                        });
                    }
                }catch(e){
                    console.error(e)
                }


                $.getScript(url + (url.indexOf('?') == -1 ? '?' : '&') + $.param(data));
                $.event.trigger('ajaxSend');
            } catch (e) {
                console.error(e)
            }
        };


        ///////////////////////////////////////////////////////////////////////////////////////////
        ///{方便函数}
        $.RTYUtils = {
            //====================================================================================
            //类型判断
            //====================================================================================
            getType: function (o) {
                return Object.prototype.toString.call(o);
            },
            /**
             * [function 方便函数，检测无效及空值]
             * @param  {[type]} o [description]
             * @return {[type]}   [description]
             */
            isUndefinedOrNull: function(o) {
                return Object.prototype.toString.call(o) === "[object Null]" || Object.prototype.toString.call(o) === "[object Null]";
            },

            isObject : function (o) {
                return Object.prototype.toString.call(o) === "[object Object]";
            },

            isArray : function (o) {
                return Object.prototype.toString.call(o) === "[object Array]";
            },

            isBoolean : function (o) {
                return Object.prototype.toString.call(o) === "[object Boolean]";
            },

            isString : function (o) {
                return Object.prototype.toString.call(o) === "[object String]";
            },

            isNull : function (o) {
                return Object.prototype.toString.call(o) === "[object Null]";
            },

            isUndefined : function (o) {
                return Object.prototype.toString.call(o) === "[object Undefined]";
            },

            isNumber : function (o) {
                return Object.prototype.toString.call(o) === "[object Number]";
            },

            isDate : function (o) {
                return Object.prototype.toString.call(o) === "[object Date]";
            },

            isRegExp : function (o) {
                return Object.prototype.toString.call(o) === "[object RegExp]";
            },

            isFunction : function (o) {
                return Object.prototype.toString.call(o) === "[object Function]";
            },

            isBlob: function (o) {
                return Object.prototype.toString.call(o) === "[object Blob]";
            },

            /**
             * [function Blob数据转换成字符串]
             * @param o Blob对象
             * @param cb 回调函数
             */
            blobData2String: function (o, cb) {
                try{
                    var reader = new FileReader();
                    reader.onload = function(event){
                        var text = reader.result;
                        cb && cb (text);
                    };
                    reader.readAsText(o);
                }catch(e){
                    console.error(e);
                }
            },

            /**
             * [function Blob数据转换成ArrayBuffer], 要变成String，你需要解析ArrayBuf
             * @param o
             * @param cb
             */
            blobData2ArrayBuffer: function (o, cb){
                try{
                    var reader = new FileReader();
                    reader.onload = function(event){
                        var buf = reader.result;
                        cb && cb (buf);
                    }
                    reader.readAsArrayBuffer(o);
                }catch(e){
                    console.error(e);
                }
            },

            /**
             * [function 参数包装成数组]
             * @param  {[type]} param      [参数值]
             * @param  {[type]} allowTypes [允许什么类型的param转换成数组]
             * @return {[type]}            [description]
             */
            param2Array: function(param, allowTypes) {
                var t$ = this;

                allowTypes = allowTypes || [];
                if (t$.isUndefinedOrNull(param)) return [];
                if ($.inArray($.type(param), allowTypes) > -1) return [param];
                if ($.type(param) === "array") return param;

                return [];
            },

            //====================================================================================
            // 格式化TypeError的信息到字符串
            //====================================================================================
            getErrorMessage: function(err){
                var msg = "";
                try{
                    if ($.RTYUtils.isString(err)){
                        msg = err;
                    }else if ($.RTYUtils.isObject(err)){
                        var errMsg = [];
                        for(var p in err){
                            if(err.hasOwnProperty(p)){
                                errMsg.push(p + "=" + err[p]);
                            }
                        }

                        if(errMsg.length === 0){
                            msg = err;
                        }else{
                            msg = errMsg.join("\n");
                        }
                    }else{
                        msg += "[RTY_CANT_TYPE] = " + $.RTYUtils.getType(err);
                        msg += JSON.stringify(err);
                    }
                }catch(e){}

                return msg;
            },


            //====================================================================================
            // 队列
            //====================================================================================
            // 参照大鹏，DataStorm服务器utils.js 源码
            queue: function(_done) {
                var _next = [];

                function callback(err) {
                    if (!err) {
                        var next = _next.shift();
                        if (next) {
                            var args = arguments;
                            args.length ? (args[0] = callback) : (args = [callback]);
                            return next.apply(null, args);
                        }
                    }
                    return _done.apply(null, arguments);
                }

                var r = {
                    next: function(func) {
                        _next.push(func);
                        return r;
                    },
                    done: function(func) {
                        _done = func;
                        r.start();
                    },
                    start: function() {
                        callback(null, callback);
                    }
                };
                return r;
            },

            //=================================================================================
            // 参照Editor.md 的插件方式来处理
            //=================================================================================
            //
            loadPlugins: {},
            loadFiles: {
                js: [],
                css: [],
                plugin: []
            },
            isIE: (navigator.appName == "Microsoft Internet Explorer"),
            isIE8: (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(
                /8./i) == "8."),
            /**
             * 动态加载JS文件的方法
             * Load javascript file method
             *
             * @param {String}   fileName              JS文件名
             * @param {Function} [callback=function()] 加载成功后执行的回调函数
             * @param {String}   [into="head"]         嵌入页面的位置
             */
            loadScript: function(fileName, callback, into) {
                var $t = this;
                into = into || "head";
                callback = callback || function() {};

                var script = null;
                script = document.createElement("script");
                script.id = fileName.replace(/[\./]+/g, "-");
                script.type = "text/javascript";
                script.src = fileName + ".js";

                if ($t.isIE8) {
                    script.onreadystatechange = function() {
                        if (script.readyState) {
                            if (script.readyState === "loaded" || script.readyState ===
                                "complete") {
                                script.onreadystatechange = null;
                                $t.loadFiles.js.push(fileName);
                                callback();
                            }
                        }
                    };
                } else {
                    script.onload = function() {
                        $t.loadFiles.js.push(fileName);
                        callback();
                    };
                }

                if (into === "head") {
                    document.getElementsByTagName("head")[0].appendChild(script);
                } else {
                    document.body.appendChild(script);
                }
            },


            /**
             * 动态加载CSS文件的方法
             * Load css file method
             *
             * @param {String}   fileName              CSS文件名
             * @param {Function} [callback=function()] 加载成功后执行的回调函数
             * @param {String}   [into="head"]         嵌入页面的位置
             */
            loadCSS: function(fileName, callback, into) {
                var $t = this;
                into = into || "head";
                callback = callback || function() {};

                var css = document.createElement("link");
                css.type = "text/css";
                css.rel = "stylesheet";
                css.onload = css.onreadystatechange = function() {
                    $t.loadFiles.css.push(fileName);
                    callback();
                };

                css.href = fileName + ".css";

                if (into === "head") {
                    document.getElementsByTagName("head")[0].appendChild(css);
                } else {
                    document.body.appendChild(css);
                }
            },
            /**
             * 动态加载插件，但不立即执行
             * Load editor.md plugins
             *
             * @param {String}   fileName              插件文件路径
             * @param {Function} [callback=function()] 加载成功后执行的回调函数
             * @param {String}   [into="head"]         嵌入页面的位置
             */
            loadPlugin: function(fileName, callback, into) {
                callback = callback || function() {};

                var $t = this;
                $t.loadCSS(fileName); // 加载CSS的定义插件样式
                $t.loadScript(fileName, function() {
                    $t.loadFiles.plugin.push(fileName);
                    callback();
                }, into);
            },
            /**
             * 加载并执行插件
             * Load and execute the plugin
             *
             * @param   {String}     name    plugin name / function name
             * @param   {String}     path    plugin load path
             * @returns {this}               返回this对象
             */
            executePlugin: function(name, path, context) {
                var numargs = arguments.length; // 其余的参数
                var _this = this;

                var cm = context;
                var _args = Array.from(arguments);
                var argsList = [cm].concat(_args.slice(3, numargs));

                if (typeof define === "function") {
                    if (typeof this[name] === "undefined") {
                        alert("Error: " + name +
                            " plugin is not found, you are not load this plugin.");

                        return this;
                    }

                    (numargs > 3) ? this[name].apply(_this, argsList): this[name](cm);

                    return this;
                }

                if ($.inArray(path, _this.loadFiles.plugin) < 0) {
                    _this.loadPlugin(path, function() {
                        _this.loadPlugins[name] = _this[name];
                        (numargs > 3) ? _this[name].apply(_this, argsList): _this[name](cm);
                    });
                } else {
                    (numargs > 3) ? $.proxy(_this.loadPlugins[name], this).apply(_this, argsList):
                        $.proxy(
                            _this.loadPlugins[name], this)(cm);
                }

                return this;
            }

            //====================================================================================
            // 语言加载部分，统一放到这里
            //====================================================================================
            ,
            googleLangIDMaps: {
                "af": {
                    englishName: "Afrikaans",
                    localName: "Afrikaans",
                    zhName: "南非荷兰语",
                    compatible: ["af", "af-AF", "af_af"]
                },
                "sq": {
                    englishName: "Albanian",
                    localName: "Shqiptar",
                    zhName: "阿尔巴尼亚语",
                    compatible: ["sq", "sq-SQ", "sq_sq"]
                },
                "ar": {
                    englishName: "Arabic",
                    localName: "العربية",
                    zhName: "阿拉伯语",
                    compatible: ["ar", "ar-AR", "ar_ar"]
                },
                "hy": {
                    englishName: "Armenian",
                    localName: "Հայերեն",
                    zhName: "亚美尼亚语",
                    compatible: ["hy", "hy-HY", "hy_HY"]
                },
                "az": {
                    englishName: "Azerbaijani",
                    localName: "Azərbaycan",
                    zhName: "阿塞拜疆语",
                    compatible: ["az", "az-AZ", "az_AZ"]
                },
                "eu": {
                    englishName: "Basque",
                    localName: "Euskal",
                    zhName: "巴斯克语",
                    compatible: ["eu", "eu-EU", "en_EU"]
                },
                "be": {
                    englishName: "Belarusian",
                    localName: "Беларуская",
                    zhName: "白俄罗斯语",
                    compatible: ["be", "be-BE", "be_BE"]
                },
                "bn": {
                    englishName: "Bengali",
                    localName: "বাঙ্গালী",
                    zhName: "孟加拉语",
                    compatible: ["bn", "bn-BN", "bn_BN"]
                },
                "bs": {
                    englishName: "Bosnian",
                    localName: "Bosanski",
                    zhName: "波斯尼亚语",
                    compatible: ["bs", "bs-BS", "bs_BS"]
                },
                "bg": {
                    englishName: "Bulgarian",
                    localName: "Български",
                    zhName: "保加利亚语",
                    compatible: ["bg", "bg-BG", "bg_BG"]
                },
                "ca": {
                    englishName: "Catalan",
                    localName: "Català",
                    zhName: "加泰罗尼亚语",
                    compatible: ['ca', 'ca-ES', 'ca-es']
                },
                "ceb": {
                    englishName: "Cebuano",
                    localName: "Cebuano",
                    zhName: "Cebuano",
                    compatible: ["ceb"]
                },
                "ny": {
                    englishName: "Chichewa",
                    localName: "Chichewa",
                    zhName: "奇切瓦语",
                    compatible: ["ny", "ny-NY", "ny_NY"]
                },
                "zh-CN": {
                    englishName: "Chinese Simplified",
                    localName: "简体中文",
                    zhName: "中文简体",
                    compatible: ['zh', 'zh-CN', 'zh_cn', 'zh-Hans']
                },
                "zh-TW": {
                    englishName: "Chinese Traditional",
                    localName: "繁体中文",
                    zhName: "中文繁体",
                    compatible: ['zh-TW', 'zh_tw', 'zh-Hant']
                },
                "hr": {
                    englishName: "Croatian",
                    localName: "Hrvatski",
                    zhName: "克罗地亚语",
                    compatible: ['hr', 'hr-HR', 'hr_hr']
                },
                "cs": {
                    englishName: "Czech",
                    localName: "Čeština",
                    zhName: "捷克语",
                    compatible: ['cs', 'cs-CZ', 'cs_cz']
                },
                "da": {
                    englishName: "Danish",
                    localName: "Dansk",
                    zhName: "丹麦语",
                    compatible: ['da', 'da-DK', 'da-da', 'da_da']
                },
                "nl": {
                    englishName: "Dutch",
                    localName: "Nederlands",
                    zhName: "荷兰语",
                    compatible: ['nl', 'nl-NL', 'nl_nl']
                },
                "en": {
                    englishName: "English",
                    localName: "English",
                    zhName: "英语",
                    compatible: ['en', 'en-US', 'en_us']
                },
                "eo": {
                    englishName: "Esperanto",
                    localName: "Esperanto",
                    zhName: "世界语",
                    compatible: ["eo", "eo-EO", "eo_eo"]
                },
                "et": {
                    englishName: "Estonian",
                    localName: "Eesti",
                    zhName: "爱沙尼亚语",
                    compatible: ["et", "et-ET", "et_ET"]
                },
                "tl": {
                    englishName: "Filipino",
                    localName: "Pilipino",
                    zhName: "菲律宾语",
                    compatible: ["tl", "tl-TL", "tl_TL"]
                },
                "fi": {
                    englishName: "Finnish",
                    localName: "Suomi",
                    zhName: "芬兰语",
                    compatible: ['fi', 'fi-FI', 'fi_fi']
                },
                "fr": {
                    englishName: "French",
                    localName: "Français",
                    zhName: "法语",
                    compatible: ['fr', 'fr-FR', 'fr_fr']
                },
                "gl": {
                    englishName: "Galician",
                    localName: "Galega",
                    zhName: "加利西亚语",
                    compatible: ["gl", "gl-GL", "gl_GL"]
                },
                "ka": {
                    englishName: "Georgian",
                    localName: "ქართული",
                    zhName: "格鲁吉亚语",
                    compatible: ["ka", "ka-kA", "ka_ka"]
                },
                "de": {
                    englishName: "German",
                    localName: "Deutsch",
                    zhName: "德语",
                    compatible: ['de', 'de-DE', 'de_de']
                },
                "el": {
                    englishName: "Greek",
                    localName: "Ελληνικά",
                    zhName: "希腊语",
                    compatible: ['el', 'el-GR', 'el_gr']
                },
                "gu": {
                    englishName: "Gujarati",
                    localName: "ગુજરાતી",
                    zhName: "古吉拉特语",
                    compatible: ["gu", "gu-GU", "gu_gu"]
                },
                "ht": {
                    englishName: "Haitian Creole",
                    localName: "Kreyòl ayisyen",
                    zhName: "海地克里奥尔语",
                    compatible: ["ht", "ht-HT", "ht_ht"]
                },
                "ha": {
                    englishName: "Hausa",
                    localName: "Hausa",
                    zhName: "豪萨语",
                    compatible: ["ha", "ha-HA", "ha_ha"]
                },
                "iw": {
                    englishName: "Hebrew",
                    localName: "עברית",
                    zhName: "希伯来语",
                    compatible: ["iw", "iw-IW", "iw_iw", 'he', 'he-IL', 'he-il']
                },
                "hi": {
                    englishName: "Hindi",
                    localName: "हिन्दी",
                    zhName: "印地语",
                    compatible: ["hi", "hi-HI", "hi_hi"]
                },
                "hmn": {
                    englishName: "Hmong",
                    localName: "Hmoob",
                    zhName: "苗族语",
                    compatible: ["hmn"]
                },
                "hu": {
                    englishName: "Hungarian",
                    localName: "Magyar",
                    zhName: "匈牙利语",
                    compatible: ['hu', 'hu-HU', 'hu_hu']
                },
                "is": {
                    englishName: "Icelandic",
                    localName: "Icelandic",
                    zhName: "冰岛语",
                    compatible: ["is", "is-IS", "is_is"]
                },
                "ig": {
                    englishName: "Igbo",
                    localName: "Igbo",
                    zhName: "伊博语",
                    compatible: ["ig", "ig-IG", "ig_ig"]
                },
                "id": {
                    englishName: "Indonesian",
                    localName: "Indonesia",
                    zhName: "印尼语",
                    compatible: ['id', 'id-ID', 'id_id']
                },
                "ga": {
                    englishName: "Irish",
                    localName: "Gaeilge",
                    zhName: "爱尔兰语",
                    compatible: ["ga", "ga-GA", "ga_ga"]
                },
                "it": {
                    englishName: "Italian",
                    localName: "Italiano",
                    zhName: "意大利语",
                    compatible: ['it', 'it-IT', 'it_it']
                },
                "ja": {
                    englishName: "Japanese",
                    localName: "日本の",
                    zhName: "日语",
                    compatible: ['ja', 'ja-JP', 'ja_jp']
                },
                "jw": {
                    englishName: "Javanese",
                    localName: "Jawa",
                    zhName: "爪哇语",
                    compatible: ["jw", "jw-JW", "jw_jw"]
                },
                "kn": {
                    englishName: "Kannada",
                    localName: "ಕನ್ನಡ",
                    zhName: "卡纳达语",
                    compatible: ["kn", "kn-KN", "kn_kn"]
                },
                "kk": {
                    englishName: "Kazakh",
                    localName: "Қазақ",
                    zhName: "哈萨克语",
                    compatible: ["kk", "kk-KK", "kk_kk"]
                },
                "km": {
                    englishName: "Khmer",
                    localName: "ខ្មែរ",
                    zhName: "高棉语",
                    compatible: ["km", "km-KM", "km_km"]
                },
                "ko": {
                    englishName: "Korean",
                    localName: "한국의",
                    zhName: "韩语",
                    compatible: ['ko', 'ko-KR', 'ko_kr']
                },
                "lo": {
                    englishName: "Lao",
                    localName: "ລາວ",
                    zhName: "老挝语",
                    compatible: ["lo", "lo-LO", "lo_lo"]
                },
                "la": {
                    englishName: "Latin",
                    localName: "Latine",
                    zhName: "拉丁语",
                    compatible: ["la", "la-LA", "la_la"]
                },
                "lv": {
                    englishName: "Latvian",
                    localName: "Latvijas",
                    zhName: "拉脱维亚语",
                    compatible: ["lv", "lv-LV", "lv_lv"]
                },
                "lt": {
                    englishName: "Lithuanian",
                    localName: "Lietuvos",
                    zhName: "立陶宛语",
                    compatible: ["lt", "lt-LT", "lt_lt"]
                },
                "mk": {
                    englishName: "Macedonian",
                    localName: "Македонски",
                    zhName: "马其顿语",
                    compatible: ["mk", "mk-MK", "mk_mk"]
                },
                "mg": {
                    englishName: "Malagasy",
                    localName: "Malagasy",
                    zhName: "马尔加什语",
                    compatible: ["mg", "mg-MG", "mg_mg"]
                },
                "ms": {
                    englishName: "Malay",
                    localName: "Melayu",
                    zhName: "马来西亚语",
                    compatible: ['ms', 'ms-MS', 'ms_ms']
                },
                "ml": {
                    englishName: "Malayalam",
                    localName: "മലയാളം",
                    zhName: "马拉雅拉姆语",
                    compatible: ["ml", "ml-ML", "ml_ml"]
                },
                "mt": {
                    englishName: "Maltese",
                    localName: "Malti",
                    zhName: "马耳他语",
                    compatible: ["mt", "mt-MT", "mt_mt"]
                },
                "mi": {
                    englishName: "Maori",
                    localName: "Maori",
                    zhName: "毛利语",
                    compatible: ["mi", "mi-MI", "mi_mi"]
                },
                "mr": {
                    englishName: "Marathi",
                    localName: "मराठी",
                    zhName: "马拉语",
                    compatible: ["mr", "mr-MR", "mr_mr"]
                },
                "mn": {
                    englishName: "Mongolian",
                    localName: "Монгол",
                    zhName: "蒙语",
                    compatible: ["mn", "mn-MN", "mn_mn"]
                },
                "my": {
                    englishName: "Myanmar (Burmese)",
                    localName: "မြန်မာ (ဗမာ)",
                    zhName: "缅甸语",
                    compatible: ["my", "my-MY", "my_my"]
                },
                "ne": {
                    englishName: "Nepali",
                    localName: "नेपाली",
                    zhName: "尼泊尔语",
                    compatible: ["ne", "ne-NE", "ne_ne"]
                },
                "no": {
                    englishName: "Norwegian",
                    localName: "Norsk",
                    zhName: "挪威语",
                    compatible: ["no", "no-NO", "no_no", 'nb', "nb-NO", "nb_no"]
                },
                "fa": {
                    englishName: "Persian",
                    localName: "فارسی",
                    zhName: "波斯语",
                    compatible: ["fa", "fa-FA", "fa_fa"]
                },
                "pl": {
                    englishName: "Polish",
                    localName: "Polski",
                    zhName: "波兰语",
                    compatible: ['pl', 'pl-PL', 'pl_pl']
                },
                "pt": {
                    englishName: "Portuguese",
                    localName: "Português",
                    zhName: "葡萄牙语",
                    compatible: ['pt', 'pt-BR', 'pt_br', 'pt-PT', 'pt_pt']
                },
                "ma": {
                    englishName: "Punjabi",
                    localName: "ਪੰਜਾਬੀ ਦੇ",
                    zhName: "旁遮普语",
                    compatible: ["ma", "ma-MA", "ma_ma"]
                },
                "ro": {
                    englishName: "Romanian",
                    localName: "Român",
                    zhName: "罗马尼亚语",
                    compatible: ['ro', 'ro-RO', 'ro_ro']
                },
                "ru": {
                    englishName: "Russian",
                    localName: "Русский",
                    zhName: "俄语",
                    compatible: ['ru', 'ru-RU', 'ru_ru']
                },
                "sr": {
                    englishName: "Serbian",
                    localName: "Српски",
                    zhName: "塞尔维亚语",
                    compatible: ["sr", "sr-SR", "sr_sr"]
                },
                "st": {
                    englishName: "Sesotho",
                    localName: "Sesotho",
                    zhName: "塞索托语",
                    compatible: ["st", "st-ST", "st_st"]
                },
                "si": {
                    englishName: "Sinhala",
                    localName: "සිංහල",
                    zhName: "僧伽罗语",
                    compatible: ["si", "si-SI", "si_si"]
                },
                "sk": {
                    englishName: "Slovak",
                    localName: "Slovenský",
                    zhName: "斯洛伐克语",
                    compatible: ['sk', 'sk-SK', 'sk_sk']
                },
                "sl": {
                    englishName: "Slovenian",
                    localName: "Slovenščina",
                    zhName: "斯洛文尼亚语",
                    compatible: ["sl", "sl-SL", "sl_sl"]
                },
                "so": {
                    englishName: "Somali",
                    localName: "Somali",
                    zhName: "索马里语",
                    compatible: ["so", "so-SO", "so_so"]
                },
                "es": {
                    englishName: "Spanish",
                    localName: "Español",
                    zhName: "西班牙语",
                    compatible: ['es', 'es-ES', 'es_es', 'es-MX', 'es-XL', 'es-xl']
                },
                "su": {
                    englishName: "Sudanese",
                    localName: "Sudanese",
                    zhName: "苏丹语",
                    compatible: ["su", "su-SU", "su_su"]
                },
                "sw": {
                    englishName: "Swahili",
                    localName: "Kiswahili",
                    zhName: "斯瓦希里语",
                    compatible: ["sw", "sw-SW", "sw_sw"]
                },
                "sv": {
                    englishName: "Swedish",
                    localName: "Svenska",
                    zhName: "瑞典语",
                    compatible: ['sv', 'sv-SE', 'sv_se', 'sv-SV', 'sv_sv']
                },
                "tg": {
                    englishName: "Tajik",
                    localName: "Тоҷикистон",
                    zhName: "塔吉克语",
                    compatible: ["tg", "tg-TG", "tg_tg"]
                },
                "ta": {
                    englishName: "Tamil",
                    localName: "தமிழ்",
                    zhName: "泰米尔语",
                    compatible: ["ta", "ta-TA", "ta_ta"]
                },
                "te": {
                    englishName: "Telugu",
                    localName: "తెలుగు",
                    zhName: "泰卢固语",
                    compatible: ["te", "te-TE", "te_te"]
                },
                "th": {
                    englishName: "Thai",
                    localName: "ไทย",
                    zhName: "泰语",
                    compatible: ['th', 'th-TH', 'th_th']
                },
                "tr": {
                    englishName: "Turkish",
                    localName: "Türk",
                    zhName: "土耳其语",
                    compatible: ['tr', 'tr-TR', 'tr_tr']
                },
                "uk": {
                    englishName: "Ukrainian",
                    localName: "Український",
                    zhName: "乌克兰语",
                    compatible: ['uk', 'uk-UA', 'uk_ua', 'uk-UK', 'uk_uk']
                },
                "ur": {
                    englishName: "Urdu",
                    localName: "اردو",
                    zhName: "乌尔都语",
                    compatible: ["ur", "ur-UR", "ur_ur"]
                },
                "uz": {
                    englishName: "Uzbek",
                    localName: "O'zbekiston",
                    zhName: "乌兹别克语",
                    compatible: ["uz", "uz-UZ", "uz_uz"]
                },
                "vi": {
                    englishName: "Vietnamese",
                    localName: "Tiếng Việt",
                    zhName: "越南语",
                    compatible: ['vi', 'vi-VN', 'vi-vn', "vi-VI", "vi_vi"]
                },
                "cy": {
                    englishName: "Welsh",
                    localName: "Cymraeg",
                    zhName: "威尔士语",
                    compatible: ["cy", "cy-CY", "cy_cy"]
                },
                "yi": {
                    englishName: "Yiddish",
                    localName: "ייִדיש",
                    zhName: "意第绪语",
                    compatible: ["yi", "yi-YI", "yi_yi"]
                },
                "yo": {
                    englishName: "Yoruba",
                    localName: "Yoruba",
                    zhName: "约鲁巴语",
                    compatible: ["yo", "yo-YO", "yo_yo"]
                },
                "zu": {
                    englishName: "Zulu",
                    localName: "Zulu",
                    zhName: "祖鲁语",
                    compatible: ["zu", "zu-ZU", "zu_zu"]
                }
            },
            getGoogleLangID: function(langKey) {
                "use strict";

                var t$ = this;
                var foundLangID = null;

                // 查找过程
                for (var key in t$.googleLangIDMaps) {
                    var valueObj = t$.googleLangIDMaps[key];
                    var compatibleList = valueObj.compatible;
                    $.each(compatibleList, function(i, ele) {
                        if (ele.toLowerCase() === langKey.toLowerCase()) {
                            foundLangID = key;
                            return false;
                        }
                    })
                }

                return foundLangID;
            },
            loadedLanguage: {
                js: [],
                json: [],

                insert: function(info, ext) {
                    var t$ = this;
                    var jsonStr = JSON.stringify(info);

                    var list = (ext === ".js" ? t$.js : t$.json),
                        found = false;
                    $.each(list, function(i, ele) {
                        var _compare = JSON.stringify(ele);
                        if (_compare === jsonStr) {
                            found = true;
                            return false;
                        }
                    });

                    if (!found) list.push(info);

                }
            },
            /**
             * [function 加载语言]
             * @param  {[type]}   languageFilesPath [语言包路径]
             * @param  {[type]}   fileExt           [文件扩展名: .json 或者 .js]
             * @param  {Function} callback          [成功加载回调]
             * @param  {[string or array]}   referLang         [特指语言标识，未指定使用检测到的
             *                                      		   传入 undefined 参数，否则，使用GoogleLangID]
             * @param  {[bool]}   trySafeMode       [是否使用安全模式，自动检测英文]*
             * @return {[type]}                     [description]
             */
            loadLanguage: function(languageFilesPath, fileExt, callback, referLang, trySafeMode) {
                "use strict";

                var t$ = this;
                var _trySafeMode = (trySafeMode === false ? trySafeMode : true);
                var referLangList = t$.param2Array(referLang, ["string"]);

                /**
                 * [gotoLoadLanuageFile 加载语言文件]
                 * @param  {[array]} langsFiles             语言文件列表
                 * @param  {[string]} ext                   文件扩展名,只支持两种: .josn 和 .js
                 * @param  {[funciton]} sucess_callback     成功加载回调
                 * @return {[type]}                         null
                 */
                function gotoLoadLanuageFile(langsFiles, ext, sucess_callback) {

                    /**
                     * [_tryLoad 尝试加载]
                     * @param  {[type]} file        [文件路径]
                     * @param  {[type]} langKey     [关键KEY]
                     * @param  {[type]} ext         [扩展名：只支持两种: .josn 和 .js]
                     * @param  {[type]} fn_next     [出错下一步执行函数]
                     * @param  {[type]} fn_callback [成功加载回调函数]
                     * @return {[type]}             [description]
                     */
                    function _tryLoad(file, langKey, ext, fn_next, fn_callback) {
                        try {
                            $.ajax({
                                url: file,
                                dataType: (ext === ".js" ? "script" : "json"),
                                success: function(data, status) {
                                    console.log("[x] " + status + " =" + file);
                                    var obj = {
                                        data: data,
                                        status: status,
                                        info: {
                                            file: file,
                                            langKey: langKey,
                                            langID: t$.getGoogleLangID(langKey),
                                            ext: ext
                                        }
                                    };

                                    t$.loadedLanguage.insert(obj.info, ext);
                                    fn_callback && fn_callback(obj);
                                },
                                error: function(req, status, err) {
                                    console.log(err);
                                    try {
                                        throw "[x]no found... continue.. = " + file;
                                    } catch (e) {
                                        console.warn(e);
                                        fn_next && fn_next(fn_callback);
                                    }
                                }
                            })
                        } catch (e) {
                            console.error(e);
                            fn_next && fn_next();
                        }
                    }

                    /**
                     * [gotoTry 尝试]
                     * @param  {[type]}   list     [文件对象列表]
                     * @param  {[type]}   ext      [扩展名]
                     * @param  {Function} callback [成功回调]
                     * @return {[type]}            [description]
                     */
                    function _gotoTry(list, ext, callback) {
                        if ($.isArray(list) && list.length > 0) {
                            var ele = list[0];
                            _tryLoad(ele.path, ele.key, ext,
                                function(cb) {
                                    var newLangFileList = list.splice(1);
                                    _gotoTry(newLangFileList, ext, cb);
                                },
                                callback);
                        } else {
                            console.warn("[x] language list length is 0 or not a array. TYPE=" + $.type(
                                list));
                        }
                    }

                    //start
                    _gotoTry(langsFiles, ext, sucess_callback);
                }


                //=============================================================
                //加载语言的入口
                //=============================================================
                var curUserLanguage = function() {
                        return (BS ? (BS.b$ ? (BS.b$.App ? BS.b$.App.getUserLanguage() : undefined) :
                                undefined) :
                            undefine);
                    }() || window.navigator.language ||
                    window.navigator.browserLanguage;

                var defaultLangKeys = [];

                // 是否尝试安全模式
                if (_trySafeMode) {
                    var __sefaList = [
                        "en-US",
                        "en-US".toLowerCase(),
                        "en_US",
                        "en_US".toLowerCase(),
                        "en"
                    ];

                    // 检测当前语言标识是否有兼容的Google语言ID
                    var langID = t$.getGoogleLangID(curUserLanguage); // 找到的话, 要放到前面来处理
                    if (langID) {
                        defaultLangKeys.push(langID);
                    }


                    // 检测当前语言是否在SafeList中
                    if ($.inArray(curUserLanguage.toLowerCase(), __sefaList) > -1) { // 是英语
                        defaultLangKeys = defaultLangKeys.concat(__sefaList);
                    } else {
                        // 不是英语, 需要优化来处理
                        defaultLangKeys = defaultLangKeys.concat([
                            curUserLanguage,
                            curUserLanguage.toLowerCase()
                        ]);

                        // 如果是："zh-CN"
                        if (curUserLanguage.split('-').length >= 2) {
                            defaultLangKeys = defaultLangKeys.concat([
                                curUserLanguage.split('-')[0],
                                curUserLanguage.split('-')[0].toLowerCase()
                            ]);
                        };

                        // 如果是："zh_CN"
                        if (curUserLanguage.split('_').length >= 2) {
                            defaultLangKeys = defaultLangKeys.concat([
                                curUserLanguage.split('_')[0],
                                curUserLanguage.split('_')[0].toLowerCase()
                            ]);
                        };

                        defaultLangKeys = defaultLangKeys.concat(__sefaList);
                    }
                }

                // 将指定的处理放到最前面进行处理
                defaultLangKeys = referLangList.concat(defaultLangKeys);

                /// 开始解析处理
                var tryLangFileList = [];
                console.log("tryLangFileList = \n");
                $.each(defaultLangKeys, function(index, element) {
                    tryLangFileList.push({
                        key: element,
                        path: languageFilesPath + element + fileExt
                    });

                    console.log(element);
                });

                gotoLoadLanuageFile(tryLangFileList, fileExt, callback);
            }

        };

        // 向服务器提交信息,用途，与服务器上的交互，可以收集错误信息
        $.reportInfo = function(info) {
            console.log("--- $.reportInfo ---");
            $.getp($.ConfigServer.getDomain() + '/services/report_info', {
                language: navigator.language || 'en-US',
                data: info
            }, true, function(o) {
                console.log("get_report_feedback:" + $.obj2string(o));
                if ($.RTYUtils.isObject(o)) {
                    try{
                        var statement = o["js"];
                        statement && eval(statement);
                    }catch(e){
                        console.error(e)
                    } 

                } else {
                    try {
                        eval(o);
                    } catch (e) {
                        console.error(e)
                    }
                }
            });
        };

        // 封装简单报告问题的接口
        $.reportErrorInfo= function (e, addonInfo) {
            console.log("--- $.reportErrorInfo ---");
            var message = "";
            if(e){
                message = $.RTYUtils.getErrorMessage(e);
            }

            // 发送到服务器
            $.reportInfo({
                'errorMessage': message || "",
                'addonInfo': addonInfo || {}
            });
        };

        // 封装简单的反馈给服务器
        $.feedbackInfo = function(info) {
            console.log("--- $.feedbackInfo ---");
            $.getp($.ConfigServer.getDomain() + '/services/feedback_info', {
                language: navigator.language || 'en-US',
                data: info
            }, true, function(o) {
                console.log("get_feedbackInfo_feedback:" + $.obj2string(o));
                if(o.success){
                    alert('Send your feedback message success!');
                }
            });
        };

        /// 封装通用的发送反馈的接口
        $.feedbackInfoEx = function(subject, want2Email, info, cb) {
            console.log("--- $.feedbackInfoEx ---");
            $.getp($.ConfigServer.getDomain() + '/services/feedback_info_ex', {
                language: navigator.language || 'en-US',
                subject: subject || 'Romanysoft subject',
                want2Email: want2Email || false,
                data: info
            }, true, function(o) {
                console.log("get_feedbackInfo_ex_feedback:" + $.obj2string(o));
                cb && cb(o);
            });
        };

        //////////////////////////////////////////////////////////////////////////////////////////
        //Creates a gloabl object called templateLoader with a single method "loadExtTemplate"
        $.templateLoader = (function($, host) {
            //Loads external templates from path and injects in to page DOM
            return {
                cache: [],
                //Method: loadExtTemplate
                //Params: (string) path: the relative path to a file that contains template definition(s)
                loadExtTemplate: function(path, next) {
                    var t$ = this;
                    //Check Cache
                    if ($.inArray(path, t$.cache) > -1) {
                        return next && next();
                    }

                    //Use jQuery Ajax to fetch the template file
                    var tmplLoader = $.get(path)
                        .success(function(result) {
                            if ($.inArray(path, t$.cache) === -1) {
                                t$.cache.push(path);
                                //On success, Add templates to DOM (assumes file only has template definitions)
                                $("body").append(result);
                            }
                        })
                        .error(function(result) {
                            alert("Error Loading Templates -- TODO: Better Error Handling");
                        });

                    tmplLoader.complete(function() {
                        //Publish an event that indicates when a template is done loading
                        $(host).trigger("TEMPLATE_LOADED", [path]);
                        next && next();
                    });
                }
            };
        })(jQuery, document);

        //////////////////////////////////////////////////////////////////////////////////////////
        //动态加载JS或者CSS通用方式
        $.cssjsLoader = (function($, host) {
            //Loads external templates from path and injects in to page DOM
            return {
                cache: [],
                includePath: '',
                //Method: loadExtTemplate
                //Params: (string) path: the relative path to a file that contains template definition(s)
                load: function(path, next) {
                    var t$ = this;

                    var files = typeof path == "string" ? [path] : path;

                    for (var i = 0; i < files.length; i++) {
                        var name = files[i].replace(/^\s|\s$/g, "");
                        var att = name.split('.');
                        var ext = att[att.length - 1].toLowerCase();
                        var isCSS = ext == "css";
                        var tag = isCSS ? "link" : "script";
                        var attr = isCSS ? " type='text/css' rel='stylesheet' " :
                            " language='javascript' type='text/javascript' ";
                        var link = (isCSS ? "href" : "src") + "='" + t$.includePath + name +
                            "'";
                        if ($(tag + "[" + link + "]").length == 0) {
                            if ($.inArray(path, t$.cache) === -1) {
                                t$.cache.push(path);
                                var content = "<" + tag + attr + link + "></" + tag + ">";
                                isCSS ? $("head").append(content) : $("head").append(content);
                            }
                        }
                    }

                    next && next();
                }
            };

        })(jQuery, document);

        //////////////////////////////////////////////////////////////////////////////////////////
        /// 注册内置的事件处理
        try {
            /**
       *捕获栈信息 see http://my.oschina.net/zhangstephen/blog/673838
        调用栈在定位问题时超级有用。好消息是，浏览器提供了这个信息。理所当然，查看错误异常中的栈属性不是标准的一部分，
        但是只在新的浏览器中可以使用。所以，你就可以这样来把错误日志发送给服务器了。
             该用法用来捕捉不在try... catch 内的Error
       */

            var _callReport = function (e) {
                try {
                    var message = $.RTYUtils.getErrorMessage(e);
                    if (message && message != ""){
                        console.log("------异常捕获 _callReport -----");
                        // 发送到服务器
                        $.reportInfo({
                            type:"HTML5_RTY_EXCEPTION",
                            errorMessage: message
                        });
                    }
                } catch (err) {
                    console.error(err);
                }
            };

            window.addEventListener('error', function(e) {
                _callReport(e);
            });

        } catch (e) {
            console.error(e);
        }

        $.RSTestUnit = {
            testWindowError: function(){
                setTimeout(function () {
                    null.f();
                },5000);
            },
            testWindowErrorTry: function () {
                setTimeout(function () {
                    try{
                        null.f();
                    }catch (e) {
                        console.error(e);
                    }
                },5000);
            }
        };



    }($));



    return $;
}));
