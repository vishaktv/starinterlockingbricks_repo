
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";
import { DefaultSeo, OrganizationJsonLd } from "next-seo";
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
        <>
        <DefaultSeo
        titleTemplate="%s | STAR & SHINE INTERLOCKING BRICKS"
        defaultTitle="STAR & SHINE INTERLOCKING BRICKS, Kerala|Tamil Nadu"
        canonical="https://www.starshineinterlockingbricks.com/"
        description="Welcome to STAR & SHINE, where we focus on building a strong foundation with our premium interlocking bricks. Serving Kerala and Tamil Nadu regions."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.starshineinterlockingbricks.com/',
          siteName: 'STAR & SHINE INTERLOCKING BRICKS',
          title: "STAR & SHINE INTERLOCKING BRICKS",
          description: "Building a strong foundation with our premium interlocking bricks. Serving Kerala and Tamil Nadu regions.",
          images: [
            {
              url: 'https://www.starshineinterlockingbricks.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'STAR & SHINE INTERLOCKING BRICKS',
            },
          ],
        }}
        twitter={{
          handle: '@starshinebricks',
          site: '@starshinebricks',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
          {
            name: 'keywords',
            content: 'interlocking bricks, building materials, sustainable construction, Kerala, Tamil Nadu, conscution bricks, maison, cement,',
          },
          {
            name: 'author',
            content: 'STAR & SHINE INTERLOCKING BRICKS',
          },
        ]}
      />
        <OrganizationJsonLd
                type="Corporation"
                id="https://www.starshineinterlockingbricks.com/about"
                logo="https://www.starshineinterlockingbricks.com/logo.jpg"
                legalName="STAR & SHINE INTERLOCKING BRICKS"
                name="STAR & SHINE"
                address={{
                    streetAddress: '123 Construction Lane',
                    addressLocality: 'Kerala',
                    addressRegion: 'KL',
                    postalCode: '682301',
                    addressCountry: 'IN',
                }}
                contactPoint={[
                    {
                        telephone: '+91-9876543210',
                        contactType: 'customer service',
                        email: 'customerservice@starshinebricks.com',
                        areaServed: 'IN',
                        availableLanguage: ['English', 'Malayalam', 'Tamil'],
                    },
                    {
                        telephone: '+91-9876543211',
                        contactType: 'technical support',
                        contactOption: 'TollFree',
                        areaServed: 'IN',
                        availableLanguage: ['English', 'Malayalam'],
                    },
                ]}
                sameAs={['https://www.facebook.com/starshinebricks']}
                url="https://www.starshineinterlockingbricks.com/"
            />
        <main className={classNames(nuehassLight.variable,nuehassMedium.variable,montserrat.variable)}>
        <DrawerProvider>
        <NavBar />
        {!matchesLargeScreen &&  <SideDrawer />}
       
        <Component {...pageProps}/>
        </DrawerProvider>
        </main>
        </>
    )
}
export default MyApp;