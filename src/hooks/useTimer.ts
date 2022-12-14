import { useEffect } from 'react'
import { ACTIONS, initialState } from '../reducers/stopwatch-reducer'

export default function useTimer(states: typeof initialState, dispatch: Function) {
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

  return states
}
