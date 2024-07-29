import DualWeightText from "@/src/components/dualWeightText"
import { Divider } from "@mui/material"

const OurService = () => {
  return (
    <>
   <DualWeightText primaryText="Our" secondaryText="Services" />
   <Divider className=""/>
   <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-start md:justify-between">
    <div className="flex-1 md:mr-8">
    <p className="m-0 text-base md:text-xl text-gray-400 mt-4 md:mt-16">AND LET&apos;S NOT FORGET</p>
    <p className="pt-6 text-2xl text-gray-500  md:w-w-5/6 font-montserrat">At STAR & SHINE Interlocking Bricks, we provide a range of services to meet your construction needs. From consultation and design to manufacturing and installation, our team of experts is dedicated to delivering high-quality interlocking bricks and ensuring customer satisfaction. Whether you&apos;re a homeowner, contractor, or architect, we have the expertise to bring your vision to life..</p>
    </div>
    <div className="mt-9 md:mt-0 flex-1 md:pl-4 md:h-[37rem]">
    <img 
    className="w-full h-full"
    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1006,h=1002,fit=crop,trim=125.25547445255475;64.05109489051095;136.64233576642337;0/YrDLrDne7Du0aJer/1689261564353-A0x48bRMKRIroXe1.jpg" alt="interlocking-bricks" />
    </div>
   </div>
   </>
  )
}

export default OurService