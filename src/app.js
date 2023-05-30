/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const elemento = document.querySelector("#excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let randomIndexWho = Math.floor(Math.random() * who.length);
  let randomWho = who[randomIndexWho];
  //console.log(randomWho);

  let action = ["ate", "peed", "crushed", "broke"];
  let randomIndexAction = Math.floor(Math.random() * action.length);
  let randomAction = action[randomIndexAction];
  //console.log(randomAction);

  let what = ["my homework", "the keys", "the car"];
  let randomIndexWhat = Math.floor(Math.random() * what.length);
  let randomWhat = what[randomIndexWhat];
  //console.log(randomWhat);

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomIndexWhen = Math.floor(Math.random() * when.length);
  let randomWhen = when[randomIndexWhen];
  //console.log(randomWhen);

  elemento.innerText =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
};
