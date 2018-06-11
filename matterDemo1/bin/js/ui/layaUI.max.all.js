var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var ProgressUI = (function (_super) {
        __extends(ProgressUI, _super);
        function ProgressUI() {
            return _super.call(this) || this;
        }
        ProgressUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ProgressUI.uiView);
        };
        return ProgressUI;
    }(View));
    ProgressUI.uiView = { "type": "View", "props": { "width": 500, "height": 40 }, "child": [{ "type": "ProgressBar", "props": { "y": 0, "x": 0, "width": 500, "var": "bar", "skin": "comp/progress.png", "sizeGrid": "3,3,4,4", "height": 40 } }] };
    ui.ProgressUI = ProgressUI;
})(ui || (ui = {}));
(function (ui) {
    var ScoreViewUI = (function (_super) {
        __extends(ScoreViewUI, _super);
        function ScoreViewUI() {
            return _super.call(this) || this;
        }
        ScoreViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.ScoreViewUI.uiView);
        };
        return ScoreViewUI;
    }(View));
    ScoreViewUI.uiView = { "type": "View", "props": { "width": 150, "height": 60 }, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "width": 150, "var": "tt", "text": "0", "height": 60, "fontSize": 60, "font": "SimSun", "color": "#ece774", "bold": true, "align": "center" } }] };
    ui.ScoreViewUI = ScoreViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map