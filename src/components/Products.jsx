import React from 'react'
import Card from './shared/Card'

const Products = () => {
    const text = "Is this love that I'm feeling?"
  return (
    <Card bgColor="green">
        <h2>{text}</h2>
        <p>{text}</p>
    </Card>
  )
}

export default Products