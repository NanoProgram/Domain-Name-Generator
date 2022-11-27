/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let z = 0; z < domain.length; z++) {
          console.log(pronoun[i] + adj[j] + noun[x] + domain[z]);
        }
      }
    }
  }
};

let pronoun = ["The", "Our"];
let adj = ["mighty", "monstrous", "stinky", "smooth"];
let noun = ["thor", "gamer", "player", "cat"];
let domain = [".com", ".cl", ".org", ".gob"];

/* Constructo del nested loop
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let x = 0; x < noun.length; x++) {
      console.log(pronoun[i] + adj[j] + noun[x]);
    }
  }
}*/
