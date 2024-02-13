const textEl = document.querySelector("textarea");
const wordsEl = document.querySelector(".words");
const charactersEl = document.querySelector(".characters");

const clearField = (field) => field.value = field.value && "";

window.addEventListener("load", () => clearField(textEl));