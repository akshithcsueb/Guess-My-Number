"use strict";

const nameInputVar = document.querySelector(".name-input");
const playButtonVar = document.querySelector(".play-button");

playButtonVar.onclick = function () {
  let name = nameInputVar.value;
  document.cookie = name;
};
