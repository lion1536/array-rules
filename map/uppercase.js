import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const array = ["vegetais", "frutas", "proteínas", "lipídios", "carboidratos"];
const upper = array.map((item) => item.toUpperCase());

console.log(upper);
console.log(array);

rl.close();
