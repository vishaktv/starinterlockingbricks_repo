import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import Humburger from "./humburger";

const NavBar = () => {
    const theme = useTheme();
  const matchesLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const router=useRouter()
  return (
    <div className="sticky z-10 top-0 shadow-xl bg-white ">
        <div className="cont flex justify-between items-end py-6" >
        <div className="logo w-32 md:w-48 " onClick={()=>{router.push("/home")}}>
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=316,fit=crop,q=95/YrDLrDne7Du0aJer/star-shine-high-resolution-logo-color-on-transparent-background-AzGjekDxkGI58e50.png" alt="" />
        </div>
        {
         matchesLargeScreen ?(
                <ul className="hidden md:flex justify-around items-center w-72 mr-12 ">
                <li className="text-2xl">Home</li>
                <li className="text-2xl">About</li>
                <li className="text-2xl">Contact</li>
            </ul>
            ):<div className="">
            <Humburger/>
            </div>
        }
       </div>
    </div>
  )
}

export default NavBar