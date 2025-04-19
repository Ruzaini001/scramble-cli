/**
 * Returns a new string with the characters of `word` shuffled.
 * Example: "hello" → "lohel" (any permutation except identical)
 * @param {string} word
 * @returns {string}
 */
function scrambleWord(word) {
  // TODO: implement Fisher–Yates shuffle ⚙️
  describe("scrambleWord", () => {
    it("returns the same length as the original word", () => {
      expect(scrambleWord("hello").length).toBe(5);
    });
  
    it("does not return the identical word most of the time", () => {
      const word = "coding";
      const scrambled = scrambleWord(word);
      // This test has a small chance to fail if shuffle returns original order
      expect(scrambled).not.toBe(word);
    });
  });
  return word; // ← placeholder so tests fail
}

/**
 * Checks if `guess` matches the original `word` (case‑insensitive).
 * @param {string} word
 * @param {string} guess
 * @returns {boolean}
 */
function isCorrect(word, guess) {
  // TODO: compare after normalising case & trimming 🧐
  return false; // ← placeholder so tests fail
}

module.exports = { scrambleWord, isCorrect };
