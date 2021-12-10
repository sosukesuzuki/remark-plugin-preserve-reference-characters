/**
 * @typedef {import('mdast').Root} Root
 */

// @ts-expect-error
import { preserveReferenceCharaceters } from "micromark-extension-preserve-reference-characters";
// @ts-expect-error
import { preserveReferenceCharacetersFromMarkdown } from "mdast-util-preserve-reference-characters";

/** @type {import('unified').Plugin<void[], Root>} */
function preserveReferenceCharacetersPlugin() {
  const data = this.data();

  add("micromarkExtensions", preserveReferenceCharaceters);
  add("fromMarkdownExtensions", preserveReferenceCharacetersFromMarkdown());

  /**
   * @param {string} field
   * @param {unknown} value
   */
  function add(field, value) {
    const list = /** @type {unknown[]} */ (
      data[field] ? data[field] : (data[field] = [])
    );

    list.push(value);
  }
}

export { preserveReferenceCharacetersPlugin };
