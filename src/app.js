/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomPalos = Math.floor(Math.random() * palos.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);

  let returnPaloI = (document.getElementById("palo").innerHTML =
    palos[randomPalos]);
  let returnNumero = (document.getElementById("numero").innerHTML =
    numeros[randomNumeros]);
  let returnPaloF = (document.getElementById("palo2").innerHTML =
    palos[randomPalos]);

  return {
    returnPaloI,
    returnNumero,
    returnPaloF
  };
};
