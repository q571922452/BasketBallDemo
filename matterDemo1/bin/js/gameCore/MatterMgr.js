var MatterMgr = (function () {
    function MatterMgr() {
        this.Matter = Laya.Browser.window.Matter;
        this.LayaRender = Laya.Browser.window.LayaRender;
        MatterMgr.instance = this;
        this.initMatter();
    }
    MatterMgr.prototype.initMatter = function () {
        this.Engine = this.Matter.Engine.create({
            enableSleeping: true //开启睡眠
        });
        this.Matter.Engine.run(this.Engine); //执行重力
        var render = this.LayaRender.create({
            engine: this.Engine,
            options: { wireframes: false,
                background: "#000",
                showDebug: true,
                showVelocity: true
            }
        });
        this.LayaRender.run(render);
    };
    return MatterMgr;
}());
//# sourceMappingURL=MatterMgr.js.map