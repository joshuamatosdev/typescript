export function helloWorld(name: string): string;
export function helloWorld(name: string,  feeling: string): string;
export function helloWorld(name: string, feeling?: string): string {
    if (feeling) {
        return `Hello ${name}, you are ${feeling} today!`;
    }
    return `Hello ${name}`;
}