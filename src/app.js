/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//obtengo elemento
let formm = document.getElementById("form");
formm.addEventListener("submit", function(event) {
  //llamo escucha mira
  event.preventDefault(); //elimino cosas x defecto

  if (InputCard.value.length == 0) {
    InputCard.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    InputCard.style.backgroundColor = "white";
    InputCard.value = "";
  }
  if (CvcCard.value.length == 0) {
    CvcCard.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    CvcCard.style.backgroundColor = "white";
    CvcCard.value = "";
  }
  if (Amount.value.length == 0) {
    Amount.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    Amount.style.backgroundColor = "white";
    Amount.value = "";
  }
  if (Name.value.length == 0) {
    Name.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    Name.style.backgroundColor = "white";
    Name.value = "";
  }
  if (LastName.value.length == 0) {
    LastName.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    LastName.style.backgroundColor = "white";
    LastName.value = "";
  }

  if (City.value.length == 0) {
    City.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    City.style.backgroundColor = "white";
    City.value = "";
  }
  if (State.value.length == 0) {
    State.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    State.style.backgroundColor = "white";
    State.value = "";
  }
  if (PostalCode.value.length == 0) {
    PostalCode.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    PostalCode.style.backgroundColor = "white";
    PostalCode.value = "";
  }
  if (Messager.value.length == 0) {
    Messager.style.backgroundColor = "#F8D7DA";
    myAlert.style.display = "block";
  } else {
    myAlert.style.display = "none";
    Messager.style.backgroundColor = "white";
    Messager.value = "";
  }
});
