export interface OptionalSpaceShip {
    name?: string;
    thrust?: number;
}

export type RequiredSpaceShip = Required<OptionalSpaceShip>; 

//This will only work with all properties defined
export const spaceRequiredSpaceShip: RequiredSpaceShip = {
    name: "SpaceX-1",
    thrust: 100,
}
//This works because thrust is optional in the original OptionalSpaceShip interface
export const optionalSpaceShip: OptionalSpaceShip = {
    name: "SpaceX-1",
}

