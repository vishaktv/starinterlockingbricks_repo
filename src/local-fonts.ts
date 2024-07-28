import { Montserrat } from 'next/font/google';
import localFont from "next/font/local";


export const montserrat = Montserrat({
    variable: "--font-montserrat",
    display: "swap",
    subsets: ['latin'],
  });
  
  export const nuehassLight = localFont({
    src: "../public/fonts/NeueHaasDisplayLight.ttf",
    variable: "--font-nuehassLight",
    weight:"100",
    display: "swap",
  });
  
  export const nuehassMedium = localFont({
    src: "../public/fonts/NeueHaasDisplayMediu.ttf",
    variable: "--font-nuehassMedium",
    display: "swap",
    weight:"100",
  });