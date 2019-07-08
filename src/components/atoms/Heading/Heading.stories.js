import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

import Heading from './Heading'

storiesOf('Atoms | Heading', module)
  .addParameters({
    info: {
      text: `
        ### TRY DIFFERENT LEVELS:
        Refer to the **"Knobs"** section at the bottom to try different levels.
      `
    }
  })
  .add('renders a Heading with a specific level', () => {
    const selectLevel = number('Level: ', 1)
    return <Heading level={selectLevel}>Heading 1</Heading>
  })
