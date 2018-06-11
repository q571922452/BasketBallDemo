var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 倒计时显示条
 */
var TimerView = (function (_super) {
    __extends(TimerView, _super);
    function TimerView() {
        var _this = _super.call(this) || this;
        _this.test();
        return _this;
    }
    //时间递减 10，9，8。。。。。3最低3秒 安分段来
    TimerView.prototype.test = function () {
        this.bar.value = 0.0;
        Laya.timer.loop(1000, this, this.setValue);
    };
    TimerView.prototype.setValue = function () {
        this.bar.value += 1 / 10;
        if (this.bar.value >= 1) {
            Laya.timer.clearAll(this);
            this.bar.value = 0;
        }
    };
    return TimerView;
}(ui.ProgressUI));
//# sourceMappingURL=TimerView.js.map