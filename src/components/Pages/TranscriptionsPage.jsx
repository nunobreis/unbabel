import React from 'react'

import TranscriptionsTemplate from '../Templates/TranscriptionsTemplate/TranscriptionsTemplate'
import AppBar from '../organisms/AppBar/AppBar'
import Card from '../atoms/Card/Card'

const TranscriptionsPage = () => <TranscriptionsTemplate header={<AppBar />}>
  <Card>
    hello world
  </Card>
</TranscriptionsTemplate>

export default TranscriptionsPage
