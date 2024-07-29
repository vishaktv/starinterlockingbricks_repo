import DualWeightText from "@/src/components/dualWeightText"
import { Divider } from "@mui/material"

const WhyToChooseSection = () => {
  return (
    <>
    <div className="md:text-right">
     <DualWeightText primaryText="Why to choose" secondaryText="STAR&SHINE" />
    </div>
   <Divider className=""/>
   <div className="mt-4 md:mt-0 flex flex-col  md:flex-row md:items-center md:justify-between">
   <div className="mt-9 md:mt-0 flex-1 md:pr-4 md:h-[37rem]">
    <img 
    className="w-full h-full object-cover mb-4"
    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1236,h=648,fit=crop/YrDLrDne7Du0aJer/star-bricks-AVLbW1MGl8syBGnw.jpg" alt="interlocking-bricks" />
    </div>
    <div className="flex-1 md:ml-8">
    <p className="m-0 text-base md:text-xl text-gray-400 mt-4 md:mt-0">NOT TO MENTION</p>
    <p className="text-5xl md:text-7xl text-gray-800">Why Choose STAR & SHINE Interlocking Bricks?</p>
    <p className="pt-6 text-2xl text-gray-500  md:w-w-5/6 font-montserrat">Discover the numerous benefits of STAR & SHINE interlocking bricks for your construction projects. Our bricks are not only reliable and durable, but also incorporate the latest smart technology. With a rich heritage inspired by ancient Indian temples and monuments, 
    our bricks offer a safe and sustainable solution for modern day construction.</p>
    </div>
    
   </div>
    </>
  )
}

export default WhyToChooseSection