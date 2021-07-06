/**
 * Clones the given data.
 */
export function clone(data, defaultValue) {
    if (typeof data === 'undefined')
        return defaultValue;
    return JSON.parse(JSON.stringify(data));
}
/**
 * Generates a random positive integer.
 */
export function generateRandomNumber() {
    return Math.round(Math.random() * 10000000);
}
