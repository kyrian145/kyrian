import Link from "next/link"
import {Children, ReactNode} from "react"
interface hey{
  children:ReactNode
}

export default function link({children}:hey){
  
    return(
      <>
        <div className="flex flex-row w-screen h-16 bg-white items-center">
          <div className="flex w-1/2 text-black font-bold mx-4">Site-name</div>
          <ul className="flex w-1/2 justify-between  ">
              <Link href="">
              <li className="text-black font-bold ">
              page
              </li>
              </Link>
              <Link href="">
              <li className="text-black  font-bold ">
              page
            </li>
              </Link>
              <Link href="">
              <li className="text-black font-bold ">
              page
            </li>
              </Link>
            <button className="bg-black px-4 py-2 rounded-lg text-white mx-4 ">
              button
            </button>
            </ul>
        </div>
      
      <div>{children}</div>
      
      
      </>
         
         
      
    
      
      
      
    )

}
