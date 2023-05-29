import {Actor, CollisionType, Vector, Timer} from "excalibur";
import { Resources } from "./resources.js";
import {Bullet} from "./bullet.js";

export class FlyingSomething extends Actor {
    constructor() {
        super({
            width: 50,
            height: 52,
        });
        const flyingSomething = Resources.Flyer.toSprite()
        flyingSomething.height = 100
        flyingSomething.width = 75
        this.graphics.add(flyingSomething)

        this.shootInterval = 2000; // Interval between shots in milliseconds
        this.elapsedTime = 0;
        
    }
    onInitialize(_) {
        this.body.collisionType = CollisionType.Fixed
        this.elapsedTime = 0;

    }
    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        if (this.pos.x > 1368  || this.pos.y > 692 ) {
            console.log(`flyer is killed`)
            this.vel = new Vector(0,0)
            this.kill()
        }

        this.elapsedTime += _delta;
        // Shoot bullets at regular intervals
        if (this.elapsedTime >= this.shootInterval) {
            this.shoot();
            this.elapsedTime = 0;
        }
    }

    shoot() {
        const bullet = new Bullet();
        bullet.pos = this.pos.clone();
        // Set the velocity or direction of the bullet
        bullet.vel = new Vector(0, -10); // Example velocity, adjust as needed
        bullet.body.collisionType = CollisionType.Active;
        this.scene.add(bullet);
    }
}