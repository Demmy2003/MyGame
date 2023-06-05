import {Actor,Vector, CollisionType} from "excalibur";
import { Resources } from "../resources.js";


export class BaseTile extends Actor {
    constructor(width, height) {
        super({
            width: width,
            height: height,
        });
        const tileBlock = Resources.Tile.toSprite();
        tileBlock.width = width;
        tileBlock.height = height;

        this.graphics.add(tileBlock);
    }

    onInitialize(engine) {
        super.onInitialize(engine);
        this.body.collisionType = CollisionType.Active;
        this.body.gravity = true;
    }
}

export class Tile extends BaseTile {
    constructor() {
        super(30, 70);
    }
}

export class TallTile extends BaseTile {
    constructor() {
        super(30, 140);
    }
}

export class HorizontalTile extends BaseTile {
    constructor() {
        super(130, 30);
    }
}
