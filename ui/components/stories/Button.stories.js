import React from 'react'

import { Button } from '../src'

export default {
  component: Button,
  title: 'Button Component',
  parameters: { layout: 'centered' },
}

export const ButtonNormal = () => {
  return <Button>Sample</Button>
}

export const ButtonOutlined = () => {
  return <Button outlined>Sample</Button>
}

export const ButtonDisabled = () => {
  return <Button disabled>Sample</Button>
}
