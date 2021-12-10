/**
 * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension
 * @typedef {import('mdast-util-from-markdown').Transform} FromMarkdownTransform
 * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle
 * @typedef {import('mdast').Text} Text
 */

/**
 * @returns {FromMarkdownExtension}
 */
function preserveReferenceCharacetersFromMarkdown() {
  /** @type {FromMarkdownHandle} */
  function enterCharacterReference(token) {
    this.enter({ type: "text", value: "" }, token);
  }

  /** @type {FromMarkdownHandle} */
  function exitCharacterReference(token) {
    const node = /** @type {Text} */ (this.stack[this.stack.length - 1]);
    const value = this.sliceSerialize(token);
    node.value = value;
    this.exit(token);
  }

  /** @type {FromMarkdownExtension} */
  const extension = {
    enter: { characterReference: enterCharacterReference },
    exit: { characterReference: exitCharacterReference },
  };
  return extension;
}

export { preserveReferenceCharacetersFromMarkdown };
