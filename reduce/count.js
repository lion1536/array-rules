import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function contagem(arr) {
  return arr.reduce((acc, item) => (item === "a" ? acc + 1 : acc), 0);
}

const array = ["a", "a", "e", "o", "o", "a"];
const resultado = contagem(array);
console.log(resultado);

rl.close();
