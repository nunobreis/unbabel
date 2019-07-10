import { requestTranscriptions } from '../../../services/transcriptionsApi/index'

import { LOAD_TRANSCRIPTIONS_SUCCESS } from '../types/index'

export const loadTranscriptionsSuccess = transcriptions => ({
  type: LOAD_TRANSCRIPTIONS_SUCCESS,
  transcriptions
})

export const loadTranscriptions = () => dispatch => requestTranscriptions()
  .then(({ data }) => dispatch(loadTranscriptionsSuccess(data)))
  .catch(error => console.info(error))
