//console.log( process.env);


const { SHELL, XDG_CONFIG_DIRS } = process.env;

//console.table({SHELL, XDG_CONFIG_DIRS});

export const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [, , , batman] = characters;

//console.log(batman)