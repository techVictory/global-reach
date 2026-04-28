import React from 'react'
import ActionButtons from './ActionButtons'

export default function FinalActionsSection() {
  return (
    <section
      style={{
        backgroundColor: '#eaebe2',
        padding: '80px 48px 100px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <ActionButtons />
      </div>
    </section>
  )
}