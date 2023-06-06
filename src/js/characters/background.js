import {Actor, CollisionType} from 'excalibur';
import { Resources } from "../resources.js";

export class Background extends Actor {

    constructor() {
        super({
            width: 1366,
            height: 690
        });
        const backgroundImage = Resources.Background.toSprite();
        this.graphics.add(backgroundImage);
    }
    onInitialize(_) {
        this.body.collisionType = CollisionType.PreventCollision
    }

}

export class Grass extends Actor {
    constructor() {
        super({
            width: 1366,
            height: 1
        });
        const grassImage = Resources.Grass.toSprite();
        this.graphics.add(grassImage)
    }
    onInitialize(_) {
        this.body.collisionType = CollisionType.Fixed
    }
}


export class Shade extends Actor {
    constructor() {
        super({
            width: 1366,
            height: 690
        });
        const backgroundShade = Resources.BlackShade.toSprite();
        backgroundShade.width = 1366
        backgroundShade.height = 800
        this.graphics.add(backgroundShade);
    }
}