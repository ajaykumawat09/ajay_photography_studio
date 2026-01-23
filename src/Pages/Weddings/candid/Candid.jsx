import React from 'react'
import Candidbanner from './candidbanner'
import { Candidgrid } from './Candidgrid'
import CandidFaq from './CandidFaq'
import { faqCandid } from '@/faq'

const Candid = () => {
  return (
    <div>Candid
      <Candidbanner/>
      <Candidgrid/>
      <CandidFaq data={faqCandid}/>
    </div>
  )
}

export default Candid