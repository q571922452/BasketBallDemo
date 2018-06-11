
class SceneModel extends gamefacede.GameModel{
    public static NAME:string = 'SceneModel';

    //计分规则。显示篮板。球的方向。
    public mark:boolean = false;//标记
    
    constructor(){
        super(SceneModel.NAME);
    }
   

}