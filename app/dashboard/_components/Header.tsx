import React from 'react'
import{Search} from 'lucide-react'
function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
        <div className='flex gap-2 items-center
         p-2 rounded-md max-w-lg bg-white'>
            <Search/>
            <input type='text' placeholder='Search...'
            className='outline-none'/>
        </div>
        <div>
            <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'> 🔥Join membership just for Rs 100</h2>
        </div>
    </div>
  )
}
 
export default Header