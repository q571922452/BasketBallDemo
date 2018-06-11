class ParkView extends Laya.Component{
    constructor(msg:SceneModel){
        super();
        this.model = msg;
        this.initView();
    }
    private model:SceneModel;
    private bg:Laya.Sprite;//背景
    private back1:Laya.Box;//篮板+篮筐1;
    private back2:Laya.Box;//篮板+篮筐2;
    private initView():void{
        // MatterMgr.in
        this.back1 = new Laya.Box();
        this.back2 = new Laya.Box();
        this.addChildren(this.back1,this.back2);
        this.back1.x = 30;
        this.back1.y = 300;

        this.back2.x = 620;
        this.back2.y = 400;
        var sp1:Laya.Sprite = new Laya.Sprite();//
        var sp2:Laya.Sprite = new Laya.Sprite();//
        this.back1.addChild(sp1);
        this.back2.addChild(sp2);
        sp1.graphics.drawLines(0,0,[0,0,0,260,0,230,130,230],'#ffe400',14);
        sp2.graphics.drawLines(0,0,[0,0,0,260,0,230,-130,230],'#ffe400',14);
        
        this.initSceneBody();

        
    }
    // 刚体
    private floor:any;//地面

    private backboardL:any;//篮板
    private basketryBotL:any;//篮筐刚体点
    private netBodyL:any;//篮网

    private backboardR:any;//篮板
    private basketryBotR:any;//篮筐刚体点
    private netBodyR:any;//篮网

    
    // private ball:any;//球
    private backboardPos:Array<any> = [{x:30,y:430},{x:620,y:530}];//篮板位置 0左 1右
    private BotPos:Array<any> = [{x:155,y:530},{x:495,y:630}];//点位置 0左 1右
    private netPos:Array<any> = [{x:30,y:530},{x:485,y:630}];//网的位置
    
    private initSceneBody():void{
        this.floor = MatterMgr.instance.Matter.Bodies.rectangle(568,1126,1500,10,{
            isStatic:true,
            render:{
                visible:true
            }
        });


        this.backboardL = MatterMgr.instance.Matter.Bodies.rectangle(this.backboardPos[0].x,this.backboardPos[0].y,10,260,{
            isStatic:true,
            render:{
                visible:true
            }
        });

        this.backboardR = MatterMgr.instance.Matter.Bodies.rectangle(this.backboardPos[1].x,this.backboardPos[1].y,10,260,{
            isStatic:true,
            render:{
                visible:true
            }
        });

        this.basketryBotL = MatterMgr.instance.Matter.Bodies.rectangle(this.BotPos[0].x,this.BotPos[0].y,10,10,{
            isStatic:true,
            render:{
                visible:true
            }
        });

        this.basketryBotR = MatterMgr.instance.Matter.Bodies.rectangle(this.BotPos[1].x,this.BotPos[1].y,10,10,{
            isStatic:true,
            render:{
                visible:true
            }
        });
        

        this.netBodyL = MatterMgr.instance.Matter.Composites.softBody(this.netPos[0].x, this.netPos[0].y, 8, 4, 0, 0, false, 9, {
            firction: 0.5, // 摩擦力
            frictionAir: 0.08, // 空气摩擦力
            restitution: 0, // 弹性
            render:{visible: false },
            collisionFilter: {group: -1}
        }, {
            render: {lineWidth: 2,strokeStyle: "#fff"}
        });
        this.netBodyL.bodies[0].isStatic = this.netBodyL.bodies[7].isStatic = true;


        this.netBodyR = MatterMgr.instance.Matter.Composites.softBody(this.netPos[1].x, this.netPos[1].y, 8, 4, 0, 0, false, 9, {
            firction: 0.5, // 摩擦力
            frictionAir: 0.08, // 空气摩擦力
            restitution: 0, // 弹性
            render:{visible: false },
            collisionFilter: {group: -1}
        }, {
            render: {lineWidth: 2,strokeStyle: "#fff"}
        });

        this.netBodyR.bodies[0].isStatic = this.netBodyR.bodies[7].isStatic = true;

        MatterMgr.instance.Matter.World.add(MatterMgr.instance.Engine.world,[this.floor,this.backboardL,this.basketryBotL]);

        this.back2.visible = false;

    }

    //改变背景位置
    public changePosision():void{
        var mark = this.model.mark;//根据mark改变
        if(mark){
            MatterMgr.instance.Matter.World.remove(MatterMgr.instance.Engine.world,this.backboardR);
            MatterMgr.instance.Matter.World.remove(MatterMgr.instance.Engine.world,this.basketryBotR);
            // MatterMgr.instance.Matter.World.remove(MatterMgr.instance.Engine.world,this.netBodyR);
        }else{
            MatterMgr.instance.Matter.World.remove(MatterMgr.instance.Engine.world,this.backboardL);
            MatterMgr.instance.Matter.World.remove(MatterMgr.instance.Engine.world,this.basketryBotL);
            // MatterMgr.instance.Matter.World.remove(MatterMgr.instance.Engine.world,this.netBodyL);
        }
        mark = this.model.mark = !this.model.mark;
        this.back1.visible = !mark;
        this.back2.visible = mark;
        if(mark)
            MatterMgr.instance.Matter.World.add(MatterMgr.instance.Engine.world,[this.floor,this.backboardR,this.basketryBotR]);
        else
            MatterMgr.instance.Matter.World.add(MatterMgr.instance.Engine.world,[this.floor,this.backboardL,this.basketryBotL]);
    
    }
    
}