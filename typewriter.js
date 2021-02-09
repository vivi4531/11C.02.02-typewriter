"use strict";

document.addEventListener("DOMContentLoaded", init);

let text;
let showtext;
let sentence = document.querySelector(".typewritten");
let i = 1;

function init() {
  console.log("Init - text have been fetched from the HTML");

  //get text
  text = sentence.textContent;

  //remove text
  sentence.innerHTML = "";

  writetext();
}

function writetext() {
  console.log("Writes one letter at a time.");

  //Show Nth letter, set time, increment, check for more letters
  showtext = text.substring(0, i);
  
  sentence.textContent = showtext;
  if (i < text.length) {
    i++;
    setTimeout(writetext, 500);
  }
}