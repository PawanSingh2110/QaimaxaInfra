import React from 'react'
import Herosection from './Herosection'
import Ourproduct from './Ourproduct'
import Whoweare from './Whoweare'
import WhyUS from './WhyUS'
import Testimonal from './Testimonal'

const Home = () => {
  return (
    <div>
      {/* <Pointre/> */}
        <Herosection/>
        <Whoweare/>
        <Ourproduct/>
        <WhyUS/>
        <Testimonal/>
        
        </div>
  )
}

export default Home