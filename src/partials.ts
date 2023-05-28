export type JumpPartial = {
    spaceship: string;
    location: string;
    launched: boolean;
}

export const spaceJumpPartial = ({location, spaceship, launched}: Partial<JumpPartial>) => 
    `${spaceship} ${launched ? " jumped to " : "is preparing to jump to " } ${location}`

