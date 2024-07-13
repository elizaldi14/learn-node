"use strict";
//console.log( process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, XDG_CONFIG_DIRS } = process.env;
//console.table({SHELL, XDG_CONFIG_DIRS});
exports.characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [, , , batman] = exports.characters;
//console.log(batman)
