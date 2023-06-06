import '../css/style.css'
import {Engine, Vector, Physics, Label, Font, FontUnit} from 'excalibur'
import { ResourceLoader} from "./resources.js";
import {Background} from "./characters/background.js";
import {SceneButton} from "./characters/button.js";
import {LevelOne} from "./scenes/levelOne.js"
import {StartTekstOne, StartTekstTwo} from "./characters/textBubbles.js";
import {VictoryOne} from "./scenes/victoryOne.js";


class Game extends Engine {

    constructor() {
        super({
            width: 1366,
            height: 690

        });
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 400);


        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        this.add('LevelOne', new LevelOne())
        this.VictoryScene = new VictoryOne()


        let background = new Background()
        background.pos = new Vector(1366/2,310)
        this.add(background)

        let tekstOne = new StartTekstOne()
        tekstOne.pos = new Vector(633, 225)
        this.add(tekstOne)

        let tekstTwo = new StartTekstTwo()
        tekstTwo.pos = new Vector(733, 400)
        this.add(tekstTwo)


       const startButton = new SceneButton()
        startButton.pos = new Vector(700 , 550)
        startButton.enableCapturePointer = true
        startButton.pointer.useGraphicsBounds = true
        startButton.on('pointerup', () => {
            this.goToScene('LevelOne')
        })
        this.add(startButton)

        let label = new Label({
            text: 'Start',
            pos: new Vector(660, 565),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px
            })
        })

        this.add(label)


    }

}

new Game()

