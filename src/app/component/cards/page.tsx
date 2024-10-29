export default function Cards (){
    return(
        <div className=" flex bg-[#252B42] h-screen gap-[30px]  pb-10">
    
                {/* card1 */}
                <div  className="bg-[#FFFFFF] shadow-costom w-[328px] h-[292px] py-[35px] px-10 gap-5 ml-[150px] hover:bg-pink-200">
                    <div className="w-[70px] h-[76px] py-[22px] px-[19px] gap-[10px] rounded-[10px] bg-[#FFDCD1]"></div>
                    <h5 className="font-bold text-base pt-4 ">training Courses</h5>
                    <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
                    <p className="w-[222px] h-[60px] mt-4 font-normal text-sm">
                    The gradual accumulation of 
                    information about atomic and 
                    small-scale behaviour...
                    </p>
                </div>


                {/* card2 */}
                <div className="bg-[#FFFFFF] shadow-costom w-[328px] h-[292px] py-[35px] px-10 gap-5 font-Montserrat spacing-[0.2px] hover:bg-green-200">
                    <div className="w-[70px] h-[76px] py-[22px] px-[19px] gap-[10px] rounded-[10px] bg-[#B9EAA8]"></div>
                    <h5 className="font-bold text-base pt-4 ">2,769 online courses</h5>
                    <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
                    <p className="w-[222px] h-[60px] mt-4 font-normal text-sm">
                    The gradual accumulation of 
                    information about atomic and 
                    small-scale behaviour...
                    </p>
                </div>


                {/* card3 */}
                <div className="bg-[#23A6F0] shadow-costom w-[328px] h-[292px] py-[35px] px-10 gap-5 hover:bg-blue-300 ">
                    <div className="w-[70px] h-[76px] py-[22px] px-[19px] gap-[10px] rounded-[10px] bg-[#FFFFFF]"></div>
                    <h5 className="font-bold text-base pt-4 text-[#FFFFFF] ">training Courses</h5>
                    <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-4"></div>
                    <p className="w-[222px] h-[60px] mt-4 font-normal text-[#FFFFFF] text-sm">
                    The gradual accumulation of 
                    information about atomic and 
                    small-scale behaviour...
                    </p>
                </div>


        </div>
    )
}




