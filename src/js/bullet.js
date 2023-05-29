import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "./resources.js";

export class Bullet extends Actor {
    constructor() {
        super({
            width: 20,
            height: 20,
        });
        const bullets = Resources.Bullet.toSprite();
        bullets.height = 20
        bullets.width = 20
        this.graphics.add(bullets)
        console.log(`I'm a bullet`)
    }
    onInitialize(_engine) {
        this.body.collisionType = CollisionType.Active
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
