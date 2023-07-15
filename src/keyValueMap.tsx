import {pickNameAndThrustSpaceShip, spaceshipName} from "./pick";
import {optionalSpaceShip, spaceRequiredSpaceShip} from "./required";
import {spaceShipRecord} from "./record";
import {readOnlySpaceShip} from "./readonly";
import {spaceShipWithoutName} from "./omit";
import {add, spaceJump} from "./functionTypes";
import {spaceJumpPartial} from "./partials";
import {brokenStraightSword, getWeaponTotalDamage, moonlightGreatsword, riversOfBlood} from "./generics";
import {helloWorld} from "./functionOverloading";

export const keyValueMap: any = {
    "function overload": helloWorld("Bob"),
    "function overload #2": helloWorld("Bob", "Awesome"),
    "Pick": spaceshipName,
    "Required": spaceRequiredSpaceShip,
    "Optional": optionalSpaceShip,
    "Record": spaceShipRecord["Space-X"],
    "ReadOnly": readOnlySpaceShip,
    "Partial": pickNameAndThrustSpaceShip,
    "Omit": spaceShipWithoutName,
    "Function Types 1": add(1, 2),
    "Function Types 2": spaceJump("Bob", "Mars", true),
    "Partials": spaceJumpPartial({spaceship: "SpaceX-1", location: "Mars", launched: false}),
    "Generics 1": riversOfBlood,
    "Generics 2": moonlightGreatsword,
    "Generics 3": brokenStraightSword,
    "Generics 4": getWeaponTotalDamage(brokenStraightSword),
}