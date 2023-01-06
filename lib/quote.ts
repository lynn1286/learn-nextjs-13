import sleep from 'sleep-promise'

export async function getQuote(delay = 0) {
  if (delay) {
    await sleep(delay)
  }
  console.log('Getting quote')
  return (await fetch('https://api.quotable.io/random?tags=technology')).json()
}
