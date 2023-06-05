import {Engine, Actor, Vector,  Scene, Label, Font, FontUnit, Sprite, DisplayMode, CollisionType, MoveTo} from 'excalibur'
import {Background, Grass} from "../characters/background.js";

import {Button, SceneButton} from "../characters/button.js";



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

        let label = new Label({
            text: 'Victory',
            pos: new Vector(1366/2, 100),
            font: new Font({
                family: 'impact',
                size: 50,
                unit: FontUnit.Px
            })
        })
        this.add(label)

        let label2 = new Label({
            text: `Score: ${this.remainingSeconds}`,
            pos: new Vector(1366/2, 300),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(label2)

        let button = new SceneButton()
        button.pos = new Vector(1366/2, 550)
        this.add(button)

        let label3 = new Label({
            text: `New Levels Coming Soon`,
            pos: new Vector(1366/2, 550),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(label3)




    }
}