import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import StoryblokProvider from '/src/components/StoryblokProvider';
// import Head from 'next/head';
import Script from 'next/script';
import localFont from 'next/font/local';
import './globals.css';

const fontStadler = localFont({
    src: [
        {
            path: '../../../public/fonts/StadlerType_W_Th.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_ThIt.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XLt.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XLtIt.woff2',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Lt.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_LtIt.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Rg.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_It.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Md.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_MdIt.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_SBd.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_SBdIt.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Bd.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_BdIt.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XBd.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_XBdIt.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../../../public/fonts/StadlerType_W_Blk.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/StadlerType_W_BlkIt.woff2',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-stadler',
});

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

export default function RootLayout({ children, params: { lang } }) {
    return (
        <StoryblokProvider>
            <html lang={lang}>
                <head>
                    <Script
                        id="Cookiebot"
                        src="
https://consent.cookiebot.com/uc.js"
                        data-cbid="cedf775e-624e-499c-a386-4629e677f18e"
                        data-blockingmode="auto"
                        type="text/javascript"
                    ></Script>
                    {/* <meta httpEquiv="Content-Security-Policy" content="frame-src 'self' https://www.juicer.io/" /> */}

                    {/* <Script
                        id="CookieDeclaration"
                        src="
https://consent.cookiebot.com/cedf775e-624e-499c-a386-4629e677f18e/cd.js"
                        type="text/javascript"
                        async
                    ></Script> */}
                </head>
                <body
                    className={
                        fontStadler.className +
                        ' flex min-h-screen flex-col overflow-x-hidden'
                    }
                >
                    <Script async>
                        {`
                            var _mtm = window._mtm = window._mtm || [];
                            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
                            (function() {
                                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                                g.async=true; g.src='https://cdn.matomo.cloud/etkstadlerrailcom.matomo.cloud/container_PFGEOIW5.js'; s.parentNode.insertBefore(g,s);
                            })();
                        `}
                    </Script>
                    <Script async>
                        {`
                            var curUrl = window.location.href
                            var linksForMatomo = document.querySelectorAll("a")
                            if (curUrl.includes("/investor-relations")) {
                                linksForMatomo.forEach(item => {
                                    item?.addEventListener('click', () => {
                                        var _paq = (window._paq = window._paq || []);
                                        _paq.push([
                                            'trackEvent',
                                            '7. Investorenseite Klicks',
                                            item.getAttribute("href"),
                                        ]);
                                    })
                                })
                            }

                            linksForMatomo.forEach(item => {
                                item?.addEventListener('click', () => {
                                    const fullHref = item.getAttribute("href")
                                    if (fullHref.includes(".pdf") ||
                                        fullHref.includes(".avi") ||
                                        fullHref.includes(".doc") ||
                                        fullHref.includes(".docx") ||
                                        fullHref.includes(".gif") ||
                                        fullHref.includes(".png") ||
                                        fullHref.includes(".jpg") ||
                                        fullHref.includes(".jpeg") ||
                                        fullHref.includes(".png") ||
                                        fullHref.includes(".tiff") ||
                                        fullHref.includes(".mp3") ||
                                        fullHref.includes(".txt") ||
                                        fullHref.includes(".rar") ||
                                        fullHref.includes(".zip") ||
                                        fullHref.includes(".gzip") ||
                                        fullHref.includes(".wav") ||
                                        fullHref.includes(".csv") ||
                                        fullHref.includes(".xlsx") ||
                                        fullHref.includes(".pptx") ||
                                        fullHref.includes(".webp")) {
                                        const hrefArray = fullHref.split('/')
                                        
                                        var _paq = (window._paq = window._paq || []);
                                        _paq.push([
                                            'trackEvent',
                                            '6. Dokumentendownload',
                                            hrefArray[hrefArray.length - 1]
                                        ]);
                                    }
                                })
                            })
                        `}
                    </Script>
                    <main>{children}</main>
                </body>
            </html>
        </StoryblokProvider>
    );
}
