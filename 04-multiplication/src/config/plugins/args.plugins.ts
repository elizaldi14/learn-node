import yargs, { option } from 'yargs'

import {hideBin} from 'yargs/helpers'


export const yarg = yargs(process.argv)
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication'
    })
    .check((argv, option) =>{
        
        if ( argv.b < 1) throw 'La base tiene que ser un numero'




        return true;
    })
    .parseSync()