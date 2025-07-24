import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const array = [2, 5, 15, 30, 23];
const soma = array.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0
);
console.log(soma);

rl.close();
