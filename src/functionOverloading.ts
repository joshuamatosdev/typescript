export function formatDate(date: string): string;
export function formatDate(date: Date): string;
export function formatDate(date: string | Date): string {
    let formatDate = (typeof date === 'string') ? new Date(Date.parse(date)) : date;
    const month = (formatDate.getMonth() + 1).toString().padStart(2, '0');
    const day = formatDate.getDate().toString().padStart(2, '0');
    const year = formatDate.getFullYear();
    return `${month}-${day} in the year ${year}`;
}

