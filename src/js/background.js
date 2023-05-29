import {Actor, CollisionType, Vector} from 'excalibur';
import { Resources } from "./resources.js";
import {Groups} from './groups.js'

export class Background extends Actor {

    constructor() {
        super({
            width: 1366,
            height: 690
        });
        const backgroundImage = Resources.Background.toSprite();
        this.body.group = Groups.floorGroup;
        this.graphics.add(backgroundImage);
    }
    onInitialize(_) {
        this.body.collisionType = CollisionType.Passive
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
