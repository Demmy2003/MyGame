import {Actor, CollisionType, Vector} from "excalibur";
import { Resources } from "./resources.js";

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
    }
}