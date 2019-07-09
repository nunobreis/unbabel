import React from 'react'
import { storiesOf } from '@storybook/react'

import TranslationsTemplate from './TranslationsTemplate'
import AppBar from '../../organisms/AppBar/AppBar'
import Card from '../../atoms/Card/Card'
import Heading from '../../atoms/Heading/Heading'

storiesOf(
  'Templates | Translations Template',
  module,
).add('renders a Translation Template', () => (
  <TranslationsTemplate header={<AppBar />}>
    <Card>
      <Heading level={1}>Hello World</Heading>
    </Card>
  </TranslationsTemplate>
))
