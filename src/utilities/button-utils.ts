import { ACTIONS } from '../reducers/stopwatch-reducer'

export const handleButtonType = (buttonType: string) => {
  if (buttonType === 'start') return 'stopwatch-button-start'
  if (buttonType === 'stop') return 'stopwatch-button-stop'
  if (buttonType === 'reset') return 'stopwatch-button-reset'
  if (buttonType === 'lap') return 'stopwatch-button-lap'
}

export const handleButtonText = (buttonType: string) => {
  if (buttonType === 'start') return 'Start'
  if (buttonType === 'stop') return 'Stop'
  if (buttonType === 'reset') return 'Reset'
  if (buttonType === 'lap') return 'Lap'
}

export const handleButtonFunctions = (buttonType: string, dispatch: Function) => {
  if (buttonType === 'start') return () => dispatch({ type: ACTIONS.START_TIMER, timestamp: Date.now() })
  if (buttonType === 'stop') return () => dispatch({ type: ACTIONS.STOP_TIMER })
  if (buttonType === 'reset') return () => dispatch({ type: ACTIONS.RESET_TIMER })
  if (buttonType === 'lap') return () => dispatch({ type: ACTIONS.ADD_LAP })
}
