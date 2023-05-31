import {Actor, CollisionType, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Button extends Actor {
    constructor() {
        super();
        const button = Resources.Button.toSprite()
        button.height = 125
        button.width = 125
        this.graphics.add(button)
    };
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.body.collisionType = CollisionType.Passive
    }

}