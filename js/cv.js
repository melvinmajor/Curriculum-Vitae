/**
 * Made by Melvin Campos Casares
 * Created : Late 2017
 * Last update : Early 2018
 */

function main() {}

/*
 * JS part specific to sidenav
 * It's an off-canvas menu w/ opacity
 */
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "#1565c0";
}