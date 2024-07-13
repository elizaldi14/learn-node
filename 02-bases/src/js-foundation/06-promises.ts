
const {http} = require('../plugins')

export const getPokemonById = async(id: number|string):Promise<string> => {

    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        const pokemon = await http.get(url)
    
        return pokemon.name
    

    }catch(error){
        throw `Pokemon not found with id ${id} `
    }








   /*return fetch( url )
    .then(( resp ) => resp.json())
    //.then(() => {throw new Error('Pokemon no exite')})
    .then( (pokemon) => pokemon.name)*/

}





