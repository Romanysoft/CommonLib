/**
 * Created by Ian on 2016/9/16.
 */

(function () {

    /// 本单元的处理
    var _U = {};
    _U.data = [];
    _U.types = ["上线", "Demo"];
	_U.platform = ["Mac", "Win", "Linux"];

    _U.tp = function(data){
        var o = {
			types:_U.types[1], // 是否上线
			id:"",             // 产品唯一ID
			productName:"",    // 产品名称
			srcdir:"",         // Public开发路径
			devdir:"",         // Xcode 源码开发路径
			appstoreUrl:"",    // 苹果应用商店链接
			appstroePrice:0,   // 苹果应用商店价格
			officialPrice:0,   // 官方售价
			officialUrl:"",    // 官方站点
			hasPromo: false,   // 是否有促销
			platforms: _U.platform[0], // 涉及的平台


			demoName:"", 	   // 参照Demo名称
			demoUrl:"",        // 参照Demo URL
            reference: [],     // 参照
			partnerID:"00",    // 关联的合作者, 默认是官方的,
			partnerName:"00"   // 关联合作者的名称
        };

        return $.extend(o, data);
    };

	////////////////////////////////////////////////////
	////// 官方产品
	////////////////////////////////////////////////////


    _U.data.push(_U.tp({
        types:_U.types[0],
        productName:"SpeedTest",
        srcdir:"/d/workspace/testprj/0git_html/SpeedTest",
        devdir:"/Volumes/DataShareHFS2/2013projects/NativeSelf/SpeedTest",
        appstoreUrl:"https://itunes.apple.com/us/app/romanysoft-speed19x-check/id721474844?l=zh&ls=1&mt=12",
		appstroePrice:6.99,
		officialPrice:5.99,
		officialUrl:"https://romanysoft.github.io/SpeedTest/",
		hasPromo: true,
		platforms: _U.platform[0] + "," + _U.platform[1],

		/////////////////////////////////
    }));


	////////////////////////////////////////////////////
	////// 与开发者合作产品
	////////////////////////////////////////////////////
	///
	///
	///
	///
    _U.data.push(_U.tp({
        types:_U.types[1],
        productName:"",
        srcdir:"",
        devdir:"",
        appstoreUrl:"",

        /////////////////////////////////
        demoName:"Excel 修复工具，需要集成Python或者Nodejs或Go插件",
        demoUrl:"http://www.stellarinfo.com/mac-software/pdf-repair-mac.php",
        reference:[
            {comment:"", url:""}
        ],
        partnerID:""
    }));


    _U.data.push(_U.tp({
        types:_U.types[1],
        productName:"",
        srcdir:"",
        devdir:"",
        appstoreUrl:"",

        /////////////////////////////////
        demoName:"PDF修复工具，需要集成Python或者Nodejs或Go插件",
        demoUrl:"http://www.stellarinfo.com/mac-software/pdf-repair-mac.php",
        reference:[
            {comment:"C语言mupdf的修复源码", url:"https://github.com/lgchmomo/mupdf/blob/master/mupdf/pdf_repair.c"}
        ],
        partnerID:""
    }));


    _U.data.push(_U.tp({
        types:_U.types[1],
        productName:"",
        srcdir:"",
        devdir:"",
        appstoreUrl:"",

		/////////////////////////////////
        demoName:"基于PDF.js制作PDF工具", // find application path by name (OS X)
        demoUrl:"https://github.com/mozilla/pdfjs-dist    https://github.com/mozilla/pdf.js/ ",
        partnerID:""
    }));


    _U.data.push(_U.tp({
        types:_U.types[1],
        productName:"",
        srcdir:"",
        devdir:"",
        appstoreUrl:"",

		/////////////////////////////////
        demoName:"AppFinder", // find application path by name (OS X)
        demoUrl:"https://pypi.python.org/pypi/app-find/0.0.12",
        partnerID:"D10161024"
    }));


    _U.data.push(_U.tp({
        types:_U.types[1],
        productName:"",
        srcdir:"",
        devdir:"",
        appstoreUrl:"",

		/////////////////////////////////
        demoName:"PXtoEM", // 像素与Em互转
        demoUrl:"http://pxtoem.com/",
        partnerID:"D15161031"
    }));


    _U.data.push(_U.tp({
        types:_U.types[1],
        productName:"Loudspeaker",
        srcdir:"/d/workspace/testprj/1git_html/Loudspeaker",
        devdir:"/Volumes/DataShareHFS2/2013projects/Bus/p_Loudspeaker/",
        appstoreUrl:"",
        appstroePrice:3.99,
		officialPrice:0,
		officialUrl:"",
		hasPromo: true,
		platforms: _U.platform[0],


		/////////////////////////////////
        demoName:"音箱分频器在线计算公式",
        demoUrl:"http://www.99cankao.com/electronic/yinxiangfenpinqi.php",
        partnerID:"D14161027"
    }));

    _U.data.push(_U.tp({
        types:_U.types[0],
        productName:"MayanCalendarCalculator",
        srcdir:"/d/workspace/testprj/1git_html/MayanCalendar/public",
        devdir:"/Volumes/DataShareHFS2/2013projects/Bus/p_MayanCalendarCalculator/",
        appstoreUrl:"https://itunes.apple.com/us/app/mayancalendarcalculator/id1171669158?l=zh&ls=1&mt=12",
		appstroePrice:0.99,
		officialPrice:0,
		officialUrl:"",
		hasPromo: true,
		platforms: _U.platform[0],

		/////////////////////////////////
        demoName:"玛雅日历计算器",
        demoUrl:"http://www.99cankao.com/date/mayan-calendar.php",
        partnerID:"D13161027"
    }));


    _U.data.push(_U.tp({
        types:_U.types[1],
        productName:"",
        srcdir:"",
        devdir:"",
        appstoreUrl:"",

		/////////////////////////////////
        demoName:"两点间距离图像计算器",
        demoUrl:"http://www.99cankao.com/algebragraph/interactive-graph-distance.php",
        partnerID:"D12161027"
    }));


    _U.data.push(_U.tp({
        types:_U.types[0],
        productName:"ComparatorHysteresesCalculator",
        srcdir:"testprj/1git_html/ComparatorHysteresesCalculator",
        devdir:"/Volumes/DataShareHFS2/2013projects/Bus/p_ComparatorHysteresesCalculator/",
        appstoreUrl:"https://itunes.apple.com/us/app/comparatorhysteresescalculator/id1170360001?l=zh&ls=1&mt=12",
		appstroePrice:0,
		officialPrice:0,
		officialUrl:"",
		hasPromo: false,
		platforms: _U.platform[0],

		/////////////////////////////////
        demoName:"迟滞比较器计算",
        demoUrl:"http://www.99cankao.com/electronic/chizhi.php",
        partnerID:"D10161024"
    }));

    _U.data.push(_U.tp({
        types:_U.types[0],
        productName:"SimilarColorPicker",
        srcdir:"/testprj/1git_html/SimilarColorPicker",
        devdir:"/Volumes/DataShareHFS2/2013projects/Bus/p_SimilarColorPicker",
        appstoreUrl:"https://itunes.apple.com/us/app/similar-color-picker/id1170384077?l=zh&ls=1&mt=12",
		appstroePrice:0,
		officialPrice:0,
		officialUrl:"",
		hasPromo: false,
		platforms: _U.platform[0],

		/////////////////////////////////
        demoName:"相近颜色取色计算器",
        demoUrl:"http://www.99cankao.com/colorconverter/color_close.php",
        partnerID:"D9161024"
    }));

    _U.data.push(_U.tp({
        types:_U.types[0],
        productName:"WheastoneBridgeCalculator",
        srcdir:"testprj/1git_html/WheastoneBridgeCalculator",
        devdir:"/Volumes/DataShareHFS2/2013projects/Bus/p_WheastoneBridgeCalculator",
        appstoreUrl:"https://itunes.apple.com/us/app/wheastonebridgecalculator/id1152151873?l=zh&ls=1&mt=12",
		appstroePrice:0.99,
		officialPrice:0,
		officialUrl:"",
		hasPromo: false,
		platforms: _U.platform[0],

		/////////////////////////////////
        demoName:"WheastoneBridgeCalculator",
        demoUrl:"http://www.99cankao.com/electronic/huisideng.php",
        partnerID:"D8160908"
    }));


	window["rty_resources_dataobj"] = _U;
    return _U;

})();
