// define elements
let button = document.querySelector("#button");
let log = document.querySelector("#log");

// disable forward button and back button
modifyHistory = () => {
  history.pushState(null, document.title, location.href);
};
modifyHistory();
window.addEventListener("popstate", () => {
  modifyHistory();
});

// disable context menu
button.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// detect click
button.addEventListener("mousedown", logMouseButton);
function logMouseButton(e) {
  if (e.button === 0) {
    log.textContent = "left button";
  } else if (e.button === 1) {
    log.textContent = "middle button";
  } else if (e.button === 2) {
    log.textContent = "right button";
  } else if (e.button === 3) {
    log.textContent = "back button";
  } else if (e.button === 4) {
    log.textContent = "forward button";
  } else {
    log.textContent = `unknown button code: ${e.button}`;
  }
}

// detect scroll
button.addEventListener("wheel", logScroll);
function logScroll(e) {
  console.log(e);
  if (e.deltaY < 0) {
    log.textContent = "scroll forward";
  } else if (e.deltaY > 0) {
    log.textContent = "scroll backward";
  }
}
