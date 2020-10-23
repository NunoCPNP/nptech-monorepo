import React, { useState } from 'react'

import { CheckBox } from '../src'

export default {
  component: CheckBox,
  title: 'Checkbox Component',
  parameters: { layout: 'centered' },
}

export const CheckboxGroup = () => {
  const allOptions = [
    { id: 1, value: 'Alpha' },
    { id: 2, value: 'Beta' },
  ]

  const [options, setOptions] = useState([allOptions[1].id])

  function toggleOption(id) {
    setOptions(options.includes(id) ? options.filter((option) => option !== id) : [...options, id])
  }

  return (
    <form>
      {allOptions.map((item) => (
        <CheckBox
          name="checkbox"
          key={item.id}
          label={item.value}
          value={item.value}
          checked={options.includes(item.id)}
          onChange={() => toggleOption(item.id)}
        />
      ))}
    </form>
  )
}

export const CheckedBox = () => {
  return <CheckBox name="checkbox" label="Checked" value="Checked" defaultChecked={true} readOnly />
}

export const UncheckedBox = () => {
  return <CheckBox name="checkbox" label="Unchecked" value="Unchecked" checked={false} readOnly />
}
