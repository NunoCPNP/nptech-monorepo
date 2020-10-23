import React, { useState } from 'react'

import { Modal, Button } from '../src'

export default {
  component: Modal,
  title: 'Modal Component',
  parameters: { layout: 'centered' },
}

export const DefaultModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal title="Modal Title" open={open} setOpen={setOpen}>
        Modal Content
      </Modal>
    </>
  )
}
