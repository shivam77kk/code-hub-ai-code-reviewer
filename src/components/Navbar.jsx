import React from 'react'
import { BrainCircuit , Sun} from 'lucide-react';


function Navbar() {
  return (
    <>
    <div className="nav flex items-center justify-between h-[90px] bg-zinc-900"style={{padding: "0 150px"}}>
        <div className="logo flex items-center gap-[10px]">
            <BrainCircuit size={40} color='#a855f7' />
            <span className="text-2xl text-white font-bold ml-2">Code-hub</span>
        </div>
        <div className="icons flex items-center gap-[20px]">
            <i className='cursor-pointer transition-all hover:text-[#a855f7]'><Sun/></i>
        </div>
    </div>
    
    </>
  )
}

export default Navbar