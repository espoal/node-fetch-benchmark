import { createServer } from 'node:http'
import { parse } from 'node:url'
import { setTimeout } from 'node:timers/promises'


const handler = async (req, res) => {
    // console.log({ req })
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    const { search } = parse(req.url)
    const params = new URLSearchParams(search)
    const delay = params.has('delay') ?
        Number(params.get('delay')) : 0

    await setTimeout(Number(delay))

    res.end(`Echo with ${delay}ms delay.\n`)
}

const server = createServer(handler)

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
})
