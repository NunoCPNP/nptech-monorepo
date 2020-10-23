import React, { useState } from 'react'

import { MdSearch } from 'react-icons/md'

import { Input } from '../src'

export default {
  component: Input,
  title: 'Input Component',
  parameters: { layout: 'centered' },
}

export const DefaultInput = () => {
  const [inputValue, setInputValue] = useState('')

  return <Input name="Sample" placeholder="Placeholder..." value={inputValue} setValue={setInputValue} />
}

export const InputWithIcon = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <Input name="Sample" icon={<MdSearch />} placeholder="Placeholder..." value={inputValue} setValue={setInputValue} />
  )
}
