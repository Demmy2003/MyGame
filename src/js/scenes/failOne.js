import {Engine, Actor, Vector,  Scene, Label, Font, FontUnit, Sprite, DisplayMode, CollisionType, MoveTo} from 'excalibur'
import {Background, Grass} from "../characters/background.js";

import {Button, SceneButton} from "../characters/button.js";
import {LevelOne} from "./levelOne.js";


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

        let label = new Label({
            text: 'Fail',
            pos: new Vector(1366/2, 100),
            font: new Font({
                family: 'Arial',
                size: 50,
                unit: FontUnit.Px
            })
        })

        this.add(label)


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