import React from 'react'
import { storiesOf } from '@storybook/react'

import TranscriptionsPage from './TranscriptionsPage'

storiesOf(
  'Pages | Transcriptions Page',
  module,
).add('renders a new Transcription Page', () => <TranscriptionsPage />)
