interface SpaceShip {
    name: string;
    thrust: number;
}

export type ReadonlySpaceShip = Readonly<SpaceShip>; //

export const readOnlySpaceShip: ReadonlySpaceShip = {
    name: "SpaceX-1",
    thrust: 100,
}
