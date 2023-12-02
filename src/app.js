/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { who, action, what, when } from "./text";
import { images } from "./images";

window.onload = function() {
  //write your code here

  let dExcuse = "The dog crushed my homework when I finished";

  function rIndex() {
    return Math.floor(Math.random() * 4 + 1) - 1;
  }

  function concatExcuse() {
    dExcuse = `${who[rIndex()]} ${action[rIndex()]} ${what[rIndex()]} 
                ${when[rIndex()]}`;
    return dExcuse;
  }

  function onload(dExcuse) {
    document.getElementById("excuse").innerHTML = concatExcuse(dExcuse);
    document.getElementById("image").setAttribute("src", images[rIndex()]);
  }

  onload(dExcuse);
};
