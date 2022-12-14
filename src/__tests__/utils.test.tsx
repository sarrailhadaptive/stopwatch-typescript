import { render, screen, prettyDOM } from '@testing-library/react'
import transformTime from '../utilities/formatting-utils'
import { handleButtonFunctions, handleButtonType, handleButtonText } from '../utilities/button-utils'

describe('Time Formatter', () => {
  it('Should format time from milli seconds to xx:xx.xx', () => {
    expect(transformTime(226000)).toBe('03:46.00')
    expect(transformTime(22600)).toBe('00:22.60')
  })
})

describe('Button Handlers', () => {
  it('Should return a string with the corresponding className depending on the buttonType passed', () => {
    expect(handleButtonType('start')).toBe('stopwatch-button-start')
    expect(handleButtonType('stop')).toBe('stopwatch-button-stop')
    expect(handleButtonType('reset')).toBe('stopwatch-button-reset')
    expect(handleButtonType('lap')).toBe('stopwatch-button-lap')
  }),
    it('Should return a string with the corresponding text depending on the buttonType passed', () => {
      expect(handleButtonText('start')).toBe('Start')
      expect(handleButtonText('stop')).toBe('Stop')
      expect(handleButtonText('reset')).toBe('Reset')
      expect(handleButtonText('lap')).toBe('Lap')
    })
})
