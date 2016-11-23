/**
 * Created by Ian on 2016/9/16.
 */

(function() {

  /// 本单元的处理
  var _U = {};
  _U.data = [];
  _U.types = ["上线", "Demo"];
  _U.platform = ["Mac", "Win", "Linux"];

  _U.tp = function(data) {
    var o = {
      types: _U.types[1], // 是否上线
      id: "", // 产品唯一ID
      productName: "", // 产品名称
      srcdir: "", // Public开发路径
      devdir: "", // Xcode 源码开发路径
      appstoreUrl: "", // 苹果应用商店链接
      appstroePrice: 0, // 苹果应用商店价格
      officialPrice: 0, // 官方售价
      officialUrl: "", // 官方站点
      hasPromo: false, // 是否有促销
      platforms: _U.platform[0], // 涉及的平台


      demoName: "", // 参照Demo名称
      demoUrl: "", // 参照Demo URL
      reference: [], // 参照
      partnerID: "00", // 关联的合作者, 默认是官方的,
      partnerName: "00", // 关联合作者的名称
      remark: "", // 备注
      nextCTime: 0 // 下一次提交时间
    };

    return $.extend(o, data);
  };

  ////////////////////////////////////////////////////
  ////// 官方产品
  ////////////////////////////////////////////////////


  _U.data.push(_U.tp({
    types: _U.types[0],
    productName: "SpeedTest",
    srcdir: "/d/workspace/testprj/0git_html/SpeedTest",
    devdir: "/Volumes/DataShareHFS2/2013projects/NativeSelf/SpeedTest",
    appstoreUrl: "https://itunes.apple.com/us/app/romanysoft-speed19x-check/id721474844?l=zh&ls=1&mt=12",
    appstroePrice: 6.99,
    officialPrice: 5.99,
    officialUrl: "https://romanysoft.github.io/SpeedTest/",
    hasPromo: true,
    platforms: _U.platform[0] + "," + _U.platform[1],

    /////////////////////////////////
    demoName: "SpeedTest",
    demoUrl: ""
  }));


  ////////////////////////////////////////////////////
  ////// 与开发者合作产品
  ////////////////////////////////////////////////////
  ///
  ///
  ///
  ///
  ///
  ///
  ///
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "FileLiveLine",
    srcdir: "/d/workspace/testprj/1git_html/FileLiveLine",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 9.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "损坏文件修复工具. ",
    demoUrl: "",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: "D10161024",
    remark: "分配给 曹亚男, 等待开始",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "FileDeadLine",
    srcdir: "/d/workspace/testprj/1git_html/FileDeadLine",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 9.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "损坏文件生成器. ",
    demoUrl: "http://www.egouz.com/topics/9662.html",
    reference: [{
      comment: "http://www.xnet.se/fd/",
      url: "http://www.xnet.se/fd/"
    }],
    partnerID: "D10161024",
    remark: "分配给 曹亚男, 等待开始",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "iconMaker",
    srcdir: "/d/workspace/testprj/1git_html/iconMaker",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "ICON制作工具. ",
    demoUrl: "http://www.egouz.com/topics/10196.html",
    reference: [{
      comment: "http://freeiconmaker.com/",
      url: "http://freeiconmaker.com/"
    }],
    partnerID: "",
    remark: "",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "EnglishAfter",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "英语语法检测工具. 有源码，服务器是java",
    demoUrl: "http://www.egouz.com/topics/10952.html",
    reference: [{
      comment: "http://www.afterthedeadline.com/development.slp",
      url: "http://www.afterthedeadline.com/development.slp"
    }, {
      comment: "https://open.afterthedeadline.com/",
      url: "https://open.afterthedeadline.com/"
    }],
    partnerID: "",
    remark: "",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "网页,文章，PDF批注分享工具",
    demoUrl: "http://www.egouz.com/topics/11011.html",
    reference: [{
      comment: "http://pith.li/",
      url: "http://pith.li/"
    }],
    partnerID: "",
    remark: "",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "eBookMarkr",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "eBookMarkr, 电子书转换发布平台",
    demoUrl: "http://www.egouz.com/topics/11084.html",
    reference: [{
      comment: "http://www.uberflip.com/ebook",
      url: "http://www.uberflip.com/ebook"
    }],
    partnerID: "",
    remark: "",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "PicsMarkr",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "PicsMarkr, 批量图片添加水印工具",
    demoUrl: "http://www.egouz.com/topics/11107.html",
    reference: [{
      comment: "http://picmarkr.com/",
      url: "http://picmarkr.com/"
    }],
    partnerID: "",
    remark: "",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "EveConverter",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "EveConverter, 文件类型转换器. 设置所有文件类型的转换器",
    demoUrl: "https://cloudconvert.com/formats",
    reference: [

    ],
    partnerID: "",
    remark: "",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "网站检测工具：(1) 是否宕机？ (2) 是否被墙？ 后续集成 在线网络诊断工具大全NWTools",
    demoUrl: "http://www.egouz.com/topics/11324.html",
    reference: [{
      comment: "http://isup.me/",
      url: "http://isup.me/"
    }, {
      comment: "http://www.egouz.com/topics/11334.html",
      url: "http://www.egouz.com/topics/11334.html"
    }, {
      comment: "http://nwtools.com/",
      url: "http://nwtools.com/"
    }, ],
    partnerID: "",
    remark: "",
    nextCTime: 0 // 下一次提交时间
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "NumSysConverter",
    srcdir: "/d/workspace/testprj/1git_html/NumSysConverter",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_NumSysConverter/",
    appstoreUrl: "https://itunes.apple.com/us/app/numsysconverter/id1178598049?l=zh&ls=1&mt=12",
    appstroePrice: 4.99,
    officialPrice: 4.99,
    officialUrl: "https://romanysoft.github.io/NumSysConverter",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "进制相互转换工具:(1) 支持常用进制；(2) 支持指定源的进制。例如：输入源为16进制",
    demoUrl: "http://tool.lu/hexconvert/",
    reference: [],
    partnerID: "D14161027",
    remark: "已经分配给魏鑫鑫",
    nextCTime: 20161114 // 下一次提交时间
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "下载链接检测工具，支持链接转换，查找真实的地址。(1)种子分析  (2)后续可以集成，安全检测",
    demoUrl: "http://tool.lu/urlconvert/",
    reference: [{
      comment: "在线下载链接转换，迅雷、旋风、快车",
      url: "http://tool.lu/urlconvert/"
    }, {
      comment: "种子分析 ",
      url: "http://tool.lu/torrent/"
    }, {
      comment: "Ease Link ",
      url: "https://addons.mozilla.org/en-US/firefox/addon/ease-link/?src=search"
    }, ],
    partnerID: "",
    remark: ""
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "网页转换成Markdown工具: 集成：明文HTML转换成Markdown，(2)输入，打开网站，指定部分，可以转换Markdown。 （3）支持保存.md 文件",
    demoUrl: "http://tool.lu/markdown/",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: "",
    remark: ""
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "汉字拼音助手：\n 功能：集成简单的汉字转拼音，带音调，（1）可以生成拼音汉字的对应文章（可以导出）（2）具备自动校验输出的拼音的功能 （3）可以通过拼音生成文字 后续版本：（1） 集成翻译功能。 拼音翻译成自己国家的语言",
    demoUrl: "http://tool.lu/py5bconvert/",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: "",
    remark: ""
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "NumberHelper",
    srcdir: "/d/workspace/testprj/1git_html/NumberHelper",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_NumberHelper/",
    appstoreUrl: "https://itunes.apple.com/us/app/numberhelper/id1178977756?l=zh&ls=1&mt=12",
    appstroePrice: 4.99,
    officialPrice: 4.99,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "数字助手。数字转本地语言。（涉及金钱、其他领域） 功能：第一版，支持中文简体、繁体、香港、澳门等地区，第二版本，其他国家，可以选择国家。",
    demoUrl: "https://github.com/cnwhy/nzh  http://cnwhy.github.io/nzh/demo/index.html",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: "D13161027",
    remark: "分配给赵红云，讨论草图，定于2016年11月21日提交Ver1.0 \n",
    nextCTime: 20161120
  }));

  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "JSON Maker可视化编辑器: 集成在线代码编辑,集成新建文档,保存,打开,JSON数据校验,修复. 生成JSON数据",
    demoUrl: "http://www.sojson.com/simple_json.html",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: ""
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "ico 图片生成器. 主要功能:可以自定义生成的尺寸",
    demoUrl: "http://www.atool.org/ico.php",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: ""
  }));
  ///
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "Round Corner Image 透明圆角图片. ",
    demoUrl: "http://www.atool.org/roundcorner.php",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: ""
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "YouGet:命令行式下载工具, 功能：YouGet:命令行式下载工具. YouGet 是由一位编程高手开发的采用命令行操作来从热门的网站如youtube、Youku, Niconico等站点下载图片、视频、音频等资源，无需浏览器和软件即可快速完成下载任务。目前支持74个站点，国内和国外的站点统统都有。",
    demoUrl: "https://you-get.org/",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: ""
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "GIF Helper Pro, 功能：集成图片生成GIF, 集成Video To GIF, 集成GIF Resize, 集成GIF Crop, 集成GIF Optimizer, 集成GIF Effects, 集成GIF Splite",
    demoUrl: "http://ezgif.com/maker", // EzGif 网站是一个提供在线编辑GIF动画图片的工具，无需安装任何软件即可在线编辑动态的GIF图片，提供创建、调整大小、剪裁、反向、优化等编辑工具，同时也支持对Gif图片的拆分服务。
    reference: [{
      comment: "Make a Gif",
      url: "http://ezgif.com/maker"
    }, {
      comment: "Video to Gif",
      url: "http://ezgif.com/video-to-gif"
    }, {
      comment: "GIF Resize",
      url: "http://ezgif.com/resize"
    }, {
      comment: "GIF Crop",
      url: "http://ezgif.com/crop"
    }, {
      comment: "GIF Optimizer",
      url: "http://ezgif.com/optimize"
    }, {
      comment: "GIF Effects",
      url: "http://ezgif.com/effects"
    }, {
      comment: "GIF Splite",
      url: "http://ezgif.com/split"
    }, {
      comment: "GifRun 网站",
      url: "https://gifrun.com/"
    }, {
      comment: "GIF动画导出",
      url: "http://gifprint.com/"
    }, ],
    partnerID: ""
  }));
  ///
  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "条形码识别App, 功能：识别出条形码的类型，分解条形码各部分的内容 要求：使用nodejs来处理。后面，要对这些文字，有操作，转译或者翻译。 制作成插件，可用于自动修正，识别错误，测试等环节",
    demoUrl: "",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: ""
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "语音识别App, 功能：识别语音上的文字。 要求：使用nodejs来处理。后面，要对这些文字，有操作，转译或者翻译。 制作成插件，可用于自动修正，识别错误，测试等环节",
    demoUrl: "",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: ""
  }));

  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 4.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "图片文字识别App, 功能：识别图片上的文字。 要求：使用nodejs来处理。后面，要对这些文字，有操作，转译或者翻译。 制作成插件，可用于自动修正，识别错误，测试等环节",
    demoUrl: "https://github.com/naptha/tesseract.js",
    reference: [{
      comment: "tesseract.js 库",
      url: "https://github.com/naptha/tesseract.js"
    }],
    partnerID: ""
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "/d/workspace/testprj/1git_html/9GridApp",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 9.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "九宫格手势生成App, 功能：随机生成，用户绘制，保存，查询, 样例库",
    demoUrl: "http://www.jq22.com/jquery-info5351  http://www.jq22.com/jquery-info4240",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: "D16161109",
    remark: "分配给袁成，讨论草图，定于2016年11月29日提交Ver1.0 \n",
    nextCTime: 20161129
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "ExcelFix",
    srcdir: "/d/workspace/testprj/1git_html/ExcelFix",
    devdir: "",
    appstoreUrl: "",
    appstroePrice: 9.99,
    officialPrice: 9.99,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "Excel 修复工具，需要集成Python或者Nodejs或Go插件",
    demoUrl: "http://www.stellarinfo.com/mac-software/pdf-repair-mac.php",
    reference: [{
      comment: "",
      url: ""
    }],
    partnerID: ""
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",

    /////////////////////////////////
    demoName: "PDF修复工具，需要集成Python或者Nodejs或Go插件",
    demoUrl: "http://www.stellarinfo.com/mac-software/pdf-repair-mac.php",
    reference: [{
      comment: "C语言mupdf的修复源码",
      url: "https://github.com/lgchmomo/mupdf/blob/master/mupdf/pdf_repair.c"
    }],
    partnerID: ""
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",

    /////////////////////////////////
    demoName: "基于PDF.js制作PDF工具", // find application path by name (OS X)
    demoUrl: "https://github.com/mozilla/pdfjs-dist    https://github.com/mozilla/pdf.js/ ",
    partnerID: ""
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "AppFinder",
    srcdir: "/d/workspace/testprj/1git_html/AppFinder",
    devdir: "",
    appstoreUrl: "",

    /////////////////////////////////
    demoName: "AppFinder", // find application path by name (OS X)
    demoUrl: "https://pypi.python.org/pypi/app-find/0.0.12",
    partnerID: "D10161024"
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "Pixel Assistant",
    srcdir: "/d/workspace/testprj/1git_html/PixelAssistant",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_PixelAssistant/",
    appstoreUrl: "https://itunes.apple.com/us/app/pixel-assistant/id1178629188?l=zh&ls=1&mt=12",
    appstroePrice: 4.99,
    officialPrice: 4.99,
    officialUrl: "https://romanysoft.github.io/PixelAssistant",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "PXtoEM", // 像素与Em互转
    demoUrl: "http://pxtoem.com/",
    partnerID: "D15161031"
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "Loudspeaker",
    srcdir: "/d/workspace/testprj/1git_html/Loudspeaker",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_Loudspeaker/",
    appstoreUrl: "https://itunes.apple.com/us/app/loudspeaker/id1172158307?l=zh&ls=1&mt=12",
    appstroePrice: 3.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],


    /////////////////////////////////
    demoName: "音箱分频器在线计算公式",
    demoUrl: "http://www.99cankao.com/electronic/yinxiangfenpinqi.php",
    partnerID: "D14161027"
  }));

  _U.data.push(_U.tp({
    types: _U.types[0],
    productName: "MayanCalendarCalculator",
    srcdir: "/d/workspace/testprj/1git_html/MayanCalendar/public",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_MayanCalendarCalculator/",
    appstoreUrl: "https://itunes.apple.com/us/app/mayancalendarcalculator/id1171669158?l=zh&ls=1&mt=12",
    appstroePrice: 0.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: true,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "玛雅日历计算器",
    demoUrl: "http://www.99cankao.com/date/mayan-calendar.php",
    partnerID: "D13161027"
  }));


  _U.data.push(_U.tp({
    types: _U.types[1],
    productName: "",
    srcdir: "",
    devdir: "",
    appstoreUrl: "",

    /////////////////////////////////
    demoName: "两点间距离图像计算器",
    demoUrl: "http://www.99cankao.com/algebragraph/interactive-graph-distance.php",
    partnerID: "D12161027"
  }));


  _U.data.push(_U.tp({
    types: _U.types[0],
    productName: "ComparatorHysteresesCalculator",
    srcdir: "testprj/1git_html/ComparatorHysteresesCalculator",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_ComparatorHysteresesCalculator/",
    appstoreUrl: "https://itunes.apple.com/us/app/comparatorhysteresescalculator/id1170360001?l=zh&ls=1&mt=12",
    appstroePrice: 0,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: false,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "迟滞比较器计算",
    demoUrl: "http://www.99cankao.com/electronic/chizhi.php",
    partnerID: "D10161024"
  }));

  _U.data.push(_U.tp({
    types: _U.types[0],
    productName: "SimilarColorPicker",
    srcdir: "/testprj/1git_html/SimilarColorPicker",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_SimilarColorPicker",
    appstoreUrl: "https://itunes.apple.com/us/app/similar-color-picker/id1170384077?l=zh&ls=1&mt=12",
    appstroePrice: 0,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: false,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "相近颜色取色计算器",
    demoUrl: "http://www.99cankao.com/colorconverter/color_close.php",
    partnerID: "D9161024"
  }));

  _U.data.push(_U.tp({
    types: _U.types[0],
    productName: "WheastoneBridgeCalculator",
    srcdir: "testprj/1git_html/WheastoneBridgeCalculator",
    devdir: "/Volumes/DataShareHFS2/2013projects/Bus/p_WheastoneBridgeCalculator",
    appstoreUrl: "https://itunes.apple.com/us/app/wheastonebridgecalculator/id1152151873?l=zh&ls=1&mt=12",
    appstroePrice: 0.99,
    officialPrice: 0,
    officialUrl: "",
    hasPromo: false,
    platforms: _U.platform[0],

    /////////////////////////////////
    demoName: "WheastoneBridgeCalculator",
    demoUrl: "http://www.99cankao.com/electronic/huisideng.php",
    partnerID: "D8160908"
  }));


  window["rty_resources_dataobj"] = _U;
  return _U;

})();
