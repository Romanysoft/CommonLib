///
/// 合作内容介绍

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
        $.templateLoader.loadExtTemplate("markethelper/templates/tpl.app.intro.htm", function(){
            cb && cb();
        })
    };

    /// 使用Kendo进行绘制
    _U.initWithKendo = function(e){
        var dataviz = kendo.dataviz;
        var geom = kendo.geometry;
        var Point = geom.Point;
        var draw = kendo.drawing;
        var Path = draw.Path;
        var Text = draw.Text;
        var Group = draw.Group;
        var Rect = draw.Rect;
        var Circle = draw.Circle;
        var Arc = draw.Arc;

        function initSurface(type) {
            return draw.Surface.create($("#surface"), { type: type });
        }      

        function createElements() {
            var container = new Group();

            path = new Path({
                fill: {
                    color: "#E4141B"                    
                },
                tooltip: {
                    content: "Hi, I am a path"                    
                },
                transform: geom.transform().translate(-50, 150).rotate(-45)
            }).moveTo(50, 50)
            .lineTo(50, 150)
            .curveTo([60, 50],
                [100, 50],
                [130, 150])
            .lineTo(130, 50)
            .lineTo(50, 50);

            var group = new Group({
                tooltip: {
                    shared: true,
                    content: "Hi, I am a group",
                    autoHide: false,
                    position: "right"            
                },
                transform: geom.transform().translate(200, 100)
            });

            group.append(new Rect(new geom.Rect([0, 0], [100, 100]), {
                fill: {
                    color: "#E4141B"
                }
            }));

            group.append(new Circle(new geom.Circle([50, 50], 50), {
                fill: {
                    color: "blue"
                }
            }));

            group.append(new Text("Group Text", [20, 40], {
                fill: {
                    color: "#fff"
                }
            }));

            var circle = new Circle(new geom.Circle([460, 150], 50), {
                fill: {
                    color: "#E4141B"
                },
                tooltip: {
                    content: "Hi, I am a circle",
                    position: "bottom"                    
                }
            });

            var arc = new Arc(new geom.Arc([710, 150], { radiusX: 100, radiusY: 50, startAngle: 50, endAngle: 280 }), {
                fill: {
                    color: "#E4141B"                    
                },
                tooltip: {
                    content: "Hi, I am an arc",
                    position: "left" 
                }
            });

            var rect = new Rect(new geom.Rect([850, 100], [100, 100]), {
                fill: {
                    color: "#E4141B"
                },
                tooltip: {
                    content: "Hi, I am a rectangle",
                    position: "cursor",
                    offset: 10
                }
            })

            container.append(path, group, circle, arc, rect);

            return container;
        }    

        var surface = initSurface();
        var group = createElements();
        surface.draw(group); 
    };

    /// 使用Cocos-2d 进行绘制
    _U.initWithCocos2d = function(e){
        document["ccConfig"] = {
            "debugMode"     : 0,
            "showFPS"       : 0,
            "frameRate"     : 60,
            "id"            : "suface-cocoa",
            "renderMode"    : 1,
            "jsList"        : []
        };
        
        cc.game.onStart = function(){

            var resList = [
                "images/markethelper/intro/users_96px.png",
                "images/markethelper/intro/Right_Arrow.png",
                "images/markethelper/intro/share_96px.png",
                "images/markethelper/intro/presentation_96px.png",
                "images/markethelper/intro/Earning_statement.png",
                "images/markethelper/intro/checklist_48px.png",
                "images/markethelper/intro/increase_48px.png",
                
            ];

            function runMainScene(){
                var MainScene = cc.Scene.extend({
                    onEnter:function () {
                        this._super();
                        var index = -1, fontSize = 30;

                        var action1 = new cc.ScaleTo(0.2, 0.6, 0.6);
                        var action2 = new cc.ScaleTo(0.5, 0.8, 0.8);

                        //// 设置事件监听器
                        var listener_scene_click_effec = cc.EventListener.create({
                             event: cc.EventListener.TOUCH_ONE_BY_ONE, 
                             swallowTouches: true, 
                             onTouchBegan: function (touch, event) {
                                var target = event.getCurrentTarget();
                                // 获取当前触摸点相对于按钮所在的坐标
                                var locationInNode = target.convertToNodeSpace(touch.getLocation());    
                                var s = target.getContentSize();
                                var rect = cc.rect(0, 0, s.width, s.height);

                                if (cc.rectContainsPoint(rect, locationInNode)) {        // 判断触摸点是否在按钮范围内
                                    target.runAction(action1);
                                    if(target.uitag === "Apply"){
                                        _MC.send('app.showApplyWindow');
                                    }else if(target.uitag === "Pays"){
                                        _MC.send('app.showPayHistoryWindow');
                                    }else if(target.uitag === "Setups"){
                                        _MC.send('app.showSetupsWindow');
                                    }else if(target.uitag === "E+C_Mode"){
                                        window.open("https://romanysoft.github.io/CommonLib/market-partners-ec");
                                    }
                                    return true;
                                }
                                return false;
                             },
                             onTouchMoved: function (touch, event) {
                             },
                             onTouchEnded: function (touch, event) {
                                var target = event.getCurrentTarget();
                                // 获取当前触摸点相对于按钮所在的坐标
                                var locationInNode = target.convertToNodeSpace(touch.getLocation());    
                                var s = target.getContentSize();
                                var rect = cc.rect(0, 0, s.width, s.height);

                                if (cc.rectContainsPoint(rect, locationInNode)) {        // 判断触摸点是否在按钮范围内
                                    target.stopAction(action1);
                                    target.runAction(action2);
                                    return true;
                                }
                                return false;                                 
                             }
                        });

                        var sprite, label;
                        var size = cc.director.getWinSize();
                        sprite = cc.Sprite.create("images/markethelper/intro/users_96px.png");
                        sprite.setPosition(96, size.height  - 96);
                        sprite.setScale(0.8);
                        sprite.uitag = "Apply";
                        this.addChild(sprite, ++index);
                        cc.eventManager.addListener(listener_scene_click_effec, sprite);

                        label = cc.LabelTTF.create("申请加入", "Arial", fontSize);
                        label.setPosition(196, size.height  - 96);
                        label.setFontFillColor(cc.color.BLACK);
                        label.setScale(0.8);
                        label.uitag = "Apply";
                        this.addChild(label, ++index);
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), label); 

                        sprite = cc.Sprite.create("images/markethelper/intro/Right_Arrow.png");
                        sprite.setPosition(296, size.height  - 96);
                        sprite.setScale(0.4);
                        this.addChild(sprite, ++index);  

                        sprite = cc.Sprite.create("images/markethelper/intro/share_96px.png");
                        sprite.setPosition(408, size.height  - 96);
                        sprite.setScale(0.8);
                        sprite.uitag = "SendShare";
                        this.addChild(sprite, ++index); 
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), sprite);    

                        label = cc.LabelTTF.create("转发产品推广链接", "Arial", fontSize);
                        label.setPosition(548, size.height  - 96);
                        label.setFontFillColor(cc.color.BLACK);
                        label.setScale(0.8);
                        label.uitag = "SendShare";
                        this.addChild(label, ++index); 
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), label);   

                        sprite = cc.Sprite.create("images/markethelper/intro/Right_Arrow.png");
                        sprite.setPosition(480, size.height  - 196);
                        sprite.setRotation(90);
                        sprite.setScale(0.4);
                        this.addChild(sprite, ++index);    

                        sprite = cc.Sprite.create("images/markethelper/intro/presentation_96px.png");
                        sprite.setPosition(408, size.height  - 296);
                        sprite.setScale(0.8);
                        sprite.uitag = "UsersOfStatistics";
                        this.addChild(sprite, ++index); 
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), sprite);  

                        label = cc.LabelTTF.create("统计有多少人访问链接", "Arial", fontSize);
                        label.setPosition(572, size.height  - 296);
                        label.setFontFillColor(cc.color.BLACK);
                        label.setScale(0.8);
                        label.uitag = "UsersOfStatistics";
                        this.addChild(label, ++index);  
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), label); 

                        sprite = cc.Sprite.create("images/markethelper/intro/Right_Arrow.png");
                        sprite.setPosition(512, size.height  - 372);
                        sprite.setRotation(45);
                        sprite.setScale(0.4);
                        this.addChild(sprite, ++index);                                                                                                                                 

                        sprite = cc.Sprite.create("images/markethelper/intro/Earning_statement.png");
                        sprite.setPosition(556, size.height  - 456);
                        sprite.setScale(0.8);
                        sprite.uitag = "Pays";
                        this.addChild(sprite, ++index);
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), sprite);  

                        label = cc.LabelTTF.create("每月结算并支付报酬", "Arial", fontSize);
                        label.setPosition(720, size.height  - 456);
                        label.setFontFillColor(cc.color.BLACK);
                        label.setScale(0.8);
                        label.uitag = "Pays";
                        this.addChild(label, ++index); 
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), label);    

                        sprite = cc.Sprite.create("images/markethelper/intro/checklist_48px.png");
                        sprite.setPosition(96, size.height  - 296);
                        sprite.setScale(0.8);
                        sprite.uitag = "Setups";
                        this.addChild(sprite, ++index);
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), sprite); 

                        label = cc.LabelTTF.create("学习步骤", "Arial", fontSize - 12);
                        label.setPosition(152, size.height  - 300);
                        label.setFontFillColor(cc.color.BLACK);
                        label.setScale(0.8);
                        label.uitag = "Setups";
                        this.addChild(label, ++index); 
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), label);    

                        sprite = cc.Sprite.create("images/markethelper/intro/increase_48px.png");
                        sprite.setPosition(96, size.height  - 360);
                        sprite.setScale(0.8);
                        sprite.uitag = "E+C_Mode";
                        this.addChild(sprite, ++index);
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), sprite);                                               

                        label = cc.LabelTTF.create("E+C模式", "Arial", fontSize - 12);
                        label.setPosition(152, size.height  - 360);
                        label.setFontFillColor(cc.color.BLACK);
                        label.setScale(0.8);
                        label.uitag = "E+C_Mode";
                        this.addChild(label, ++index); 
                        cc.eventManager.addListener(listener_scene_click_effec.clone(), label); 
                    }
                });
                cc.director.runScene(new MainScene());
            }


            //load resources
            // cc.LoaderScene.preload(resList, function () {

            // }, this);

            runMainScene();
        };
        cc.game.run("suface-cocoa");
    };

    _U.launch = function (e) {
        var t$ = this;
        t$.loadTemplate(function(){
            var useCocos = 1;
            if(useCocos){
                t$.initWithCocos2d(e)
            }else{
                t$.initWithKendo(e);
            }
                        
        });

    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.intro.init", function(e) {_U.launch()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());