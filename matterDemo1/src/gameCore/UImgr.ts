class UImgr{
    public static instance:UImgr;
    constructor(){
        UImgr.instance = this;
    }
    //
    public addUI(view:laya.ui.Component,top:number = 0,right:number = 0,bottom:number = 0,left:number = 0):void{
        if(!view) return;
        view.dataSource = {top:top,right:right,bottom:bottom,left:left};
        Laya.stage.addChild(view)
    }
    public addTopCenter(view:laya.ui.Component,top:number = 0,centerx:number = 0):void{
        view.dataSource = {centerX:centerx,top:top}
        Laya.stage.addChild(view);
    }
    //
    public removeUI(view:laya.ui.Component):void{
        view.dataSource = null;
        Laya.stage.removeChild(view);
    }
}