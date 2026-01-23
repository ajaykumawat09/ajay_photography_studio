import React from 'react'
import Mehndibanner from './Mehndibanner'
import Mehndigrid from './Mehndigrid'
import { Mehndipage } from './Mehndipage'
import MehndiFaq from './MehndiFaq'
import { faqmehndi } from '@/faq'


const Mehndi = () => {
  return (
    <div>
      <Mehndibanner/>
      <Mehndigrid/>
      <Mehndipage/>
      <MehndiFaq data={faqmehndi}/>
    </div>
  )
}

export default Mehndi