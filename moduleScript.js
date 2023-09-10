// function init() {
//   script.log("Custom module init");
// }

// function moduleParameterChanged(param) {
//   script.log(param.name + " parameter changed");

//   if (param.isParameter()) {
//   }
// }

function moduleValueChanged(value) {
  script.log(value.name + " value changed");

  if (!value.isParameter()) {
    // if it is a trigger
    if (value.name === "playSelectedCue") playSelectedCue();
    else if (value.name === "pause") pause();
    else if (value.name === "rewind") rewind();
  }
}

// Here are the callback functions for the commands

function playSelectedCue() {
  local.send("/mitti/playSelectedCue");
}

function playCueAtIndex(index) {
  local.send("/mitti/playCueAtIndex", index);
}

function pause() {
  local.send("/mitti/pause");
}

function rewind() {
  local.send("/mitti/rewind");
}