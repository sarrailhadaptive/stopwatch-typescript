import { handleButtonText, handleButtonType } from '../../utilities/button-utils'
import { ACTIONS } from '../../reducers/stopwatch-reducer'

export default function Button({ buttonType, dispatch }: { buttonType: string; dispatch: Function }) {
  const handleButtonFunctions = () => {
    if (buttonType === 'start') return () => dispatch({ type: ACTIONS.START_TIMER, timestamp: Date.now() })
    if (buttonType === 'stop') return () => dispatch({ type: ACTIONS.STOP_TIMER })
    if (buttonType === 'reset') return () => dispatch({ type: ACTIONS.RESET_TIMER })
    if (buttonType === 'lap') return () => dispatch({ type: ACTIONS.ADD_LAP })
  }
  return (
    <button onClick={handleButtonFunctions()} className={handleButtonType(buttonType)}>
      {handleButtonText(buttonType)}
    </button>
  )
}
