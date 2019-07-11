import axios from 'axios'

export const requestTranscriptions = dispatch => axios.get(
  'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
).then(dispatch).catch()
