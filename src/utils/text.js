export const splitText = (text) =>
  text.split(" ").map((word, wordIndex, words) => ({
    key: `${word}-${wordIndex}`,
    chars: word.split(""),
    addSpace: wordIndex < words.length - 1,
  }));
