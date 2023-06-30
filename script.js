"use strict";

const cameraButton = document.querySelector(".camera-body .camera-button");
const overlay = document.querySelector("#flash");
const cameraBar = document.querySelector(".camera-body .camera-bar");
const emoji = document.querySelector(".emoji");

let isFlashActive = false;

function randomEmoji() {
  const randomEmoji = Math.floor(Math.random() * 9 + 1);
  emoji.src = `emojis/emoji${randomEmoji}.png`;
  emoji.style.display = "block";
}

function handleCameraButton() {
  if (!isFlashActive) {
    cameraBar.classList.add("active");

    cameraButton.style.top = "-3px";
    setTimeout(() => {
      cameraButton.style.top = "";
    }, 200);

    setTimeout(() => {
      overlay.style.display = "block";
      randomEmoji();
    }, 500);

    setTimeout(() => {
      overlay.style.display = "none";
      cameraBar.classList.remove("active");
      setTimeout(() => (emoji.style.display = "none"), 800);
    }, 1000);

    isFlashActive = true;
    setTimeout(() => (isFlashActive = false), 1700);
  }
}

cameraButton.addEventListener("click", () => handleCameraButton());

// Disable zooming on mobile devices
function disableZoom() {
  var viewportMetaTag = document.querySelector('meta[name="viewport"]');

  if (viewportMetaTag) {
    viewportMetaTag.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
  } else {
    viewportMetaTag = document.createElement("meta");
    viewportMetaTag.setAttribute("name", "viewport");
    viewportMetaTag.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
    document.head.appendChild(viewportMetaTag);
  }
}

// Call the function to disable zooming
disableZoom();
