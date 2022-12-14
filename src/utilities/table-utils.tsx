import { LapRows } from '../reducers/stopwatch-reducer'
import transformTime from './formatting-utils'

function findSmallestLapTime(lapRows: LapRows[]) {
  const minTimeLap = Math.min(...lapRows.map(({ time }) => time))
  return minTimeLap
}

function findHighestLapTime(lapRows: LapRows[]) {
  const maxTimeLap = Math.max(...lapRows.map(({ time }) => time))
  return maxTimeLap
}

function displayFastestAndSlowestLap(time: number, lapNumber: number, lapRows: LapRows[]) {
  if (lapNumber > 2) {
    if (findHighestLapTime(lapRows) === time) return 'slowest-lap'
    if (findSmallestLapTime(lapRows) === time) return 'fastest-lap'
  }
}

export function createRow(lapRows: LapRows[], lapNumber: number) {
  const listLaps = lapRows
    .map(({ id, time }) => {
      return (
        <tbody key={id}>
          <tr className={displayFastestAndSlowestLap(time, lapNumber, lapRows)}>
            <td>Lap {id}</td>
            <td>{transformTime(time)}</td>
          </tr>
        </tbody>
      )
    })
    .reverse()

  return listLaps
}

export function defaultRow(lapNumber: number, elapsedTime: number, lapRows: LapRows[]) {
  return (
    <tbody>
      <tr className='first-lap'>
        <td>Lap {lapNumber}</td>
        <td>
          {transformTime(
            elapsedTime - lapRows.map(({ time }) => time).reduce((prevLap, currLap) => prevLap + currLap, 0)
          )}
        </td>
      </tr>
    </tbody>
  )
}
