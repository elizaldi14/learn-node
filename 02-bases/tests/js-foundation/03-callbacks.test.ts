import { getUserById } from "../../src/js-foundation/03-callbacks";




describe('js-fundations/03-callbacks', () => {

    test('getUserById should return', (done) => {
        const id = 1
        getUserById(id, (err, user) => {

            expect(err).toBeUndefined
            expect(user).toEqual({
                id: 1,
                name: 'John Doe'
            })

            done()
        })
    })

})



