await will stop the temp execution until promise complete,
if promise is success, await will return the result.
if failed, catch get the error.

Promise.all() runs all asynchronous operations together
await Promise.all([...]) will return result arrays each Promise.
