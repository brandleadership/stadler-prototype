import { i18nRouter } from 'next-i18n-router';
import { NextResponse } from 'next/server';
import i18nConfig from '/i18nConfig';

// Middleware used for i18n Routing
export function middleware(request) {
    // INFO
    // Quite a few country logics are currently uncommented.
    // This is because the logic will be enabled later on so DO NOT DELETE

    // Console Log values used for Debugging
    /*  const country = (request.geo && request.geo.country) || 'global';
    console.log(`Visitor from ${country}`);
    console.log(request.geo.country);
    console.log(request);
    console.log(request.headers.get('accept-language')?.split(',')?.[0]);
    console.log(`Pathname ${request.nextUrl.pathname}`); */

    const userLocale = request.headers.get('accept-language')?.split(',')?.[0];

    if (
        request.nextUrl.pathname == '/careers' &&
        !request.nextUrl.href.split('?')[1]?.includes('_storyblok')
    ) {
        switch (request.geo.country) {
            case 'CH':
                if (userLocale.includes('fr')) {
                    request.nextUrl.pathname = '/en/ch/carriere';
                } else if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/en/ch/carriera';
                } else if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/en/ch/karriere';
                } else {
                    request.nextUrl.pathname = '/en/ch/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'DE':
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/en/de/karriere';
                } else {
                    request.nextUrl.pathname = '/en/de/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'US':
                //page only available in EN
                request.nextUrl.pathname = '/en/us/careers';
                return NextResponse.redirect(request.nextUrl);
            /* case 'ES':
                if (userLocale.includes('es')) {
                    request.nextUrl.pathname = '/en/es/carrera';
                } else {
                    request.nextUrl.pathname = '/en/es/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            case 'PL':
                if (userLocale.includes('pl')) {
                    request.nextUrl.pathname = '/en/pl/kariera';
                } else {
                    request.nextUrl.pathname = '/en/pl/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'HU':
                if (userLocale.includes('hu')) {
                    request.nextUrl.pathname = '/en/hu/karrier';
                } else {
                    request.nextUrl.pathname = '/en/hu/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            /* case 'BY':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/by/kariera';
                } else {
                    request.nextUrl.pathname = '/en/by/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'KZ':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/kz/kariera';
                } else {
                    request.nextUrl.pathname = '/en/kz/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            case 'CZ':
                if (userLocale.includes('cz')) {
                    request.nextUrl.pathname = '/en/cz/kariera';
                } else {
                    request.nextUrl.pathname = '/en/cz/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'AT':
                //german page is handled by german logic
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/en/at/karriere';
                } else {
                    request.nextUrl.pathname = '/en/at/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'GB':
                //page only available in EN
                request.nextUrl.pathname = '/en/gb/careers';
                return NextResponse.redirect(request.nextUrl);
            case 'IT':
                if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/en/it/carriera';
                } else {
                    request.nextUrl.pathname = '/en/it/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'NL':
                if (userLocale.includes('nl')) {
                    request.nextUrl.pathname = '/en/nl/carriere';
                } else {
                    request.nextUrl.pathname = '/en/nl/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'SE':
                if (userLocale.includes('se')) {
                    request.nextUrl.pathname = '/en/se/karriaer';
                } else {
                    request.nextUrl.pathname = '/en/se/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            /* case 'NO':
                if (userLocale.includes('no')) {
                    request.nextUrl.pathname = '/en/no/karriere';
                } else {
                    request.nextUrl.pathname = '/en/no/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            default:
            // bring on global page
            // current understanding of logic is:
            // don't bring to the global folder, it would be easier to not do any redirect
            // and update this career page just in english and german
            // otherwise redirect here to global folder
        }
    } else if (
        request.nextUrl.pathname == '/en/careers' &&
        !request.nextUrl.href.split('?')[1]?.includes('_storyblok')
    ) {
        // console.log('request.geo.country', request.geo.country);
        switch (request.geo.country) {
            case 'CH':
                if (userLocale.includes('fr')) {
                    request.nextUrl.pathname = '/en/ch/carriere';
                } else if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/en/ch/carriera';
                } else if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/en/ch/karriere';
                } else {
                    request.nextUrl.pathname = '/en/ch/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'DE':
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/en/de/karriere';
                } else {
                    request.nextUrl.pathname = '/en/de/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'US':
                //page only available in EN
                request.nextUrl.pathname = '/en/us/careers';
                return NextResponse.redirect(request.nextUrl);
            /* case 'ES':
                if (userLocale.includes('es')) {
                    request.nextUrl.pathname = '/en/es/carrera';
                } else {
                    request.nextUrl.pathname = '/en/es/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            case 'PL':
                if (userLocale.includes('pl')) {
                    request.nextUrl.pathname = '/en/pl/kariera';
                } else {
                    request.nextUrl.pathname = '/en/pl/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'HU':
                if (userLocale.includes('hu')) {
                    request.nextUrl.pathname = '/en/hu/karrier';
                } else {
                    request.nextUrl.pathname = '/en/hu/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            /* case 'BY':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/by/kariera';
                } else {
                    request.nextUrl.pathname = '/en/by/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'KZ':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/en/kz/kariera';
                } else {
                    request.nextUrl.pathname = '/en/kz/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            case 'CZ':
                if (userLocale.includes('cz')) {
                    request.nextUrl.pathname = '/en/cz/kariera';
                } else {
                    request.nextUrl.pathname = '/en/cz/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'AT':
                //german page is handled by german logic
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/en/at/karriere';
                } else {
                    request.nextUrl.pathname = '/en/at/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'GB':
                //page only available in EN
                request.nextUrl.pathname = '/en/gb/careers';
                return NextResponse.redirect(request.nextUrl);
            case 'IT':
                if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/en/it/carriera';
                } else {
                    request.nextUrl.pathname = '/en/it/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'NL':
                if (userLocale.includes('nl')) {
                    request.nextUrl.pathname = '/en/nl/carriere';
                } else {
                    request.nextUrl.pathname = '/en/nl/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'SE':
                if (userLocale.includes('se')) {
                    request.nextUrl.pathname = '/en/se/karriaer';
                } else {
                    request.nextUrl.pathname = '/en/se/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            /* case 'NO':
                if (userLocale.includes('no')) {
                    request.nextUrl.pathname = '/en/no/karriere';
                } else {
                    request.nextUrl.pathname = '/en/no/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            default:
            // bring on global page
            // current understanding of logic is:
            // don't bring to the global folder, it would be easier to not do any redirect
            // and update this career page just in english and german
            // otherwise redirect here to global folder
        }
    } else if (
        request.nextUrl.pathname == '/de/karriere' &&
        !request.nextUrl.href.split('?')[1]?.includes('_storyblok')
    ) {
        // console.log('request.geo.country', request.geo.country);
        switch (request.geo.country) {
            case 'CH':
                if (userLocale.includes('fr')) {
                    request.nextUrl.pathname = '/de/ch/carriere';
                } else if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/de/ch/carriera';
                } else if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/de/ch/karriere';
                } else {
                    request.nextUrl.pathname = '/de/ch/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'DE':
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/de/de/karriere';
                } else {
                    request.nextUrl.pathname = '/de/de/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'US':
                //page only available in EN
                request.nextUrl.pathname = '/de/us/careers';
                return NextResponse.redirect(request.nextUrl);
            /* case 'ES':
                if (userLocale.includes('es')) {
                    request.nextUrl.pathname = '/de/es/carrera';
                } else {
                    request.nextUrl.pathname = '/de/es/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            case 'PL':
                if (userLocale.includes('pl')) {
                    request.nextUrl.pathname = '/de/pl/kariera';
                } else {
                    request.nextUrl.pathname = '/de/pl/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'HU':
                if (userLocale.includes('hu')) {
                    request.nextUrl.pathname = '/de/hu/karrier';
                } else {
                    request.nextUrl.pathname = '/de/hu/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            /* case 'BY':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/de/by/kariera';
                } else {
                    request.nextUrl.pathname = '/de/by/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'KZ':
                if (userLocale.includes('ru')) {
                    request.nextUrl.pathname = '/de/kz/kariera';
                } else {
                    request.nextUrl.pathname = '/de/kz/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            case 'CZ':
                if (userLocale.includes('cz')) {
                    request.nextUrl.pathname = '/de/cz/kariera';
                } else {
                    request.nextUrl.pathname = '/de/cz/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'AT':
                //german page is handled by german logic
                if (userLocale.includes('de')) {
                    request.nextUrl.pathname = '/de/at/karriere';
                } else {
                    request.nextUrl.pathname = '/de/at/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'GB':
                //page only available in EN
                request.nextUrl.pathname = '/de/gb/careers';
                return NextResponse.redirect(request.nextUrl);
            case 'IT':
                if (userLocale.includes('it')) {
                    request.nextUrl.pathname = '/de/it/carriera';
                } else {
                    request.nextUrl.pathname = '/de/it/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'NL':
                if (userLocale.includes('nl')) {
                    request.nextUrl.pathname = '/de/nl/carriere';
                } else {
                    request.nextUrl.pathname = '/de/nl/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            case 'SE':
                if (userLocale.includes('se')) {
                    request.nextUrl.pathname = '/de/se/karriaer';
                } else {
                    request.nextUrl.pathname = '/de/se/careers';
                }
                return NextResponse.redirect(request.nextUrl);
            /* case 'NO':
                if (userLocale.includes('no')) {
                    request.nextUrl.pathname = '/de/no/karriere';
                } else {
                    request.nextUrl.pathname = '/de/no/careers';
                }
                return NextResponse.redirect(request.nextUrl); */
            default:
        }
    } else {
        // nothing should happen really, right? not sure...
    }

    // Geolocation logic for Offene Stellen page with Prospective integration

    // if (request.nextUrl.pathname == '/en/career/offene-stellen') {
    //     switch (request.geo.country) {
    //         case 'CH':
    //             if (userLocale.includes('fr')) {
    //                 request.nextUrl.pathname =
    //                     '/en/career/offene-stellen/offene-stellen-fr';
    //             } else if (userLocale.includes('it')) {
    //                 request.nextUrl.pathname =
    //                     '/en/career/offene-stellen/offene-stellen-it';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         case 'DE':
    //             if (userLocale.includes('de')) {
    //                 request.nextUrl.pathname = '/de/career/offene-stellen';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         /* case 'ES':
    //             if (userLocale.includes('es')) {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-es';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         case 'PL':
    //             if (userLocale.includes('pl')) {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-pl';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl); */
    //         case 'HU':
    //             if (userLocale.includes('hu')) {
    //                 request.nextUrl.pathname =
    //                     '/en/career/offene-stellen/offene-stellen-hu';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         /* case 'BY':
    //             if (userLocale.includes('ru')) {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-ru';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         case 'KZ':
    //             if (userLocale.includes('ru')) {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-ru';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl); */
    //         case 'CZ':
    //             if (userLocale.includes('cz')) {
    //                 request.nextUrl.pathname =
    //                     '/en/career/offene-stellen/offene-stellen-cz';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         /* case 'AT':
    //             //german page is handled by german logic
    //             request.nextUrl.pathname = '/en/career/offene-stellen';
    //             return NextResponse.redirect(request.nextUrl);
    //         case 'GB':
    //             //page only available in EN
    //             request.nextUrl.pathname = '/en/career/offene-stellen';
    //             return NextResponse.redirect(request.nextUrl); */
    //         case 'IT':
    //             if (userLocale.includes('it')) {
    //                 request.nextUrl.pathname =
    //                     '/en/career/offene-stellen/offene-stellen-it';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         /* case 'NL':
    //             if (userLocale.includes('nl')) {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-nl';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl); */
    //         case 'SE':
    //             if (userLocale.includes('se')) {
    //                 request.nextUrl.pathname =
    //                     '/en/career/offene-stellen/offene-stellen-se';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl);
    //         /* case 'NO':
    //             if (userLocale.includes('no')) {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen/offene-stellen-no';
    //             } else {
    //                 request.nextUrl.pathname = '/en/career/offene-stellen';
    //             }
    //             return NextResponse.redirect(request.nextUrl); */
    //         default:
    //     }
    // } else if (request.nextUrl.pathname == '/de/career/offene-stellen') {
    //     // if user pathname refers to German page
    //     // but user locate includes English value
    //     // we sent the user to the English translation of the page
    //     if (userLocale.includes('en')) {
    //         request.nextUrl.pathname = '/en/career/offene-stellen';
    //     }
    //     return NextResponse.redirect(request.nextUrl);
    // }

    return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
};
