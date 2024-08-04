import { Link } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { DrawerContext } from '../providers/drawerProvider';



const SideDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
    top:"6rem",
  "& .MuiBackdrop-root": {
    top: "6rem"
  },
  "& .MuiPaper-root": {
    top: "6rem",
    width:"27rem",
    boxShadow:"none"
  },

}));

export default function SideBarDrawer() {
    const {open,toggleHandler,setOpen}=useContext(DrawerContext)

    
  return (
    <>
      <SideDrawer
        anchor={"right"}
        open={open}
        onClose={()=>toggleHandler()}
        className=''
      >
       <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <a className="block p-4 text-lg font-medium hover:bg-gray-700 rounded-lg transition-colors">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block p-4 text-lg font-medium hover:bg-gray-700 rounded-lg transition-colors">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block p-4 text-lg font-medium hover:bg-gray-700 rounded-lg transition-colors">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a className="block p-4 text-lg font-medium hover:bg-gray-700 rounded-lg transition-colors">
                  Gallery
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </SideDrawer>
    </>
  );
}



// MuiBackdrop-root 
// MuiPaper-root