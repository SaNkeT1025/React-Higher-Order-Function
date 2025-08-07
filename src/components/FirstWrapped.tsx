import React from 'react'

const FirstWrapped = ({ name }: { name: string }) => {
  return (
    <div>
      <p>Hello {name}</p>
    </div>
  )
}

export default FirstWrapped
