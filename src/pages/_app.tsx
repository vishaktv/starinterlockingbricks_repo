
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { AppProps, AppType } from "next/app";
import "../../styles/global.scss";
import NavBar from "../components/navabar";
import SideDrawer from "../components/sideDrawer";
import { montserrat, nuehassLight, nuehassMedium } from "../local-fonts";
import DrawerProvider from "../providers/drawerProvider";
 


const MyApp:AppType=({Component,pageProps}: AppProps)=> {
    const theme = useTheme();
    const matchesLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <main className={classNames(nuehassLight.variable,nuehassMedium.variable,montserrat.variable)}>
        <DrawerProvider>
        <NavBar />
        {!matchesLargeScreen &&  <SideDrawer />}
       
        <Component {...pageProps}/>
        </DrawerProvider>
        </main>
    )
}
export default MyApp;