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
import {LevelOne} from "./levelOne.js";
import {FailTekst} from "../characters/textBubbles.js";


export class FailOne extends Scene {
    game
    constructor() {
        super();
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }
    onActivate(_context) {
        super.onActivate(_context);
        this.startFailOne()
    }
    startFailOne(){

        let background = new Background()
        background.pos = new Vector(1366/2,310)
        this.add(background)

        let shade = new Shade()
        shade.pos = new Vector(1366/2, 310)
        this.add(shade)

        let label = new Label({
            text: 'Epic Fail',
            pos: new Vector(590, 180),
            font: new Font({
                family: 'Impact',
                size: 60,
                unit: FontUnit.Px,
                color: Color.White
            })
        })

        this.add(label)

        let failTekst = new FailTekst()
        failTekst.pos = new Vector(1366/2, 350)
        this.add(failTekst)


        let button = new SceneButton()
        button.pos = new Vector(1366/2, 550)
        button.enableCapturePointer = true
        button.pointer.useGraphicsBounds = true
        this.add(button)
        button.on('pointerup', () => {
            console.log('Button clicked');
            this.game.add('LevelOne', new LevelOne());
            this.game.goToScene('LevelOne');
        });

        let label3 = new Label({
            text: `Try Again`,
            pos: new Vector(630, 560),
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px
            })
        })
        this.add(label3)


    }
}