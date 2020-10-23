import React from 'react'

import { Separator } from '../src'

export default {
  component: Separator,
  title: 'Separator Component',
  parameters: { layout: 'centered' },
}

export const DefaultSeparator = () => {
  return (
    <div
      style={{
        width: '30rem',
        padding: '2rem 1rem',
      }}
    >
      <Separator />
    </div>
  )
}
