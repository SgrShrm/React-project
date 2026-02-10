import React from 'react'
import { SearchIcon, ShoppingCart, User } from "lucide-react";



function Header () {
    return (
        <>
        <div className="primary-color h-[44px] w-auto flex text justify-around items-center text-[16px]">
       <div className="flex gap-x-3">
          <div>test@test.com</div>
          <div>9817211100</div>
       </div>
       <div>

         <div className="flex">
            
               <select name="language" id="language" >
                  <option value="nepali">Nepali</option>
                  <option value="english">English</option>
               </select>

               <select name="currency" id="currency"  >
                  <option value="NPR">NPR</option>
                  <option value="USD">USD</option>
               </select>
               
               <div className='gap-2 flex'>
               <div >Login</div><User/>
               <div>Cart</div><ShoppingCart/>
               </div>
           
         </div>
       </div>
    </div>
    <div className='h-[40px] w-[1177px] flex justify-between align-items-center ml-[371px] items-center my-4'>
       <div className='font-style text-[34px]'>Hekto</div>
       <div className='flex align-items-center'>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>Pages</li>
            <li>Products</li>
        </ul>
       </div>

       <div className='flex h-[40px] w-[317px] border border-l-gray-400'>
        <input type="search"className='border h-[40px] w-[317px]'/>
        <div className='primary-color flex items-center w-[40px] justify-center'><SearchIcon/></div>
        </div>

    </div>
    </> 
    )
}

export default Header