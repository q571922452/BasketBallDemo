
class MatterMgr {
    public static instance:MatterMgr;
    constructor(){
        MatterMgr.instance = this;
        this.initMatter();
    }

    public Matter:any = Laya.Browser.window.Matter; 
    private LayaRender = Laya.Browser.window.LayaRender;
    public Engine:any; 

    private initMatter():void{
        this.Engine = this.Matter.Engine.create({
            enableSleeping:true//开启睡眠
        });
        this.Matter.Engine.run(this.Engine);//执行重力
        var render = this.LayaRender.create({
            engine: this.Engine,
            options: { wireframes: false,
                 background: "#000" ,
                 showDebug: true,
                 showVelocity: true
                }
        });
        this.LayaRender.run(render);        
    }
}