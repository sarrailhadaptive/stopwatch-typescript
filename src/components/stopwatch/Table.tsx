import { TableProps } from '../../reducers/stopwatch-reducer'
import { createRow, defaultRow } from '../../utilities/table-utils'

export default function Table({ elapsedTime, lapNumber, lapRows }: TableProps) {
  return (
    <section className='stopwatch-table-container'>
      <table>
        {elapsedTime === 0 && lapNumber === 1 ? '' : defaultRow(lapNumber, elapsedTime, lapRows)}
        {lapNumber >= 2 && createRow(lapRows, lapNumber)}
      </table>
    </section>
  )
}
