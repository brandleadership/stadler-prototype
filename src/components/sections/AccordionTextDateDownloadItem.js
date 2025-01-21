import { storyblokEditable } from '@storyblok/react/rsc';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import DateFormatter from '../helpers/DateFormatter';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const MOBILE_WIDTH = 768;

const AccordionTextDateDownloadItem = ({ blok }) => {
    const [windowSize, setWindowSize] = useState(0);
    const investorsDE = useRef();
    const investorsEN = useRef();

    const onResize = () => { 
     setWindowSize(window.innerWidth);
    }
    useLayoutEffect(() => { 
     onResize();
   }, []);
    useLayoutEffect(() => { 
     window.addEventListener('resize', onResize) 
     return () => window.removeEventListener('resize', onResize) 
   }, []); 

    useEffect(() => {
        let investorsDEreference = investorsDE.current;
        let investorsENreference = investorsEN.current;

        investorsDEreference?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            const titleArray = blok?.download_presentation.url.split('/');
            const title = titleArray[titleArray.length - 1];
            _paq.push([
                'trackEvent',
                '5. Investorenseite Publikationsdownload',
                `${title}`,
            ]);
            // _paq.push([
            //     'trackGoal',
            //     'Goal ID',
            //     `${blok?.title} - ${blok?.download_bericht.url}`
            // ]);
        });

        investorsENreference?.addEventListener('click', () => {
            var _paq = (window._paq = window._paq || []);
            const titleArray = blok?.download_presentation.url.split('/');
            const title = titleArray[titleArray.length - 1];
            _paq.push([
                'trackEvent',
                '5. Investorenseite Publikationsdownload',
                `${blok?.title} - ${title}`,
            ]);
        });
    });
    return (
        <div
            {...storyblokEditable(blok)}
            className="border-b md:border-0 grid md:grid-cols-[1fr_3fr] bg-white text-base text-black last:mb-4 last:border-b-0"
        >
            <div className="px-2 md:px-6 py-4 font-medium text-center md:text-left">{blok?.title}</div>
            <div className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-3 items-center">
                <div className="px-2 md:px-6 py-4">{DateFormatter(blok?.text_date)}</div>
                <div className="px-2 md:px-6 py-4 text-end md:text-center">
                    <a
                        tabIndex="1"
                        target="_blank"
                        ref={investorsDE}
                        className="font-medium text-primary"
                        href={ButtonUrlRenderer(blok?.download_bericht)}
                        rel="noreferrer"
                    >
                        {windowSize < MOBILE_WIDTH ? "DE" : blok?.CTA_download_bericht}
                    </a>
                </div>
                <div className="px-2 md:px-6 py-4 text-end md:text-center">
                    <a
                        tabIndex="1"
                        target="_blank"
                        ref={investorsEN}
                        className="font-medium text-primary"
                        href={ButtonUrlRenderer(blok?.download_presentation)}
                        rel="noreferrer"
                    >
                        {windowSize < MOBILE_WIDTH ? "EN" : blok?.CTA_download_presentation}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AccordionTextDateDownloadItem;
