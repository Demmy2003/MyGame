
import { ImageSource, Sound, Resource, Loader, Actor } from 'excalibur'

import background from '../images/Background.png'
import grass from '../images/grass.png'

import zombie from '../images/sketch-character.png'
import bomb from '../images/bomber.png'
import hammer from '../images/hammer.png'
import flyer from '../images/iets.png'

import tile from '../images/tile.png'

 const Resources = {
    Background: new ImageSource(background),
     Grass: new ImageSource(grass),

     Zombie: new ImageSource(zombie),
     Bomber: new ImageSource(bomb),
     Hammer: new ImageSource(hammer),
     Flyer: new ImageSource(flyer),

     Tile: new ImageSource(tile)

 }

 const ResourceLoader = new Loader ([
     Resources.Background,

     Resources.Grass,
     Resources.Zombie,
     Resources.Bomber,
     Resources.Hammer,
     Resources.Flyer,

     Resources.Tile
 ])

export {Resources, ResourceLoader}