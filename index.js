// if-else in javascript

let Dolphins = (96 + 108 + 110) / 3;
console.log(Dolphins);

let Koalas = (88 + 91 + 120) / 3;
console.log(Koalas);

if (Dolphins > Koalas) {
  console.log("Dolphins party has won");
} else if (Koalas > Dolphins) {
  console.log("Koalas party has won");
} else {
  console.log("both party not won");
}

if (Dolphins > Koalas && Dolphins >= 100) {
  console.log("Doly won");
} else if (Dolphins < Koalas && Koalas >= 100) {
  console.log("koalas won");
} else {
  consolelog("both one did not win the match");
}
