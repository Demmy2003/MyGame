import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "../resources.js";

import {Tile, TallTile, HorizontalTile} from "./tile.js";
import {Eggs} from "./eggs.js";
import {Explode} from "./explosion.js";

export class MiniBomber extends Actor {
    constructor() {
        super({
            width: 50,
            height: 52,
        });
        const miniBomber = Resources.Bomber.toSprite();
        miniBomber.height = 100
        miniBomber.width = 75

        this.graphics.add(miniBomber)


    }
    onInitialize(_) {
        this.body.collisionType = CollisionType.Fixed
        this.on("collisionstart", (event) => this.onCollisionStart(event));
    }

    onCollisionStart(event) {
        const otherActor = event.other;
        if (otherActor instanceof Tile
            || otherActor instanceof TallTile
            || otherActor instanceof HorizontalTile
            || otherActor instanceof Eggs
            ) {
            this.kill();
            otherActor.kill();
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

        if (this.pos.x > 1368 || this.pos.y > 692) {

            this.vel = Vector.Zero;
            this.kill();
        }

    }

}

