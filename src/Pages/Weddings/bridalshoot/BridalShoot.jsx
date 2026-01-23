import React from 'react'
import BridalShootbanner from './BridalShootbanner'
import BridalShootgrid from './BridalShootgrid'
import BridalFaq from './BridalFaq'
import { Faqbridal } from '@/faq'

const BridalShoot = () => {
  return (
    <div>
      <BridalShootbanner/>
      <BridalShootgrid/>
      <BridalFaq data={Faqbridal}/>
    </div>
  )
}

export default BridalShoot