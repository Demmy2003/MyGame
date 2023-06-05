import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "../resources.js";
import { Bullet } from "./bullet.js";



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
        this.shootInterval = 3000; // Interval between shots in milliseconds
        this.elapsedTime = 0;
        this.bullets = []; // Array to store the bullets


    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Passive;
        this.elapsedTime = 0;

    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);
        if (this.pos.x > 1368  || this.pos.y > 692 ) {
            console.log(`flyer is killed`)
            this.kill()
        }
        this.elapsedTime += _delta;

        // Shoot bullets at regular intervals
        if(this.vel.x !==0 || this.vel.y !== 0) {
            if (this.elapsedTime >= this.shootInterval) {
                this.shoot();
                this.elapsedTime = 0;
            }
        }


    }
    shoot() {
        const bullet = new Bullet();
        bullet.pos = this.pos.clone();
        bullet.body.collisionType = CollisionType.Active;
        this.bullets.push(bullet); // Add the bullet to the bullets array
        this.scene.add(bullet); // Add the bullet to the scene
    }
}




