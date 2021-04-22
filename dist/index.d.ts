/**
 * Immediately throw `e`, as if invoking a throw expression.
 *
 * @see https://babeljs.io/docs/en/babel-plugin-proposal-throw-expressions
 */
export function toss(e: unknown): never;
export default toss;
