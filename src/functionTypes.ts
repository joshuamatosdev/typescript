export type AddFunction = (a: number, b: number) => number;

export const add: AddFunction = (x, y) => x + y;


export type Jump = (person: string, location:string, landed: boolean) => string;

export const spaceJump: Jump = (person, location, landed) => 
    landed ? `${person} jumped to ${location}` : `${person} didn't jump to ${location}`;

