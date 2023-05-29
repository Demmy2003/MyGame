import { CollisionGroupManager, CollisionGroup } from "excalibur";

export class Groups {
    static teamGroup = CollisionGroupManager.create("team");
    static tileGroup = CollisionGroupManager.create("tiles");
    static eggGroup = CollisionGroupManager.create("eggs");
    static floorGroup = CollisionGroupManager.create("floor");

}