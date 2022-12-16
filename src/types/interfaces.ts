export interface LapRows {
  id: number
  time: number
}

export interface TableProps {
  elapsedTime: number
  lapNumber: number
  lapRows: LapRows[]
}

export interface Actions {
  START_TIMER: string
  SET_ELAPSEDTIME: string
  STOP_TIMER: string
  ADD_LAP: string
  RESET_TIMER: string
}

export interface Action {
  type: string
  timestamp: number
  elapsedTime: number
}
