'use client';
import { storyblokEditable } from '@storyblok/react';

import Footer from './Footer';
const ConfigFooter = ({ blok }) => {
    return (
        <div className="mt-auto bg-blueDark" {...storyblokEditable(blok)}>
            <div>
                <div>
                    {blok.footer.map((nestedBlok) => (
                        <Footer
                            className=""
                            blok={nestedBlok}
                            key={nestedBlok._uid}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ConfigFooter;
