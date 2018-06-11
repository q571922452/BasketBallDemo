var UImgr = (function () {
    function UImgr() {
        UImgr.instance = this;
    }
    //
    UImgr.prototype.addUI = function (view, top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        if (!view)
            return;
        view.dataSource = { top: top, right: right, bottom: bottom, left: left };
        Laya.stage.addChild(view);
    };
    UImgr.prototype.addTopCenter = function (view, top, centerx) {
        if (top === void 0) { top = 0; }
        if (centerx === void 0) { centerx = 0; }
        view.dataSource = { centerX: centerx, top: top };
        Laya.stage.addChild(view);
    };
    //
    UImgr.prototype.removeUI = function (view) {
        view.dataSource = null;
        Laya.stage.removeChild(view);
    };
    return UImgr;
}());
//# sourceMappingURL=UImgr.js.map