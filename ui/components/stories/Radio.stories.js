import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Radio } from '../src'

export default {
  component: Radio,
  title: 'Radio Component',
  parameters: { layout: 'centered' },
}

export const RadioGroup = () => {
  const options = [
    { id: 1, value: 'Alpha' },
    { id: 2, value: 'Beta' },
  ]

  const [option, setOption] = useState(options[1].id)

  return (
    <form>
      {options.map((item) => (
        <Radio
          name="radio"
          key={item.id}
          label={item.value}
          value={item.value}
          checked={option === item.id}
          onChange={() => setOption(Number(item.id))}
        />
      ))}
    </form>
  )
}

export const CheckedRadio = () => {
  return <Radio label="Checked" value="Checked" name="radio" defaultChecked={true} readOnly />
}

export const UncheckedRadio = () => {
  return <Radio label="Unchecked" value="Unchecked" name="radio" checked={false} readOnly />
}
