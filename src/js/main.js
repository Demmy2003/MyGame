import '../css/style.css'
import {Engine, Actor, Vector, Physics, Sprite, DisplayMode, CollisionType} from 'excalibur'
import {Resources, ResourceLoader} from "./resources.js";
import {Background, Grass} from "./background.js";
import { Zombie} from "./walkingZombie.js";
import {Tile} from "./tile.js"
import {MiniBomber} from "./miniBomber.js";
import {FlyingHammer} from "./flyingHammer.js";
import {FlyingSomething} from "./flyingSomething.js";
import {Button} from "./button.js";


class Game extends Engine {

    constructor() {
        super({
            width: 1366,
            height: 690

        });
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 680);

        this.showDebug(true)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        console.log('start')
        let background = new Background()
        background.pos = new Vector(1366/2,310)
        this.add(background)

        const spawnFlyer = new Button()
        spawnFlyer.pos = new Vector(100, 550)
        spawnFlyer.enableCapturePointer = true
        spawnFlyer.pointer.useGraphicsBounds = true

        let flyerClicked = false

        spawnFlyer.on("pointerup", () => {
            if(!flyerClicked) {
                let flyer = new FlyingSomething()
                flyer.pos = new Vector(700, 270)
                flyer.vel = new Vector(100, 0)
                this.add(flyer)
                flyerClicked = true
            }
        })
        this.add(spawnFlyer)


        const spawnHammer = new Button()
        spawnHammer.pos = new Vector(100, 400)
        spawnHammer.enableCapturePointer = true
        spawnHammer.pointer.useGraphicsBounds = true

        let hammerClicked = false

        spawnHammer.on('pointerup', ()=>{
            if(!hammerClicked) {
                let hammer = new FlyingHammer()
                hammer.pos = new Vector(600, 370)
                hammer.vel = new Vector(150, 0)
                this.add(hammer)
                hammerClicked = true
            }
        })
        this.add(spawnHammer)



        const spawnBomber = new Button()
        spawnBomber.pos = new Vector(100, 250)
        spawnBomber.enableCapturePointer = true
        spawnBomber.pointer.useGraphicsBounds = true

        let bomberClicked = false

        spawnBomber.on('pointerup', () => {
            if (!bomberClicked) {
                let bomber = new MiniBomber()
                bomber.pos = new Vector(500, 600)
                bomber.vel = new Vector(100, 0)
                this.add(bomber)
                bomberClicked = true
            }
        })
        this.add(spawnBomber)


        const spawnZombie = new Button()
        spawnZombie.pos = new Vector(100, 100)
        spawnZombie.enableCapturePointer = true
        spawnZombie.pointer.useGraphicsBounds = true

        let zombieClicked = false

        spawnZombie.on('pointerup',  () =>{
            if (!zombieClicked) {
                spawnZombie.logger.info('Player selected!')
                console.log("clicked")
                let zombie = new Zombie()
                zombie.pos = new Vector( 500, 635)
                zombie.vel = new Vector(150, 0)
                this.add(zombie)
                zombieClicked = true
            }

        })
        this.add(spawnZombie)




        let tile = new Tile()
        tile.pos = new Vector(1000, 640)
        tile.vel = new Vector(0, 0)
        this.add(tile)

        let tile2 = new Tile()
        tile2.pos = new Vector(1000, 600)
        tile2.vel = new Vector(0, 0)
        this.add(tile2)

        let tile3 = new Tile()
        tile3.pos = new Vector(1000, 560)
        tile3.vel = new Vector(0, 0)
        this.add(tile3)

        let tile4 = new Tile()
        tile4.pos = new Vector(1000, 520)
        tile4.vel = new Vector(0, 0)
        this.add(tile4)

        let tile5 = new Tile()
        tile5.pos = new Vector(1000, 480)
        tile5.vel = new Vector(0, 0)
        this.add(tile5)

        let tile6 = new Tile()
        tile6.pos = new Vector(1000, 440)
        tile6.vel = new Vector(0, 0)
        this.add(tile6)

        let tile7 = new Tile()
        tile7.pos = new Vector(1000, 400)
        tile7.vel = new Vector(0, 0)
        this.add(tile7)

        let tile8 = new Tile()
        tile8.pos = new Vector(1000, 360)
        tile8.vel = new Vector(0, 0)
        this.add(tile8)


        let grass = new Grass()
        grass.pos = new Vector(1366/2,660)
        this.add(grass)

    }

}

new Game()

