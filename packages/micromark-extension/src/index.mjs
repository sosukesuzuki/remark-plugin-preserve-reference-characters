/**
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

const AND = 38;
const SEMI_COLON = 59;

/** @type {Tokenizer} */
function tokenize(effects, ok, nok) {
  return start;
  /** @type {State} */
  function start(code) {
    effects.enter("characterReference");
    effects.consume(code);
    return inside(code);
  }
  /** @type {State} */
  function inside(code) {
    if (code === -5 || code === -4 || code === -3 || code === null) {
      return nok(code);
    }
    if (code === SEMI_COLON) {
      effects.consume(code);
      effects.exit("characterReference");
      return ok;
    }
    effects.consume(code);
    return inside;
  }
}

/** @type {Extension} */
const preserveReferenceCharaceters = {
  text: {
    [AND]: {
      name: "preserveReferenceCharaceters",
      tokenize,
    },
  },
};

export { preserveReferenceCharaceters };
