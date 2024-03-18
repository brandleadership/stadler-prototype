'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';

const PortraitItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="mb-4">
            <img
                className="object-cover object-top w-full h-64 lg:h-96"
                src={blok?.image.filename}
                alt=""
            />
            <div className="mt-4 space-y-2">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {blok?.name}
                    </h3>
                    <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                        {blok?.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default PortraitItem;
