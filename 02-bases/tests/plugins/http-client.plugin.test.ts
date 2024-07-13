import { error } from "console";
import { httpCLientPlugin } from "../../src/plugins/http-client.plugin";



describe('plugins/hhtp-plugin', () => {

    test('httpClient.get() should return a string', async () => {

        const data = await httpCLientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')

        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
          })

    })


    test('httpClientPLugin should have POST, PUT and Delete methods',  () => {

        expect(typeof httpCLientPlugin.post).toBe('function')
        expect(typeof httpCLientPlugin.put).toBe('function')
        expect(typeof httpCLientPlugin.delete).toBe('function')
        expect(typeof httpCLientPlugin.get).toBe('function')



    })




})



