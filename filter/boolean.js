import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const array = ["barco", "mar", "corpo", false, true, false, false, 0];

const filtered = array.filter(Boolean);

console.log(filtered);

rl.close();
