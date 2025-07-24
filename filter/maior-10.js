import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const numbers = [2, 7, 10, 35, 345, 3134, 54];
const resultado = numbers.filter((result) => result > 10);
console.log(resultado);

rl.close();
