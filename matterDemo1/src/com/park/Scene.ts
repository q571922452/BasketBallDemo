class Scene extends gamefacede.GameMediator{
    public static NAME:string = "scene";
    constructor(){
        super(Scene.NAME,[]);
        this.initView();
    }
    private sceneModel:SceneModel = this.getCommodel(SceneModel.NAME) as SceneModel;
    private park:ParkView;//场景
    private timer:TimerView;//计时器
    private socre:Score;//计分
    private ball:BallController;//球
    private initView():void{
        this.park = new ParkView(this.getCommodel(SceneModel.NAME) as SceneModel);
        UImgr.instance.addUI(this.park);
        this.timer = new TimerView();
        UImgr.instance.addTopCenter(this.timer,20);
        this.socre = new Score();
        UImgr.instance.addTopCenter(this.socre,200);
        this.ball = new BallController();
        gamefacede.Facade.registerMediator(this.ball);
    }
    //接受消息
    public accpetReq(ReqName:string,args?:Array<any>):void{
        if(ReqName == 'addSorce'){
            this.socre.addScore();
            this.park.changePosision();
        }
    }
    
}