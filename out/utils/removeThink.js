"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = removeThink;
/**
 * Removes all <think> blocks and any newline characters following the </think> tag from the assistant's response.
 *
 * This function searches for every occurrence of text starting from the `<think>` tag and ending with the
 * `</think>` tag, including any newline characters that immediately follow the closing tag, and removes them.
 *
 * @param {string} assistantResponse - The original response string that may contain <think> blocks.
 * @returns {string} The cleaned response string with all <think> blocks and their trailing newlines removed.
 */
function removeThink(assistantResponse) {
    return assistantResponse.replace(/<think>[\s\S]*?<\/think>\n*/g, "");
}
//# sourceMappingURL=removeThink.js.map