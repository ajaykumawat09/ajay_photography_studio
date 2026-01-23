import Haldibanner from './haldibanner'
import Haldicard from './Haldicard'
import Haldigrid from './Haldigrid'

import { faqhaldi } from '@/faq'
import HaldiFaq from './HaldiFaq'

const Haldi = () => {
  
  return (
    <div>
     <Haldibanner/>
     <Haldicard/>
     <Haldigrid/>
     <HaldiFaq data={faqhaldi}/>
    
    </div>
    
  )
}

export default Haldi