import {Actor, CollisionType, Sprite, Vector} from "excalibur";
import { Resources } from "./resources.js";
import {Grass} from "./background.js";
import {Tile} from "./tile.js";

export class Bullet extends Actor {
    constructor() {
        super({
            width: 20,
            height: 20,
        });
        const bullets = Resources.Bullet.toSprite()
        bullets.width = 30
        bullets.height = 30

        this.graphics.add(bullets)
        console.log(`I'm a bullet`)
    }

    onInitialize(_engine) {
        this.body.collisionType = CollisionType.Active
        this.on("collisionstart", (event) => this.onCollision(event));
    }

    onCollision(event) {
        const otherActor = event.other;
        if (otherActor instanceof Grass) {

            console.log(`bullet collided with grass and got killed`);
            this.kill();

        } else if (otherActor instanceof Tile ){

            console.log(`bullet collided with tile and got killed`);
            otherActor.kill();
            this.kill();

        }
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        if (this.pos.x > 1368  || this.pos.y > 692 ) {
            console.log(`bullet is killed`)
            this.vel = new Vector(0,0)
            this.kill()
        }
    }

}
