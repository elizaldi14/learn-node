import axios, {} from 'axios'

export const httpCLientPlugin = {

    get: async(url: string) => {

        const {data} = await axios.get(url)
        return data

    },    

    post: async(url: string, body: any) => {
        throw new Error('No implemented post')
    },
    put: async(url: string, body: any ) => {
        throw new Error('No implemented put')
    },
    delete: async(url: string) => {
        throw new Error('No implemented delete')
    },


}

