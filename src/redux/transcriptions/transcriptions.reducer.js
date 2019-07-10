import { LOAD_TRANSCRIPTIONS_SUCCESS } from '../types/index'

const initialState = []

export default function transcriptionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRANSCRIPTIONS_SUCCESS:
      return [...state, ...action.transcriptions]
    default:
      return state
  }
}
