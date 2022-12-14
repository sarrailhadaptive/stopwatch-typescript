import { handleButtonText, handleButtonType } from '../../utilities/button-utils'

export default function Button({
  buttonType,
  startTimer,
  stopTimer,
}: {
  buttonType: string
  startTimer: Function
  stopTimer: Function
}) {
  const handleButtonFunctions = () => {
    if (buttonType === 'start') return () => startTimer(Date.now())
    if (buttonType === 'stop') return () => stopTimer()
    else {
      return () => {}
    }
  }

  return (
    <button onClick={handleButtonFunctions()} className={handleButtonType(buttonType)}>
      {handleButtonText(buttonType)}
    </button>
  )
}
