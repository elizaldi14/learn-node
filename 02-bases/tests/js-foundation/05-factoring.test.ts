import { buildMakePerson } from "../../src/js-foundation/05-factoring";


describe('Js-funtions/factoring', () => {

    const getUUID = () => '1234'
    const getAge = () => 35

    test('buildMakePerson testing', () => {



        const makePerson = buildMakePerson({getUUID, getAge})

        expect(typeof makePerson).toBe('function')

    })


    test('makePerson should return a person', () => {

        const makePerson = buildMakePerson({getUUID, getAge})
        const johnDoe = makePerson({name: 'John Doe', birthdate: '2005-14-07'})

        expect(johnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            age: 35,
            birthdate: '2005-14-07'
        
        })

    })
})



