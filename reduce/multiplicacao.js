import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const array = [1, 65, 3254, 354542, 767543, 900075];
const multiplicar = array.reduce((acumulador, valor) => acumulador * valor, 1);
console.log(multiplicar);

rl.close();
