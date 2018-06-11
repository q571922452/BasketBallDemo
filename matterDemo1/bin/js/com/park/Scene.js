var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this, Scene.NAME, []) || this;
        _this.sceneModel = _this.getCommodel(SceneModel.NAME);
        _this.initView();
        return _this;
    }
    Scene.prototype.initView = function () {
        this.park = new ParkView(this.getCommodel(SceneModel.NAME));
        UImgr.instance.addUI(this.park);
        this.timer = new TimerView();
        UImgr.instance.addTopCenter(this.timer, 20);
        this.socre = new Score();
        UImgr.instance.addTopCenter(this.socre, 200);
        this.ball = new BallController();
        gamefacede.Facade.registerMediator(this.ball);
    };
    //接受消息
    Scene.prototype.accpetReq = function (ReqName, args) {
        if (ReqName == 'addSorce') {
            this.socre.addScore();
            this.park.changePosision();
        }
    };
    return Scene;
}(gamefacede.GameMediator));
Scene.NAME = "scene";
//# sourceMappingURL=Scene.js.map