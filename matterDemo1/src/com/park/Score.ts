class Score extends ui.ScoreViewUI{
    constructor(){
        super();
        this.initScore();
    }
    private score:number = 0;
    private initScore():void{
        this.tt.text = this.score+'';
    }
    public addScore():void{
        this.tt.text = ++this.score+'';
    }
}