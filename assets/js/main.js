const textEl = document.querySelector("textarea");
const wordsEl = document.querySelector(".words");
const charactersEl = document.querySelector(".characters");

const clearTextArea = () => textEl.value = textEl.value && "";

window.addEventListener("load", clearTextArea);