import transformTime from '../../utilities/formatting-utils'

export default function Timer({ elapsedTime }: { elapsedTime: number }) {
  return (
    <section className='stopwatch-timer-container'>
      <h1>{transformTime(elapsedTime)}</h1>
    </section>
  )
}
