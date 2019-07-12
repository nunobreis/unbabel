import {
  LOAD_TRANSCRIPTIONS_SUCCESS,
  LOAD_TRANSCRIPTIONS_FAILED,
  ADD_NEW_ROW
} from '../types/index'

const initialState = {}

export default function transcriptionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRANSCRIPTIONS_SUCCESS:
      return {
        ...state,
        messages: state.messages
          ? [...state.messages, ...action.transcriptions]
          : [...action.transcriptions]
      }
    case LOAD_TRANSCRIPTIONS_FAILED:
      return {
        ...state,
        error: action.error
      }
    case ADD_NEW_ROW:
      return {
        ...state,
        messages: state.messages
          ? [...state.messages, action.defaultTranscription]
          : [action.defaultTranscription]
      }
    default:
      return state
  }
}
