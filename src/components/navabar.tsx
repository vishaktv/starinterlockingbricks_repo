import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Humburger from "./humburger";

const NavBar = () => {
    const theme = useTheme();
  const matchesLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className=" p-6 md:p-8 flex justify-between items-end h-24 mt-6 sticky top-0 bg-white">
        
        <div className="logo w-32 md:w-48 ">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=316,fit=crop,q=95/YrDLrDne7Du0aJer/star-shine-high-resolution-logo-color-on-transparent-background-AzGjekDxkGI58e50.png" alt="" />
        </div>
        {
         matchesLargeScreen ?(
                <ul className="hidden md:flex justify-around items-center w-72 mr-12 ">
                <li className="text-2xl">Home</li>
                <li className="text-2xl">About</li>
                <li className="text-2xl">Contact</li>
            </ul>
            ):<div className="mr-6">
            <Humburger/>
            </div>
        }
       
    </div>
  )
}

export default NavBar