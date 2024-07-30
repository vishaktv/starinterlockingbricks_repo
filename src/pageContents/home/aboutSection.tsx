import DualWeightText from "@/src/components/dualWeightText"
import { Divider } from "@mui/material"

const AboutSection = () => {
  return (
   <>
   <DualWeightText primaryText="About" secondaryText="Us" />
   <Divider className=""/>
   <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:justify-between">
    <div className="flex-1 md:mr-8">
    <p className="m-0 text-base md:text-xl text-gray-400 mt-4 md:mt-0">FIRST OF ALL</p>
    <p className="text-5xl md:text-6xl text-gray-800">About STAR & SHINE Interlocking Bricks</p>
    <p className="pt-6 text-2xl text-gray-500  md:w-w-5/6 font-montserrat">Discover the most reliable, durable, and safe solution for your construction needs. STAR & SHINE Interlocking Bricks combines cutting-edge smart technology with the ancient interlocking scientific knowledge used in Indian temples and monuments.</p>
    </div>
    <div className="mt-9 md:mt-0 flex-1 md:pl-4 md:h-[37rem]">
    <img 
    className="w-full h-full"
    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1002,fit=crop,trim=62.13197969543147;467.5535512965051;47.51269035532995;0/YrDLrDne7Du0aJer/1689266221780-YBgoz10b5lfx4MBE.jpg" alt="interlocking-bricks" />

    </div>
   </div>
   </>
  )
}

export default AboutSection