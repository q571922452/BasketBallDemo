
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class ProgressUI extends View {
		public bar:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":40},"child":[{"type":"ProgressBar","props":{"y":0,"x":0,"width":500,"var":"bar","skin":"comp/progress.png","sizeGrid":"3,3,4,4","height":40}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ProgressUI.uiView);

        }

    }
}

module ui {
    export class ScoreViewUI extends View {
		public tt:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":150,"height":60},"child":[{"type":"Text","props":{"y":0,"x":0,"width":150,"var":"tt","text":"0","height":60,"fontSize":60,"font":"SimSun","color":"#ece774","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ScoreViewUI.uiView);

        }

    }
}
