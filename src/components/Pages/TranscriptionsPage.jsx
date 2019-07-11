import React from 'react'

import TranscriptionsTemplate from '../Templates/TranscriptionsTemplate/TranscriptionsTemplate'
import AppBar from '../organisms/AppBar/AppBar'
import CardContainer from '../../containers/Card.container'
import AddRowIcon from '../atoms/AddRowIcon/AddRowIcon'

const TranscriptionsPage = () => <TranscriptionsTemplate header={<AppBar />}>
  <CardContainer />
  <AddRowIcon />
</TranscriptionsTemplate>

export default TranscriptionsPage
