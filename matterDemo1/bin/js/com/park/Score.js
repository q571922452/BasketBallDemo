var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Score = (function (_super) {
    __extends(Score, _super);
    function Score() {
        var _this = _super.call(this) || this;
        _this.score = 0;
        _this.initScore();
        return _this;
    }
    Score.prototype.initScore = function () {
        this.tt.text = this.score + '';
    };
    Score.prototype.addScore = function () {
        this.tt.text = ++this.score + '';
    };
    return Score;
}(ui.ScoreViewUI));
//# sourceMappingURL=Score.js.map