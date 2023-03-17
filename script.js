"use strict";

const cameraButton = document.querySelector(".camera-body .camera-button");
const overlay = document.querySelector("#flash");
const cameraBar = document.querySelector('.camera-body .camera-bar')
const emoji = document.querySelector('.emoji')





let isFlashActive = false
const emojis = ['🤣', '🤨', '😍', '🥵', '🤮', '🫣', '🫢', '🥳', '🤡']








function randomEmoji() {
  const randomEmoji = Math.floor(Math.random() * emojis.length)
  emoji.textContent = emojis[randomEmoji]
  emoji.style.display = 'block'
}


function handleCameraButton() {
  if (!isFlashActive) {
    cameraBar.classList.add('active')


    cameraButton.style.top = "-3px";
    setTimeout(() => {
      cameraButton.style.top = "";
    }, 200);


    setTimeout(() => {
      overlay.style.display = "block";
      randomEmoji()
    }, 500);


    setTimeout(() => {
      overlay.style.display = "none";
      cameraBar.classList.remove('active')
      setTimeout(() => emoji.style.display = 'none', 800);
    }, 1000);


    isFlashActive = true
    setTimeout(() => isFlashActive = false, 1700);
  }
}




cameraButton.addEventListener("click", () => handleCameraButton());