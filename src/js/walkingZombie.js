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
    }
    onInitialize(_engine) {
        this.body.collisionType = CollisionType.Fixed
    }

}



