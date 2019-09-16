/**
 * Shuffle array data and return an array.
 *
 * @param {Array} array Data to shuffle.
 */
export default array => array.sort(() => 0.5 - Math.random());
