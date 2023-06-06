import {
    Vector,
    Scene,
    Label,
    Font,
    FontUnit,
    Color
} from 'excalibur'
import {Background, Shade} from "../characters/background.js";

import { SceneButton} from "../characters/button.js";
import {WinTekst} from "../characters/textBubbles.js";




export class VictoryOne extends Scene {
    game
    remainingSeconds
    constructor(remainingSeconds) {
        super();
        this.remainingSeconds = remainingSeconds;
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startVictoryOne()
    }
    startVictoryOne(){

        let background = new Background()
        background.pos = new Vector(1366/2,310)
        this.add(background)

        let shade = new Shade()
        shade.pos = new Vector(1366/2, 310)
        this.add(shade)

        let label = new Label({
            text: 'Victory',
            pos: new Vector(610, 100),
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label)

        let label2 = new Label({
            text: `Score: ${this.remainingSeconds}`,
            pos: new Vector(615, 200),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.add(label2)

        let win = new WinTekst()
        win.pos = new Vector(1366/2, 350)
        this.add(win)

        let button = new SceneButton()
        button.pos = new Vector(1366/2, 550)
        this.add(button)

        let label3 = new Label({
            text: `New Levels`,
            pos: new Vector(635, 545),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(label3)

        let label4 = new Label({
            text: `Coming Soon`,
            pos: new Vector(620, 570),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(label4)






    }
}