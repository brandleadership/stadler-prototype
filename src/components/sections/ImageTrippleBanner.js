'use client';

import { storyblokEditable } from '@storyblok/react/rsc';

const ImageTrippleBanner = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <div className="gap-4 sm:mt-12 sm:grid sm:grid-cols-4">
                <img
                    className="col-span-2 h-80 w-full scale-100 object-cover sm:block"
                    src={blok?.image1.filename}
                    alt={blok?.image1.filename?.alt ?? 'Content gallery 1'}
                />
                <img
                    className="col-span-1 hidden h-80 w-full scale-100 object-cover sm:block"
                    src={blok?.image2.filename}
                    alt={blok?.image2.filename?.alt ?? 'Content gallery 2'}
                />
                <img
                    className="col-span-1 hidden h-80 w-full scale-100 object-cover sm:block"
                    src={blok?.image3.filename}
                    alt={blok?.image3.filename?.alt ?? 'Content gallery 3'}
                />
            </div>
        </section>
    );
};

export default ImageTrippleBanner;
