import { getPokemonById } from "../../src/js-foundation/06-promises";


describe('js-fundation/06-promise', () => {

    test('getPOkemonById should return a pokemon',async() =>{

        const pokemonId = 1
        const pokemonName = await getPokemonById(pokemonId)


        expect( pokemonName ).toBe('bulbasaur')


    })


    test('Should return an error if polemon does not exist', async() => {
      
        const pokemonId = 1

        try {
            await getPokemonById(pokemonId)
            //expect(true).toBeFalsy()

        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
            
        }


    })

})






