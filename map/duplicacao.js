import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const array = [1, 2, 3, 4, 5];
const double = array.map((x) => x * 2);
console.log(double);

rl.close();
