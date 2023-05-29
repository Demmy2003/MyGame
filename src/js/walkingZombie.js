import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "./resources.js";

export class Zombie extends Actor {
    constructor() {
        super({
            width: 50,
            height: 52,
        });
        const walkingZombie = Resources.Zombie.toSprite();
        walkingZombie.height = 100
        walkingZombie.width = 80
        this.graphics.add(walkingZombie)
        console.log(`I'm a `)

    }
    onInitialize(_engine) {
        this.body.collisionType = CollisionType.Fixed
    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        if (this.pos.x > 1368  || this.pos.y > 692 ) {
            console.log(`zombie is killed`)
            this.vel = new Vector(0,0)
            this.kill()
        }
    }

}



