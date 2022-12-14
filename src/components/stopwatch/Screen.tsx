import Timer from './Timer'
import Button from './Button'
import Table from './Table'
import reducer, { ACTIONS, initialState } from '../../reducers/stopwatch-reducer'
import { useEffect, useReducer } from 'react'

export default function Screen() {
  const [states, dispatch]: [typeof initialState, Function] = useReducer(reducer, initialState)

  useEffect(() => {
    if (states.isTimerRunning === true) {
      const timerID = setInterval(() => {
        dispatch({
          type: ACTIONS.SET_ELAPSEDTIME,
          elapsedTime: Date.now() - states.timestamp,
        })
      }, 10)
      return () => clearInterval(timerID)
    }
  }, [states])

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
