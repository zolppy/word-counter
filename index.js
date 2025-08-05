const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");
const wordCount = document.querySelector("#word-count");
const lineCount = document.querySelector("#line-count");

function countCharacters(text) {
  return text.length;
}

function countWords(text) {
  return (text.trim() && text.trim().split(" ").length) || 0;
}

function countLines(text) {
  // TODO
  return 0;
}

textInput.addEventListener("input", (event) => {
  const text = event.target.value;
  charCount.textContent = countCharacters(text);
  wordCount.textContent = countWords(text);
  lineCount.textContent = countLines(text);
});
