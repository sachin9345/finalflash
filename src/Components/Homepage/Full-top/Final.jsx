import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import Dog from '../Dog/Dog'
import "./Final.css"
import Why from '../Why/Why'
const Final = () => {
  return (
    <div className='wall-full'>
      <div className="wrapper-final">
      <div className="nav-full">
        <Nav/>
      </div>
      <div className="hero-full">
        <Hero/>
      </div>
      <div className="two-comp-full">
        <div className="left-full">
            <Card/>
        </div>
        <div className="right-full">
            <Dog/>
        </div>
      </div>
      <div className="car-full">
        <Why/>
      </div>
      </div>
    </div>
  )
}

export default Final
