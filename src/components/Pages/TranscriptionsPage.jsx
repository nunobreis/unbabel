import React from 'react'

import TranscriptionsTemplate from '../Templates/TranscriptionsTemplate/TranscriptionsTemplate'
import AppBar from '../organisms/AppBar/AppBar'
import CardContainer from '../../containers/Card.container'

const TranscriptionsPage = () => <TranscriptionsTemplate header={<AppBar />}>
  <CardContainer />
</TranscriptionsTemplate>

export default TranscriptionsPage
