import fs from 'fs';
import { yarg } from './config/plugins/args.plugins';

//console.log(yarg)


let outputMessage = ''
const base = yarg.b
const headerMessage =  `
================================
        Tabla del ${base}       
================================
`

for(let i = 1; i <= yarg.l; i++){
    outputMessage += `${base} x ${i} = ${base*i}\n`
}

outputMessage = headerMessage + outputMessage

if(yarg.s == true){
    console.log(outputMessage)
}else{
    throw 'No esta asignado show'

}
const outputPath = `outputs`
fs.mkdirSync(outputPath, {recursive: true})

fs.writeFileSync(`outputs/tabla-${base}.txt`, outputMessage)