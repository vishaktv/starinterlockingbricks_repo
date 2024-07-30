import DualWeightText from "@/src/components/dualWeightText"
import { Divider } from "@mui/material"

const OurProducts = () => {
  return (
    <>
     <DualWeightText primaryText="Our" secondaryText="Products" />
     <Divider />
     <div className="flex flex-col md:flex-row gap-8 mt-8 ">
        <div>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=662,h=602,fit=crop/YrDLrDne7Du0aJer/1693476923698-A1a1K8gp6xtVWOJZ.jpg" alt="" />
        <h3 className="font-nuehassMedium text-3xl bg-gray-200 py-6 px-3 text-gray-500">SOIL INTERLOCKING BRICKS</h3>
        </div>
       
        <div>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=728,h=600,fit=crop/YrDLrDne7Du0aJer/img_0282-A1a1K8VgW7Un344x.JPG" alt="" />
        <h3 className="font-nuehassMedium text-3xl  bg-gray-200 py-6 px-3 text-gray-500">CEMENT INTERLOCKING BRICKS</h3>
        </div>
        <div>
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=726,h=594,fit=crop/YrDLrDne7Du0aJer/1000076220-01-d95DpBllV8So0Eaq.jpeg" alt="" />
        <h3 className="font-nuehassMedium text-3xl  bg-gray-200 py-6 px-3 text-gray-500">M BRICK</h3>
        </div>
     </div>
    </>
  )
}

export default OurProducts