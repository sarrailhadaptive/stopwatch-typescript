import { handleButtonFunctions, handleButtonText, handleButtonType } from '../../utilities/button-utils'

export default function Button({ buttonType, dispatch }: { buttonType: string; dispatch: Function }) {
  return (
    <button onClick={handleButtonFunctions(buttonType, dispatch)} className={handleButtonType(buttonType)}>
      {handleButtonText(buttonType)}
    </button>
  )
}
