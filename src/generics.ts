type Weapon = {
    damage: number;
    scaling: string;
    weight?: number;
    range?: number;
    skill?: string;
}

export const weapon = {
    damage: 100,
    scaling: "A",
}

export function getWeaponTotalDamage<T extends Weapon>({damage, scaling}: T): {
    damage: number;
    scaling: string;
} {
    return {
        damage,
        scaling,
    }
}

export const riversOfBlood: Weapon = getWeaponTotalDamage({damage: 100, scaling: "A"});
export const moonlightGreatsword: Weapon = getWeaponTotalDamage({damage: 200, scaling: "S"});
export const brokenStraightSword: Weapon = getWeaponTotalDamage({damage: 10, scaling: "E"});







