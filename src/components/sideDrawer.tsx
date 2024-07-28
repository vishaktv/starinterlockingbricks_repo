import Drawer, { DrawerProps } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { DrawerContext } from '../providers/drawerProvider';



const SideDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
    top:"7.5rem",
  "& .MuiBackdrop-root": {
    top: "7.5rem"
  },
  "& .MuiPaper-root": {
    top: "7.5rem",
    width:"20rem",
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
        <h1>Hi Hello</h1>
      </SideDrawer>
    </>
  );
}



// MuiBackdrop-root 
// MuiPaper-root