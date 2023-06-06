
import { ImageSource, Loader} from 'excalibur'

import background from '../images/Background.png'
import grass from '../images/grass.png'
import blackShade from "../images/blackShade.png"

import button from "../images/button.png"
import startTekstOne from "../images/startTekstOne.png"
import startTekstTwo from "../images/starttesktTwo.png"
import failTekst from "../images/failTekst.png"
import winTekst from "../images/winTekst.png"

import zombie from '../images/zombie.png'
import bomb from '../images/bomber.png'
import hammer from '../images/hammer.png'
import flyer from '../images/flyer.png'
import bullet from '../images/bullet.png'

import tile from '../images/tile.png'
import egg from "../images/dragonEgg.png"

import explosion from "../images/explosion.png"

 const Resources = {

     Background: new ImageSource(background),
     Grass: new ImageSource(grass),
     BlackShade: new ImageSource(blackShade),

     Button: new ImageSource(button),

     StartTekstOne: new ImageSource(startTekstOne),
     StartTekstTwo: new ImageSource(startTekstTwo),
     FailTekst: new ImageSource(failTekst),
     WinTekst: new ImageSource(winTekst),

     Zombie: new ImageSource(zombie),
     Bomber: new ImageSource(bomb),
     Hammer: new ImageSource(hammer),

     Flyer: new ImageSource(flyer),
     Bullet: new ImageSource(bullet),

     Explosion: new ImageSource(explosion),

     Tile: new ImageSource(tile),
     Egg: new ImageSource(egg)

 }

 const ResourceLoader = new Loader ([

     Resources.Background,
     Resources.Grass,
     Resources.BlackShade,

     Resources.Button,

     Resources.StartTekstOne,
     Resources.StartTekstTwo,
     Resources.FailTekst,
     Resources.WinTekst,

     Resources.Zombie,
     Resources.Bomber,
     Resources.Hammer,

     Resources.Flyer,
     Resources.Bullet,

     Resources.Explosion,

     Resources.Tile,
     Resources.Egg
 ])

export {Resources, ResourceLoader}