const fs = require("fs");
const path = require("path");
const UglifyJS = require("uglify-js");
const pkg = require("../package.json");

const comment = `/**
 * Moon Bars v${pkg.version}
 * Copyright 2017 Kabir Shah
 * Released under the MIT License
 * https://github.com/KingPixil/moon-bars
 */\r\n`;

fs.writeFileSync(path.resolve("./dist/moon-bars.js"), comment + fs.readFileSync("./src/index.js").toString());
fs.writeFileSync(path.resolve("./dist/moon-bars.min.js"), comment + UglifyJS.minify(fs.readFileSync("./src/index.js").toString()).code);