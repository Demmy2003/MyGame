import {Actor, CollisionType} from "excalibur";
import { Resources } from "./resources.js";


export class Tile extends Actor {

    constructor() {
        super({
            width: 50,
            height: 50,
        });
        const tileBlock = Resources.Tile.toSprite();
        tileBlock.height = 70
        tileBlock.width = 70

        this.graphics.add(tileBlock)

    }
    onInitialize(engine) {
        super.onInitialize(engine);
        this.body.collisionType = CollisionType.Active;
        this.body.gravity = true;
    }

}
