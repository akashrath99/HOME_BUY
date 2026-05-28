import React from 'react'
import Back from '../common/Back'
import img from '../image/mi.jpg'
import Featured from '../home/featured/Featured'

const Services = () => {
  return (
  <>
  <section className='services mb'>

    <Back name='Services' title='Services -All Services' cover={img}/>
<div className="featured container">
    <Featured/>
</div>
  </section>
  </>
  )
}

export default Services