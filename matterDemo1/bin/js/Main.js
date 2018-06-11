// 程序入口
var GameMain = (function () {
    function GameMain() {
        this.assetsJson = "config/preloadJson.json";
        Laya.init(640, 1136);
        //调试
        Laya.Stat.show();
        //初始化 舞台
        Laya.stage.alignH = Laya.Stage.ALIGN_TOP;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL; //竖屏
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL; //自动适配
        //加载
        Laya.loader.load([{ url: this.assetsJson, type: Laya.Loader.JSON }], Laya.Handler.create(this, this.loadRes));
    }
    GameMain.prototype.loadRes = function () {
        var a = Laya.loader.getRes(this.assetsJson);
        Laya.loader.load(a, Laya.Handler.create(this, this.complete));
    };
    GameMain.prototype.complete = function () {
        // new Scene();
        this.registerAll();
    };
    GameMain.prototype.registerAll = function () {
        new UImgr(); //初始化UI管理器
        new MatterMgr(); //初始化matterMgr
        //公共model 写在这里
        gamefacede.Facade.registerComModel(new SceneModel());
        //注册mediator
        gamefacede.Facade.registerMediator(new Scene());
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=Main.js.map