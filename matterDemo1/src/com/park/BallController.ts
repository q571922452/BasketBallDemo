class BallController extends gamefacede.GameMediator{
    private ball:any;
    constructor(){
        super("BallController",[]);
        this.initBall();
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.getForce);
    }
    private sModel:SceneModel = this.getCommodel(SceneModel.NAME) as SceneModel;
    private initBall():void{
        this.ball = MatterMgr.instance.Matter.Bodies.circle(480,50,36,{
            isStatic:false,//是否固定
            density:0.8,//密度
            restitution:0.8,//弹性
            render:{
                visible:true,//开启渲染
                sprite:{
                    texture:'demoRes/ball.png',
                    xOffset:36,
                    yOffset:36
                }
            }
        });
        MatterMgr.instance.Matter.World.add(MatterMgr.instance.Engine.world,[this.ball]);
        MatterMgr.instance.Matter.Events.on(MatterMgr.instance.Engine,'tick',()=>{
            this.eventBall();
        });
    }

    private cishu:number = 0;
    private lastY:number = 0;
    //检测球的变化
    private eventBall():void{
        this.cishu++
        //计算分数
        if(!this.sModel.mark){ //左边
            if((this.ball.position.y >= 525 && this.ball.position.y<=535) && (this.ball.position.x >= 30 && this.ball.position.x <= 155)){
                this.sendReq('addSorce',[Scene.NAME],null);
            }
        }else{//右边
            if((this.ball.position.y >= 625 && this.ball.position.y<=635) && (this.ball.position.x >= 500 && this.ball.position.x <= 620))
                this.sendReq('addSorce',[Scene.NAME],null);
        }

        //跨屏
        if(this.ball.position.x <=0){
                this.lastY = this.ball.position.y;
                MatterMgr.instance.Matter.Body.setPosition(this.ball,{x:640,y:this.lastY});
        }else if(this.ball.position.x >= 640){
                this.lastY = this.ball.position.y;
                MatterMgr.instance.Matter.Body.setPosition(this.ball,{x:0,y:this.lastY});
        }
        //--end
    }
    
    private getForce():void{
        var forceMagnitude = 0.02*this.ball.mass;
        var xForce:number = this.sModel.mark?forceMagnitude*0.3:-forceMagnitude*0.3;
        MatterMgr.instance.Matter.Body.applyForce(this.ball,this.ball.position,{
            x:xForce,
            y:-forceMagnitude*2.2
        });
    }
    //切换场景
}