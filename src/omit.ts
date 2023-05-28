export interface OmitSpaceShip {
    name: string;
    thrust: number;
}
export type SpaceShipWithoutName = Omit<OmitSpaceShip, "name">; 

export type SpaceShipWithoutThrust = Omit<OmitSpaceShip, "thrust">;

export const spaceShipWithoutName: SpaceShipWithoutName = {
    thrust: 100000,
}

export const spaceshipThrust: SpaceShipWithoutThrust = {
    name: "SpaceX-1",
}

