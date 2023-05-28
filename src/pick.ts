export interface PickSpaceShip {
    name: string;
    thrust: number;
}

export type PickNameAndThrust = Pick<PickSpaceShip, "name" | "thrust">; // 

export type PickName = Pick<PickSpaceShip, "name">;

export type PickThrust = Pick<PickSpaceShip, "thrust">;

export const pickNameAndThrustSpaceShip: PickNameAndThrust = {
    name: "SpaceX-1",
    thrust: 100000,
}

export const spaceshipName: PickName = {
    name: "SpaceX-1",
}

export const spaceshipThrust: PickThrust = {
    thrust: 100000,
}

type MyShip = {
    name: string;
    more: string;
}

//constant time
function updateShip(ship: MyShip): MyShip {
    ship.name = "New Ship";
    return ship
}
//exponential 
function updateShip2(ship: MyShip): MyShip {
    let spreadElements = Object.assign(ship, {name: "New Ship"});
    let spreadLargeDataSet = Object.assign(ship, {more: "New Ship"});
    const updatedShip = {spreadElements, name: "New Ship", spreadLargeDataSet, more: "New Ship" };
    return updatedShip;
}