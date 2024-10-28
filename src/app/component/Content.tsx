import 'typeface-montserrat';
import Cards from "./cards/page";

export default function Home(){
  return <div>
  <div className="bg-[#252B42] h-screen">

            <div className="w-[1046px] h-[1046px] mt-[13px] ml-[140px] py-20 px-0 gap-[80px] ">
              
                <h5 className="w-fit text-[#23A6F0] text-base font-bold leading-6  mt-3 ml-[486px]  ">Welcome</h5>
            
                <h1 className="w-[542px] h-[80px] spacing-[ 0.2px] font-bold text-[#FFFFFF] text-[58px] ml-[270px] pl-16  ">selling on the </h1>
                <h1 className="w-[542px] h-[80px] spacing-[ 0.2px] font-bold text-[#FFFFFF] text-[58px] ml-[270px] pl-6 ">internet like a pro</h1>

                <h3 className="w-[536px] h-[30px] text-[#FFFFFF] text-xl content-center font-normal ml-[274px] mt-9 pl-8">We know how large objects will act, but things on a </h3>
                <h3 className="w-[536px] h-[30px] text-[#FFFFFF] text-xl content-center font-normal ml-[274px] pl-[105px] "> small scale just do not act that way. </h3>
            
                {/* button */}
                <div className=" ml-[360px] mt-10 w-[365px] h-[52px] gap-[10px]">
                    <button className="w-[193px] h-[52px] py-[15px] px-[40px] gap-[10px] rounded-md  bg-[#23A6F0] text-[#FFFFFF] hover:bg-slate-500">Get Quote Now</button>

                    <button className="w-[162px] h-[52px] py-[15px] px-[40px] rounded-md border border-[#23A6F0] ml-[10px] text-sm font-bold text-[#23A6F0] hover:bg-[#23A6F0] hover:text-[#FFFFFF]">Learn More</button>
                </div>
            
            </div>
            <Cards />
        </div>
        
        </div>

}


