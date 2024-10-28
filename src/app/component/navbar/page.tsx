import Link from "next/link"

export default function NavBar (){
    return(
      <div className="bg-[#252B42]">
       
            <nav className=" flex w-[1322px] h-[91px] left-[59px]">
                <div className=" w-[187px] h-[58px] mt-[17px] ml-[136px] py-[13px] pr-[35px] pl-[0px] gap-[10px]" >
              <h3 className=" w-[152px] h-[32px] top-[13px] gap-[0px] font-[Montserrat] text-2xl font-bold tracking-[0.2px]  text-left text-[#FFFFFF]">BrandName</h3>
              </div>
             <div className="text-[#FFFFFF] " >
              <ul className=" space-x-8 w-[815px] h-[58px] mt-5 ml-[85px] text-xs ">
              <Link href="/page" className="hover:text-blue-300" >Home</Link>
              <Link href="/Product" className="hover:text-blue-300">Product</Link>
              <Link href="/Pricing" className="hover:text-blue-300">Pricing</Link>
              <Link href="/Contact" className="hover:text-blue-300">Contact</Link>

              
                <Link href="/Login" className="pl-[360px] hover:text-blue-300">login</Link>
                <button className="w-[110px] h-[52px] py-[15px] px-[25px] gap-[15px] rounded-[5px] bg-[#23A6F0] hover:bg-slate-500">join us</button>
              
              
                </ul>
              </div>
            </nav>


      </div>
    )
  }



  
   
   
 

  
