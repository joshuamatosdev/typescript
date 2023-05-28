export function grabItemFrom<T>(array: T[], at: number = 0): T {
    return array[at];
}

export const numbers: number[] = [42, 7, 12];
export const strings: string[] = ["Hello", "TypeScript", "Generics"];

export const firstNumber = grabItemFrom(numbers, 1);
export const firstString= grabItemFrom(strings, 2);


export type Person = { name: string; age: number; };
export const people: Person[] = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 25},
];

export const firstPerson = grabItemFrom(people, 1);

