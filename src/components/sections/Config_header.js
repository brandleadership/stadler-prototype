'use client';
import { storyblokEditable } from '@storyblok/react';
import HeaderNew from './HeaderNew';
const ConfigHeader = ({ blok, translatedSlugs }) => {
    return (
        <>
            <div {...storyblokEditable(blok)}>
                {blok?.header.map((nestedBlok) => (
                    <HeaderNew
                        className=""
                        blok={nestedBlok}
                        translatedSlugs={translatedSlugs}
                        key={nestedBlok._uid}
                    />
                ))}
            </div>
        </>
    );
};
export default ConfigHeader;
