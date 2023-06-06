import {Actor, CollisionType} from "excalibur";
import { Resources } from "../resources.js";
import {Explode} from "./explosion.js";

export class Eggs extends Actor {
    collidedSide = false
    constructor() {
        super({
            width: 40,
            height: 40
        });
        const egg = Resources.Egg.toSprite()
        egg.width = 40
        egg.height = 40
        this.graphics.add(egg)
    }
    onInitialize(engine) {
        super.onInitialize(engine);
        this.body.collisionType = CollisionType.Active;
        this.body.gravity = true;
        this.on("precollision", (event) => this.onPreCollision(event));
    }
    onPreKill(_scene) {
        super.onPreKill(_scene);
        const explosion = new Explode();
        explosion.pos = this.pos.clone();
        this.scene.add(explosion);
    }
    onPreCollision(event) {
        const side = event.side;
        const otherActor = event.other
// console.log(side)

        if (side === 'Top' ) {
            this.kill()
            otherActor.kill();
            console.log(`egg collided top`)
        } else if (side === 'Right'){
            this.kill()
            otherActor.kill();
            console.log(`egg collided right`)
        } else if (side === 'Left') {
            this.kill()
            otherActor.kill();
            console.log(`egg collided left`)
        }
    }
}
