# node-fetch-benchmark
A benchmark of several fetch approach in node


# Results

## Fetch with native fetch

```
mamluk@mamluk-desktop:~/Projects/generic/node-fetch-benchmark$ yarn node client/nativeFetch.mjs 
{
  result: {
    duration: 1175.701831996441,
    requestCount: 5000,
    concurrency: 50,
    rounds: 100,
    round_avg: 11.75701831996441,
    request_avg: 0.23514036639928818
  }
}
```

## Undici

```
mamluk@mamluk-desktop:~/Projects/generic/node-fetch-benchmark$ yarn node client/undici.mjs 
{
  result: {
    duration: 445.35613399744034,
    requestCount: 5000,
    concurrency: 50,
    rounds: 100,
    round_avg: 4.453561339974403,
    request_avg: 0.08907122679948806
  }
}
```

