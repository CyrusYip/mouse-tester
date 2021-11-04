// define elements and functions
const button = document.querySelector("#button");
let log = document.querySelector("#log");
changeColor = (delay = 200) => {
  log.textContent = "";
  log.className = "blackColor";
  button.className = "whiteBackground";
  setTimeout(() => {
    log.className = "redColor";
    button.className = "pinkBackground";
  }, delay);
};
modifyLog = (text, delay = 200) => {
  setTimeout(() => {
    log.textContent = text;
  }, delay);
};

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
const buttonPairs = {
  0: "left button",
  1: "middle button",
  2: "right button",
  3: "back button",
  4: "forward button",
};
button.addEventListener("mousedown", (e) => {
  changeColor();
  modifyLog(buttonPairs[e.button]);
});

// detect scroll
button.addEventListener("wheel", (e) => {
  changeColor();
  e.deltaY < 0 ? modifyLog("scroll forward") : modifyLog("scroll backward");
});
