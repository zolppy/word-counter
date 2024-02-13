const textField = document.querySelector("textarea");

const clearField = (field) => field.value = field.value && "";

const updateWords = (textField, outputEl) => {
  outputEl.textContent = (textField.value.trim() && textField.value.trim().split(" ").length) || "0";
}

const updateCharacters = (textField, outputEl) => {
  outputEl.textContent = textField.value.length;
}

window.addEventListener("load", () => clearField(textField));
textField.addEventListener("input", function() {
  const wordsEl = document.querySelector(".words");
  const charactersEl = document.querySelector(".characters");

  updateWords(this, wordsEl);
  updateCharacters(this, charactersEl);
});