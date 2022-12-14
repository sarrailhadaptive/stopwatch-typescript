import Timer from './Timer'
import Button from './Button'
import Table from './Table'
import reducer, { initialState } from '../../reducers/stopwatch-reducer'
import { useReducer } from 'react'
import useTimer from '../../hooks/useTimer'

export default function Screen() {
  const [states, dispatch]: [typeof initialState, Function] = useReducer(reducer, initialState)

  useTimer(states, dispatch)

  return (
    <section className='stopwatch-screen'>
      <Timer elapsedTime={states.elapsedTime} />
      <section className='stopwatch-button-container'>
        <Button buttonType={states.isTimerRunning ? 'lap' : 'reset'} dispatch={dispatch} />
        <Button buttonType={states.isTimerRunning ? 'stop' : 'start'} dispatch={dispatch} />
      </section>
      <Table elapsedTime={states.elapsedTime} lapNumber={states.lapNumber} lapRows={states.lapRows} />
    </section>
  )
}
