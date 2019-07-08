import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Paragraph from './Paragraph'

storiesOf('Atoms | Paragraph', module).add('renders a new paragraph', () => {
  const textContent = text('Content', 'Paragraph Content')
  return <Paragraph>{textContent}</Paragraph>
})
