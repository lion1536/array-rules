import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

function filtrarLongas(palavras) {
  return palavras.filter((palavra) => palavra.length > 3);
}

const array = ["sol", "lua", "estrela"];
const resultado = filtrarLongas(array);

console.log(resultado);

rl.close();
