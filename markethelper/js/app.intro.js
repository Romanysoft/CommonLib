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
            "debugMode"     : 1,
            "showFPS"       : 0,
            "frameRate"     : 60,
            "id"            : "suface-cocoa",
            "renderMode"    : 1,
            "jsList"        : []
        };
        
        cc.game.onStart = function(){

            //load resources
            cc.LoaderScene.preload(["images/markethelper/intro/HelloWorld.png"], function () {
                var MyScene = cc.Scene.extend({
                    onEnter:function () {
                        this._super();
                        var size = cc.director.getWinSize();
                        var sprite = cc.Sprite.create("images/markethelper/intro/HelloWorld.png");
                        sprite.setPosition(size.width / 2, size.height / 2);
                        sprite.setScale(0.8);
                        this.addChild(sprite, 0);

                        var label = cc.LabelTTF.create("Hello World", "Arial", 40);
                        label.setPosition(size.width / 2, size.height / 2);
                        this.addChild(label, 1);
                    }
                });
                cc.director.runScene(new MyScene());
            }, this);
        };
        cc.game.run("suface-cocoa");
    };

    _U.launch = function (e) {
        var t$ = this;
        t$.loadTemplate(function(){
            t$.initWithCocos2d(e);             
        });

    };

    //-----------------------------------------------------------------------------------------------------------------
    //绑定可识别的消息
    _MC.register("app.intro.init", function(e) {_U.launch()});

    window.UI.c$ = $.extend(window.UI.c$, c$);
}());