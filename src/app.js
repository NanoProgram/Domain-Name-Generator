/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["The", "Our"];
let adj = ["Great", "Big"];
let noun = ["Jogger", "Racoon"];

for (let i = 0; i < pronoun.length; i++) {
  console.log(pronoun[i]);
}

for (let i = 0; i < adj.length; i++) {
  console.log(adj[i]);
}
for (let i = 0; i < noun.length; i++) {
  console.log(noun[i]);
}
