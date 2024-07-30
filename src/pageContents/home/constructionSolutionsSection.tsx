import DualWeightText from "@/src/components/dualWeightText"
import { Divider } from "@mui/material"

const ConstructionSolutionsSection = () => {
  return (
    <>
    <DualWeightText primaryText="Efficient Construction" secondaryText="Solutions" />
   <Divider className=""/>
   <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-start md:justify-between">
    <div className="flex-1 md:mr-8">
    <p className="m-0 text-base md:text-xl text-gray-400 mt-4 md:mt-16">IT&apos;S ALL ABOUT</p>
    <p className="text-5xl md:text-6xl text-gray-800">Building Smarter, Building Greener: Sustainable Construction with Interlocking Bricks</p>
    <p className="pt-6 text-2xl text-gray-500  md:w-w-5/6 font-montserrat">Interlocking bricks have gained popularity due to their numerous benefits in construction. These bricks are designed to fit perfectly together, providing a strong and durable structure. One major advantage of interlocking bricks is their cost-effectiveness. They eliminate the need for mortar, reducing both material and labor costs. Additionally, interlocking bricks offer excellent thermal insulation, keeping buildings cool in hot climates and warm in cold climates, thus reducing energy consumption. The interlocking design also enhances earthquake resistance, making structures more stable and secure. Furthermore, these bricks are easy to install, saving time and effort. They can be used for various construction projects, including walls, pavements, and driveways. Overall, interlocking bricks offer an affordable, eco-friendly, and efficient alternative for construction needs.</p>
    </div>
    <div className="mt-9 md:mt-0 flex-1 md:pl-4 md:h-[37rem]">
    <img 
    className="w-full h-full object-cover"
    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1166,h=1104,fit=crop/YrDLrDne7Du0aJer/1689266221862-AoPErn7nQQta9pO3.jpg" alt="interlocking-bricks" />
    </div>
   </div>
   </>
  )
}

export default ConstructionSolutionsSection