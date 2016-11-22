(function($) {

    var _mac = " for Mac",
        _win = "  for Windows",
        _linux = " for Linux";

    $.RTY_productsMap = {
            "55399-1": {name:"Speed19X" + _mac, prices:"5.99", home:"https://romanysoft.github.io/SpeedTest/",  xxx:""},
            "55399-2": {name:"BarcodeUV" + _mac, prices:"35.99", home:"https://romanysoft.github.io/BarcodeUV/",  xxx:""},
            "55399-3": {name:"BarcodePro" + _mac, prices:"25.99", home:"https://romanysoft.github.io/BarcodePro/",  xxx:""},
            "55399-4": {name:"ANPDF" + _mac, prices:"7.99", home:"https://romanysoft.github.io/AN-PDF/",  xxx:""},
            "55399-5": {name:"ColorConverter" + _mac, prices:"7.99", home:"https://romanysoft.github.io/ColorConverter/",  xxx:""},
            "55399-6": {name:"CSSDesigner" + _mac, prices:"9.99", home:"https://romanysoft.github.io/CSSDesigner/",  xxx:""},
            "55399-8": {name:"GraphSketcher" + _mac, prices:"19.99", home:"https://romanysoft.github.io/GraphSketcher/",  xxx:""},
            "55399-9": {name:"CSVKiller" + _mac, prices:"29.99", home:"https://romanysoft.github.io/CSVKiller/",  xxx:""},
            "55399-10": {name:"TryToMp3" + _mac, prices:"4.99", home:"https://romanysoft.github.io/TryToMp3/",  xxx:""},
//            "55399-11": {name:"TryToAVI" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-12": {name:"TryToAC3" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-13": {name:"TryToMPG" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-14": {name:"TryToWav" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-15": {name:"TryToSWF" + _mac, prices:"15", home:"",  xxx:""},
            "55399-16": {name:"ImageMinify" + _mac, prices:"29.99", home:"https://romanysoft.github.io/ImageMinify/",  xxx:""},
            "55399-17": {name:"DataStorm" + _mac, prices:"36.99", home:"https://romanysoft.github.io/DataStorm/",  xxx:""},
            "55399-18": {name:"Batch File Translater" + _mac, prices:"32.99", home:"https://romanysoft.github.io/Batch-File-Translater/",  xxx:""},
//            "55399-19": {name:"5BR3C" + _mac, prices:"9.99", home:"",  xxx:""},
            "55399-20": {name:"ExifImage" + _mac, prices:"15.99", home:"https://romanysoft.github.io/ExifImage/",  xxx:""},
            "55399-21": {name:"SRT2" + _mac, prices:"9.99", home:"https://romanysoft.github.io/SRT2/",  xxx:""},
//            "55399-22": {name:"TryToFLV" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-23": {name:"TryToMp4" + _mac, prices:"15", home:"",  xxx:""},
            "55399-24": {name:"TryToAAC" + _mac, prices:"4.99", home:"https://romanysoft.github.io/TryToAAC/",  xxx:""},
//            "55399-25": {name:"TryToAIFF" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-26": {name:"TryToALAC" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-27": {name:"TryToAMR" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-28": {name:"TryToOGG" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-29": {name:"TryToOpus" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-30": {name:"TryToWMA" + _mac, prices:"15", home:"",  xxx:""},
//            "55399-31": {name:"Css Sprite Helper" + _win, prices:"", home:"",  xxx:""},
            "55399-32": {name:"MarkdownD" + _mac, prices:"15.99", home:"https://romanysoft.github.io/MarkdownD/",  xxx:""},
            "55399-33": {name:"SudokuMM" + _mac, prices:"5.99", home:"https://romanysoft.github.io/SudokuMM/",  xxx:""},
            "55399-34": {name:"Try to translate" + _mac, prices:"19.99", home:"https://romanysoft.github.io/Try-to-translate/",  xxx:""},
            "55399-35": {name:"CurrencyCalc" + _mac, prices:"9.99", home:"https://romanysoft.github.io/CurrencyCalc/",  xxx:""},
//            "55399-36": {name:"LET" + _mac, prices:"", home:"",  xxx:""},
            "55399-37": {name:"MarkdownD" + _win, prices:"15.99", home:"https://romanysoft.github.io/MarkdownD/",  xxx:""},
            "55399-38": {name:"MarkdownD" + _linux, prices:"15.99", home:"https://romanysoft.github.io/MarkdownD/",  xxx:""},
            "55399-39": {name:"Try to translate" + _win, prices:"19.99", home:"https://romanysoft.github.io/Try-to-translate/",  xxx:""},
            "55399-40": {name:"Try to translate" + _linux, prices:"19.99", home:"https://romanysoft.github.io/Try-to-translate/",  xxx:""},
            "55399-41": {name:"DataStorm" + _win, prices:"36.99", home:"https://romanysoft.github.io/DataStorm/",  xxx:""},
            "55399-42": {name:"DataStorm" + _linux, prices:"36.99", home:"https://romanysoft.github.io/DataStorm/",  xxx:""},
            "55399-43": {name:"XLS2csv" + _mac, prices:"19.99", home:"https://romanysoft.github.io/XLS2csv/",  xxx:""},
            "55399-44": {name:"CSSDesigner" + _win, prices:"9.99", home:"https://romanysoft.github.io/CSSDesigner/",  xxx:""},
            "55399-45": {name:"CSSDesigner" + _linux, prices:"9.99", home:"https://romanysoft.github.io/CSSDesigner/",  xxx:""},
            "55399-46": {name:"CSVEditorPro2" + _mac, prices:"39.99", home:"https://romanysoft.github.io/CSVEditorPro2/",  xxx:""},
            "55399-47": {name:"Speed19X" + _win, prices:"5.99", home:"https://romanysoft.github.io/SpeedTest/",  xxx:""},
//            "55399-48": {name:"Speed19X" + _win, prices:"5.99", home:"https://romanysoft.github.io/SpeedTest/",  xxx:""},
            "55399-49": {name:"Pixel Assistant" + _mac, prices:"4.99", home:"https://romanysoft.github.io/PixelAssistant/",  xxx:""}
    };


})($ || jQuery);
