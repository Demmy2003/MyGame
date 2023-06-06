import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "../resources.js";
import {Grass} from "./background.js";
import {Tile, HorizontalTile, TallTile} from "./tile.js";
import {Eggs} from "./eggs.js";
import {Explode} from "./explosion.js";

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

    }

    onInitialize(_engine) {
        this.body.collisionType = CollisionType.Active
        this.on("collisionstart", (event) => this.onCollision(event));
    }

    onCollision(event) {
        const otherActor = event.other;
        if (otherActor instanceof Grass) {

            this.kill();

        } else if (otherActor instanceof Tile ||
            otherActor instanceof TallTile ||
            otherActor instanceof HorizontalTile ||
            otherActor instanceof Eggs ||
            otherActor instanceof Grass
        ){

            this.kill();

        }
    }
    onPreKill(_scene) {
        super.onPreKill(_scene);
        const explosion = new Explode();
        explosion.pos = this.pos.clone();
        this.scene.add(explosion);
    }

    onPostUpdate(_engine, _delta) {
        super.onPostUpdate(_engine, _delta);

        if (this.pos.x > 1368  || this.pos.y > 692 ) {
            this.vel = new Vector(0,0)
            this.kill()
        }
    }

}
