import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
import './Recent.css'

const recent = () => {
  return (
    <><section className='recent padding'>
        <div className="container">
            <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor,  
            adipisicing elit. Provident tempore dicta autem reiciendis rerum excepturi 
            sunt esse, distinctio aliquid nisi'/>
            <RecentCard />
        </div>
        </section></>
  )
}

export default recent