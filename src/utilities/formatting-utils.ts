export default function transformTime(time: number) {
  return `${addPadStart(Math.floor(time / 60000))}:${addPadStart(Math.floor((time / 1000) % 60))}.${addPadStart(
    Math.floor((time / 10) % 100)
  )}`
}

function addPadStart(time: number) {
  return time.toString().padStart(2, '0')
}
