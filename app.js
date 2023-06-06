// Table of multiply
// import { writeFile } from 'node:fs'; //For ES modules, type module in package.json
// const fs = require("fs"); //For CommonJS
const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();
// console.log(argv);
// console.log("base: yargs", argv.base);

// Just for education reasons
// console.log(process.argv);
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

createFile(argv.base, argv.listar, argv.hasta)
  .then((fileName) => {
    console.log("Archivo creado");
    console.log(fileName, "creado");
  })
  .catch((err) => console.log(err));
