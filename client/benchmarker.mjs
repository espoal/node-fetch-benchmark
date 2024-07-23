import { performance } from 'node:perf_hooks'

export const benchmarker  = async (fetcher, concurrency = 5, rounds = 10) => {

    let currentRound = 0

    const startTime = performance.now()

    while (currentRound < rounds) {

        const requests = Array.from({ length: concurrency },
            () => fetcher())

        await Promise.all(requests)

        currentRound += 1

    }

    const endTime = performance.now()

    const duration = endTime - startTime
    const requestCount = concurrency * rounds
    const round_avg = duration / rounds
    const request_avg = duration / requestCount

    return {
        duration,
        requestCount,
        concurrency,
        rounds,
        round_avg,
        request_avg
    }

}
