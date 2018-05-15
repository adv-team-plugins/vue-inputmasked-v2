/* eslint-disable no-param-reassign, no-unused-expressions */

/**
 * Simple format function borrowed from PureMask.js
 * {@link https://github.com/romulobrasil/PureMask.js}
 *
 * @param {String} data String to mask (input value)
 * @param {String} [mask] Mask format, like `####-##`
 * @returns {string} Formatted text
 */
export default function (data, mask) {
  // don't do anything if mask is undefined/null/etc
  if (!mask) return data;

  data = data.replace(/ /g, '');

  const maskStartRegExp = /^([^#ANX]+)/;

  if (+data.length === 1 && maskStartRegExp.test(mask)) {
    data = maskStartRegExp.exec(mask)[0] + data;
  }

  let text = '';

  // Adds a char offset to allow testing on optional values
  let cOffset = 0;

  for (let i = 0, x = 1; x && i < mask.length; i += 1) {
    // Uses the optional mask character offset
    const c = data.charAt(i - cOffset);
    const m = mask.charAt(i);

    switch (m) {
      case '#':
        /\d/.test(c) ? text += c : x = 0;
        break;
      case 'A':
        /[a-z]/i.test(c) ? text += c : x = 0;
        break;
      case 'N':
        /[a-z0-9]/i.test(c) ? text += c : x = 0;
        break;
      // Skips testing if optional field is specified
      case '?':
        cOffset += 1;
        break;
      case 'X':
        text += c;
        break;
      default:
        text += m;

        // preserve characters that are in the same spot we need to insert a mask
        // character by shifting the data over to the right (issue #5, & #7)
        if (c && c !== m) {
          data = ` ${data}`;
        }

        break;
    }
  }
  return text;
}
