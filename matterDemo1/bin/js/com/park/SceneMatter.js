var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneModel = (function (_super) {
    __extends(SceneModel, _super);
    function SceneModel() {
        var _this = _super.call(this, SceneModel.NAME) || this;
        //计分规则。显示篮板。球的方向。
        _this.mark = false; //标记
        return _this;
    }
    return SceneModel;
}(gamefacede.GameModel));
SceneModel.NAME = 'SceneModel';
//# sourceMappingURL=SceneMatter.js.map