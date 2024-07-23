import { benchmarker } from './benchmarker.mjs'
import { request } from 'undici'


const undiciFetch = async (url, options) => {

    return await request(url, options)

}

const undiciFetchFactory = (url, options = { method: 'GET'}) => {

    return async () => {

        return await undiciFetch(url, options)

    }
}


const result = await benchmarker(
    undiciFetchFactory(`http://localhost:3000`), 50, 100)

console.log({result})
