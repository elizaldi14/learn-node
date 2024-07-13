import {characters} from '../../src/js-foundation/02-destructuring'



describe('js-foundation/02-destructuring', () => {

    test('characters contain Flash, superman', () => {

        expect(characters).toContain('Flash')
        expect(characters).toContain('Superman')

    })
    

    test('first character should contain Flash, and second character should superman', () => {
        const [first, second] = characters


        expect(first).toBe('Flash')
        expect(second).toBe('Superman')
    })

})