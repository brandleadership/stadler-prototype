import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import StoryblokProvider from '@/src/components/StoryblokProvider';
import Script from 'next/script';

import { Montserrat } from 'next/font/google';
/* import localFont from 'next/font/local'; */

import './globals.css';

// const fontStadler = localFont({
//   src: [
//     {
//       path: '../../public/fonts/StadlerType_W_Lt.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/StadlerType_W_Rg.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/StadlerType_W_It.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../../public/fonts/StadlerType_W_Md.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/StadlerType_W_Md.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/StadlerType_W_SBd.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-stadler',
// });

const fontFamily = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});
//const mySchema = cloneDeep(RichTextSchema);

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

export default function RootLayout({ children, params: { lang } }) {
    return (
        <StoryblokProvider>
            <html lang={lang}>
                <head>
                    <Script>
                        {`
            console.log("Matomo test with Storyblok")
            var _mtm = window._mtm = window._mtm || [];
              _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
              (function() {
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src='https://matomo.gateb.com/js/container_9iU2twN3.js'; s.parentNode.insertBefore(g,s);
              })();
              `}
                    </Script>
                    {/* <Script
                    
                        id="Cookiebot"
                        src="
https://consent.cookiebot.com/uc.js"
                        data-cbid="cedf775e-624e-499c-a386-4629e677f18e"
                        data-blockingmode="auto"
                        type="text/javascript"
                    ></Script>
                    <Script
                        id="CookieDeclaration"
                        src="
https://consent.cookiebot.com/cedf775e-624e-499c-a386-4629e677f18e/cd.js"
                        type="text/javascript"
                        async
                    ></Script> */}
                </head>
                <body
                    className={
                        fontFamily.className +
                        ' overflow-x-hidden flex flex-col min-h-screen'
                    }
                >
                 
                    <main>{children}</main>
                  
                </body>
            </html>
        </StoryblokProvider>
    );

    // <Script
    //   src="https://app.storyblok.com/f/storyblok-latest.js?t=OzCkp5jSdfLeMLs4g0rshAtt"
    //   type="text/javascript"
    // ></Script>;

    // data - blok - c;
    // data - blok - uid;
}
