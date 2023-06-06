const fs = require("fs"); //For CommonJS
const colors = require('colors');

// new Promise
// const createFile = (base = 5) => {
//   console.log("========================");
//   console.log("Table of multiply of ", base);
//   console.log("========================");

//   return new Promise((resolve, reject) => {
//     if (!Number(base)) {
//       reject(`The value ${base} is not a number`);
//       return;
//     }
//     let salida = "";
//     for (let i = 1; i <= 10; i++) {
//       let result = base * i;
//       salida += `${base} * ${i} = ${result}\n`;
//     }
//     console.log(salida);
//     fs.writeFile(`table-${base}.txt`, salida, (err) => {
//       if (err) reject(err);
//       else {
//         console.log("The file has been created successfully!");
//         resolve(`table-${base}.txt`); //filename
//       }
//     });
//   });
// };

// async Promise
const createFile = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      let result = base * i;
      salida += `${(base)} * ${i} = ${(result)}\n`;
      consola += `${colors.brightBlue(base)} * ${i} = ${colors.cyan(result)}\n`;
    }
    if (listar) {
      console.log(colors.brightBlue("========================"));
      console.log(colors.green("Table of multiply of "), base);
      console.log(colors.brightBlue("========================"));
      console.log(consola);
    }
    fs.writeFileSync(`./output/table-${base}.txt`, salida);
    return `table-${base}.txt`; //filename
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
