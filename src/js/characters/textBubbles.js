import {Actor} from "excalibur";
import { Resources } from "../resources.js";

export class BaseTekst extends Actor {
    constructor() {
        super({
            width: 200,
            height: 150
        });
    }
}

export class StartTekstOne extends BaseTekst {
    constructor() {
        super();
        const textOne = Resources.StartTekstOne.toSprite()
        textOne.width = 510
        textOne.height = 210
        this.graphics.add(textOne)
    }
}

export class StartTekstTwo extends BaseTekst {
    constructor() {
        super();
        const textTwo = Resources.StartTekstTwo.toSprite()
        textTwo.width = 500
        textTwo.height = 200
        this.graphics.add(textTwo)
    }
}

export class FailTekst extends BaseTekst {
    constructor() {
        super();
        const fail = Resources.FailTekst.toSprite()
        this.graphics.add(fail)
    }
}

export class WinTekst extends BaseTekst {
    constructor() {
        super();
        const win = Resources.WinTekst.toSprite()
        this.graphics.add(win)
    }
}
