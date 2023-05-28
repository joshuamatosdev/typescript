type SpaceShip = { name: string, thrust: number };
export type RecordSpaceShipType = "Space-X" | "Falcon" | "Millennium" | "Enterprise";
export type SpaceShipRecord = Record<RecordSpaceShipType, SpaceShip>;

export const spaceShipRecord: SpaceShipRecord = {
    "Space-X": {
        name: "Dragon",
        thrust: 100000,
    },
    "Falcon": {
        name: "X-Wing",
        thrust: 200000,
    },
    "Millennium": {
        name: "Tie Fighter",
        thrust: 300000,
    },
    "Enterprise": {
        name: "Mark 1",
        thrust: 400000,
    }
}

