import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "./resources.js";


export class FlyingHammer extends Actor {
    constructor() {
        super({
            width: 50,
            height: 100,
        });
        const flyingHammer = Resources.Hammer.toSprite();
        flyingHammer.height = 100
        flyingHammer.width = 75
        this.graphics.add(flyingHammer)
    }
    onInitialize(_engine) {
        this.body.collisionType = CollisionType.Fixed
    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        if (this.pos.x > 1368  || this.pos.y > 692 ) {
            console.log(`Hammer is killed`)
            this.vel = new Vector(0,0)
            this.kill()
        }
    }
}
