
import {
    Engine,
    Actor,
    Vector,
    Physics,
    Scene,
    Label,
    Font,
    Sprite,
    DisplayMode,
    CollisionType,
    MoveTo,
    FontUnit
} from 'excalibur'
import {Background, Grass} from "../characters/background.js";
import { Zombie} from "../characters/walkingZombie.js";
import {Tile, HorizontalTile, TallTile} from "../characters/tile.js"
import {MiniBomber} from "../characters/miniBomber.js";
import {FlyingHammer} from "../characters/flyingHammer.js";
import {FlyingSomething} from "../characters/flyingSomething.js";
import {Button} from "../characters/button.js";
import {Eggs} from "../characters/eggs.js";
import {VictoryOne} from "./victoryOne.js";
import {FailOne} from "./failOne.js";


export class LevelOne extends Scene {
    game

    constructor() {
        super();
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 680);
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.game = _engine
    }

    onActivate(_context) {
        super.onActivate(_context);
        this.startLevelOne()
    }

    startLevelOne(){



        console.log('start')
        let background = new Background()
        background.pos = new Vector(1366/2,310)
        this.add(background)

        const timerLabel = new Label('100');
        timerLabel.pos = new Vector(1366/2, 100);
        timerLabel.anchor = new Vector(0.5,0.5)
        timerLabel.font = new Font({
            family: 'arial',
            size: 40,
            unit: FontUnit.Px
        })
        this.add(timerLabel);

        let remainingSeconds = 5;

        // Update the timer label every second
        this.timerInterval = setInterval(() => {
            remainingSeconds--;
            timerLabel.text = `Seconds remaining: ${remainingSeconds.toString()}`;

            if (remainingSeconds <= 0) {
                clearInterval(this.timerInterval);
                this.game.add('FailOne', new FailOne())
                this.game.goToScene('FailOne')

            }
        }, 1000);









        const spawnFlyer = new Button()
        spawnFlyer.pos = new Vector(100, 550)
        spawnFlyer.enableCapturePointer = true
        spawnFlyer.pointer.useGraphicsBounds = true

        this.add(spawnFlyer)

        let flyer = new FlyingSomething()
        flyer.pos = spawnFlyer.pos.clone().add(new Vector(spawnFlyer.width / 2, spawnFlyer.height / 2))
        this.add(flyer)

        let flyerClicked = false

        spawnFlyer.on("pointerup", () => {
            if (!flyerClicked) {
                const promise = new Promise((resolve) => {
                    flyer.actions.moveTo(300, 200, 500).callMethod(resolve);
                });

                promise.then(() => {
                    flyer.vel = new Vector(100, 0);
                    flyerClicked = true;
                });
            }
        });



        const spawnHammer = new Button()
        spawnHammer.pos = new Vector(100, 400)
        spawnHammer.enableCapturePointer = true
        spawnHammer.pointer.useGraphicsBounds = true
        this.add(spawnHammer)

        let hammer = new FlyingHammer()
        hammer.pos = spawnHammer.pos.clone().add(new Vector(spawnHammer.width/2, spawnHammer.height/2))
        this.add(hammer)

        let hammerClicked = false

        spawnHammer.on('pointerup', ()=>{
            if(!hammerClicked) {
                const promise = new Promise((resolve) => {
                    hammer.actions.moveTo(600, 370, 500).callMethod(resolve)
                })
                promise.then(() => {
                    hammer.vel = new Vector(180, 0)
                    hammerClicked = true
                })
            }
        })


        const spawnBomber = new Button()
        spawnBomber.pos = new Vector(100, 250)
        spawnBomber.enableCapturePointer = true
        spawnBomber.pointer.useGraphicsBounds = true
        this.add(spawnBomber)

        let bomber = new MiniBomber()
        bomber.pos = spawnBomber.pos.clone().add(new Vector(spawnBomber.width/2, spawnBomber.height/2))
        this.add(bomber)

        let bomberClicked = false

        spawnBomber.on('pointerup', () => {
            if (!bomberClicked) {
                const promise = new Promise((resolve) => {
                    bomber.actions.moveTo(500, 600, 500).callMethod(resolve)
                })
                promise.then(() => {
                    bomber.vel = new Vector(100, 0)
                    bomberClicked = true
                })
            }
        })



        const spawnZombie = new Button()
        spawnZombie.pos = new Vector(100, 100)
        spawnZombie.enableCapturePointer = true
        spawnZombie.pointer.useGraphicsBounds = true
        this.add(spawnZombie)

        let zombie = new Zombie()
        zombie.pos = spawnZombie.pos.clone().add(new Vector(spawnZombie.width/2, spawnZombie.height/2))
        this.add(zombie)

        let zombieClicked = false

        spawnZombie.on('pointerup',  () =>{
            if (!zombieClicked) {
                const promise = new Promise((resolve) => {
                    zombie.actions.moveTo(500, 635, 500).callMethod(resolve)
                })
                promise.then(() => {
                    zombie.vel = new Vector(180, 0)
                    zombieClicked = true
                })
            }
        })



// first building

        let egg2 = new Eggs()
        egg2.pos = new Vector(1100,635)
        this.add(egg2)

        let tile = new TallTile()
        tile.pos = new Vector(1300, 590)
        this.add(tile)

        let tile9 = new TallTile()
        tile9.pos = new Vector(1210, 590)
        this.add(tile9)


        let tile11 = new HorizontalTile()
        tile11.pos = new Vector(1255, 505)
        this.add(tile11)

        let tile3 = new TallTile()
        tile3.pos = new Vector(1300, 420)
        this.add(tile3)

        let egg = new Eggs()
        egg.pos = new Vector(1255,475)
        this.add(egg)

        let tile13 = new TallTile()
        tile13.pos = new Vector(1210, 420)
        this.add(tile13)


        let tile5 = new HorizontalTile()
        tile5.pos = new Vector(1255, 335)
        this.add(tile5)

        let tile6 = new Tile()
        tile6.pos = new Vector(1300, 285)
        this.add(tile6)

        let tile7 = new Tile()
        tile7.pos = new Vector(1210, 285)
        this.add(tile7)

        let tile8 = new HorizontalTile()
        tile8.pos = new Vector(1255, 235)
        this.add(tile8)

        let tile14 = new Tile()
        tile14.pos = new Vector(1300, 185)
        this.add(tile14)

        let tile15 = new Tile()
        tile15.pos = new Vector(1210, 185)
        this.add(tile15)


        let grass = new Grass()
        grass.pos = new Vector(1366/2,660)
        this.add(grass)



    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);

        const allEggs = this.actors.filter((actor) => actor instanceof Eggs);
        const allEggsDead = allEggs.every((egg) => egg.isKilled());

        if (allEggsDead === true) {
            const timerLabel = this.actors.find((actor) => actor instanceof Label);
            const remainingSecondsText = timerLabel.text.replace(/\D/g, ''); // Remove non-numeric characters
            const remainingSeconds = parseInt(remainingSecondsText);
            // Save the remaining time or perform any other desired action
            console.log('Remaining seconds:', remainingSeconds);

            // Save the remaining seconds in localStorage


            console.log('All eggs have died!');
            setTimeout(() => {
                this.game.add('VictoryOne', new VictoryOne(remainingSeconds));
                this.game.goToScene('VictoryOne');
            }, 2000);
            clearInterval(this.timerInterval);
        }
    }



}


