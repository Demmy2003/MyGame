import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "./resources.js";

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
    }
    onInitialize(_) {
        this.body.collisionType = CollisionType.Fixed
    }
}