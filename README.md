# Application Description

This is a NodeJs application that generates multiplication tables for a given number and exports the content to a txt file. The application is based on Fernando Herrera's Node course on Udemy..

## Installation

To install the application, follow these steps:

1. Clone the repository from GitHub
2. Install the dependencies by running `npm install`
3. Run the application using `node app.js`

## Usage

To use the application, run the following command:

```
node app.js --base=[base] --listar=[boolean] --hasta=[to]
```

Replace `[value]` with the base and `[to]` with numbers you want to use for generating the multiplication table.

The output will be saved in a txt file in the `output` directory.

| Options | |
|--------------|----------------------------|
| --help | Show help |
| --version | Show version number |
| -b, --base | Multiplication table base (required) |
| -l, --listar | Enumerate the multiplication table in console. (default: false, required) |
| -h, --hasta | Up to which number is multiplied (default: 10, required) |

## Credits

This application was developed based on Fernando Herrera's Node course on Udemy.