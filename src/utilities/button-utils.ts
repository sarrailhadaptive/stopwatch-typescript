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
