import { benchmarker } from './benchmarker.mjs'

const nativeFetch = async (url, options) => {

    return await fetch(url, options)

}

const nativeFetchFactory = (url, options = { method: 'GET'}) => {

        return async () => {

            return await nativeFetch(url, options)

        }
}



const result = await benchmarker(
    nativeFetchFactory(`http://localhost:3000`), 50, 100)

console.log({result})
