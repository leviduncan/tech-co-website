import React from 'react'
import Card from './shared/Card'

const Hero = () => {
  return (
    <div className="hero">
        <Card item='item1' bgColor='dark'>
          <div className="d-flex flex-column">
          <p className="small">MORE OFFERS</p>
          <h1>There is something else for you</h1>
          </div>
        </Card>
        <Card item='item2' bgColor='light'>
          <div className="d-flex flex-column">
            <p className="small">WORLD OF HEARING TECHNOLOGY</p>
            <h2>View our blog</h2>
          </div>
        </Card>
        <Card item='item3' bgColor='purple'>
          <h2>Here's Another Section</h2>
        </Card>
        <Card item='item4' bgColor='green'>
          <h2>And This is last</h2>
        </Card>
    </div>
  )
}

export default Hero