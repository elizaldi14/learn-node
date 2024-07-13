
import { emailTemplate } from "../../src/js-foundation/01-template"



describe('js-foundation/01-template', () => {
    test('emailTemplate', () => {
        expect(emailTemplate).toContain('Hi')
    })


    test('emailTemplate shoul contain {{name}} and {{ordeId}}', () => {
        expect(emailTemplate).toMatch(/{{name}}/)
        expect(emailTemplate).toMatch(/{{orderId}}/)

        expect(emailTemplate).toContain('{{name}}')
    })
})