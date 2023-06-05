import '../css/style.css'
import {Engine, Actor, Vector, Physics, Sprite, DisplayMode, CollisionType, Label, Font, FontUnit} from 'excalibur'
import {Resources, ResourceLoader} from "./resources.js";
import {Background, Grass} from "./characters/background.js";
import { Zombie} from "./characters/walkingZombie.js";
import {Tile} from "./characters/tile.js"
import {MiniBomber} from "./characters/miniBomber.js";
import {FlyingHammer} from "./characters/flyingHammer.js";
import {FlyingSomething} from "./characters/flyingSomething.js";
import {Button} from "./characters/button.js";
import {LevelOne} from "./scenes/levelOne.js"


class Game extends Engine {

    constructor() {
        super({
            width: 1366,
            height: 690

        });
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 400);

        this.showDebug(true)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        this.add('LevelOne', new LevelOne())


        let background = new Background()
        background.pos = new Vector(1366/2,310)
        this.add(background)

       const startButton = new Button()
        startButton.pos = new Vector(700 , 400)
        startButton.enableCapturePointer = true
        startButton.pointer.useGraphicsBounds = true
        startButton.on('pointerup', () => {
            this.goToScene('LevelOne')
        })
        this.add(startButton)
        let label = new Label({
            text: 'Start',
            pos: new Vector(1366/2, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        startButton.addChild(label)

    }

}

new Game()

