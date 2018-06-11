/**
 * 倒计时显示条
 */
class TimerView extends ui.ProgressUI{
    constructor(){
        super();
        this.test();
    }
    
    //时间递减 10，9，8。。。。。3最低3秒 安分段来
    private test():void{
        this.bar.value = 0.0;
        Laya.timer.loop(1000,this,this.setValue)
    }
    private setValue():void{
        this.bar.value += 1/10;
        if(this.bar.value >= 1){
            Laya.timer.clearAll(this);
            this.bar.value = 0;
        }
    }
}