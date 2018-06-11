var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BallController = (function (_super) {
    __extends(BallController, _super);
    function BallController() {
        var _this = _super.call(this, "BallController", []) || this;
        _this.sModel = _this.getCommodel(SceneModel.NAME);
        _this.cishu = 0;
        _this.lastY = 0;
        _this.initBall();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, _this, _this.getForce);
        return _this;
    }
    BallController.prototype.initBall = function () {
        var _this = this;
        this.ball = MatterMgr.instance.Matter.Bodies.circle(480, 50, 36, {
            isStatic: false,
            density: 0.8,
            restitution: 0.8,
            render: {
                visible: true,
                sprite: {
                    texture: 'demoRes/ball.png',
                    xOffset: 36,
                    yOffset: 36
                }
            }
        });
        MatterMgr.instance.Matter.World.add(MatterMgr.instance.Engine.world, [this.ball]);
        MatterMgr.instance.Matter.Events.on(MatterMgr.instance.Engine, 'tick', function () {
            _this.eventBall();
        });
    };
    //检测球的变化
    BallController.prototype.eventBall = function () {
        this.cishu++;
        //计算分数
        if (!this.sModel.mark) {
            if ((this.ball.position.y >= 525 && this.ball.position.y <= 535) && (this.ball.position.x >= 30 && this.ball.position.x <= 155)) {
                this.sendReq('addSorce', [Scene.NAME], null);
            }
        }
        else {
            if ((this.ball.position.y >= 625 && this.ball.position.y <= 635) && (this.ball.position.x >= 500 && this.ball.position.x <= 620))
                this.sendReq('addSorce', [Scene.NAME], null);
        }
        //跨屏
        if (this.ball.position.x <= 0) {
            this.lastY = this.ball.position.y;
            MatterMgr.instance.Matter.Body.setPosition(this.ball, { x: 640, y: this.lastY });
        }
        else if (this.ball.position.x >= 640) {
            this.lastY = this.ball.position.y;
            MatterMgr.instance.Matter.Body.setPosition(this.ball, { x: 0, y: this.lastY });
        }
        //--end
    };
    BallController.prototype.getForce = function () {
        var forceMagnitude = 0.02 * this.ball.mass;
        var xForce = this.sModel.mark ? forceMagnitude * 0.3 : -forceMagnitude * 0.3;
        MatterMgr.instance.Matter.Body.applyForce(this.ball, this.ball.position, {
            x: xForce,
            y: -forceMagnitude * 2.2
        });
    };
    return BallController;
}(gamefacede.GameMediator));
//# sourceMappingURL=BallController.js.map