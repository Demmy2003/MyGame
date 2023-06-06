import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "../resources.js";
import {Grass} from "./background.js";
import {HorizontalTile, TallTile, Tile} from "./tile.js";
import {Eggs} from "./eggs.js";
import {FlyingSomething} from "./flyingSomething.js";
import {MiniBomber} from "./miniBomber.js";
import {Zombie} from "./walkingZombie.js";
import {FlyingHammer} from "./flyingHammer.js";
import {Bullet} from "./bullet.js";

export class Explode extends Actor {
    constructor() {
        super({
            width: 20,
            height: 20
        });
        const explode = Resources.Explosion.toSprite()
        explode.width = 20
        explode.height = 20

        this.graphics.add(explode)
        this.scale = new Vector(1, 1);
    }
    onInitialize(_engine) {
        this.body.collisionType = CollisionType.Fixed
        this.on("precollision", (event) => this.onCollision(event));
    }

    onCollision(event) {
        const otherActor = event.other;

        if (otherActor instanceof Grass) {

            this.kill();

        } else if (
            otherActor instanceof Tile ||
            otherActor instanceof TallTile ||
            otherActor instanceof HorizontalTile ||
            otherActor instanceof Eggs ||
            otherActor instanceof FlyingHammer ||
            otherActor instanceof Bullet ||
            otherActor instanceof Zombie ||
            otherActor instanceof FlyingSomething ||
            otherActor instanceof MiniBomber
        ){

            otherActor.kill();

        }
    }


    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);


            if (this.scale.x >= 3 && this.scale.y >= 3) {
                this.kill();
            } else {
                this.scale = this.scale.add(new Vector(0.05, 0.05));
            }
        if (this.pos.x > 1368  || this.pos.y > 692 ) {
            this.vel = new Vector(0,0)
            this.kill()
        }
    }

}