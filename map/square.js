import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const array = [4, 9, 13, 16, 22];
const potencia = array.map((x) => x ** 2);
console.log(potencia);

rl.close();
