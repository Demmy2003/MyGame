import '../css/style.css'
import {Engine, Actor, Vector, Physics, DisplayMode, CollisionType} from 'excalibur'
import {Resources, ResourceLoader} from "./resources.js";
import {Background, Grass} from "./background.js";
import { Zombie} from "./walkingZombie.js";
import {Tile} from "./tile.js"
import {MiniBomber} from "./miniBomber.js";
import {FlyingHammer} from "./flyingHammer.js";
import {FlyingSomething} from "./flyingSomething.js";


class Game extends Engine {

    constructor() {
        super({
            width: 1366,
            height: 690

        });
        Physics.useRealisticPhysics();
        Physics.gravity = new Vector(0, 680);

        // this.showDebug(true)

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame(){
        console.log('start')
        let background = new Background()
        background.pos = new Vector(1366/2,310)
        this.add(background)

        let zombie = new Zombie()
        zombie.pos = new Vector( 600, 635)
        zombie.vel = new Vector(50, 0)
        this.add(zombie)

        let bomber = new MiniBomber()
        bomber.pos = new Vector(500, 635)
        bomber.vel = new Vector(70, 0)
        this.add(bomber)

        let hammer = new FlyingHammer()
        hammer.pos = new Vector(600, 370)
        hammer.vel = new Vector(50, 0)
        this.add(hammer)

        let flyer = new FlyingSomething()
        flyer.pos = new Vector(700, 270)
        flyer.vel = new Vector(80, 0)
        this.add(flyer)

        let tile = new Tile()
        tile.pos = new Vector(1000, 640)
        this.add(tile)
        console.log(tile.pos)


        let grass = new Grass()
        grass.pos = new Vector(1366/2,660)
        this.add(grass)
    }
}


new Game()

