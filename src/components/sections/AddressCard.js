'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import RichTextRenderer from '../helpers/RichTextRenderer';

const AddressCard = ({ blok }) => (
    <div
        {...storyblokEditable(blok)}
        className="w-full items-center bg-greySolid-30 p-8 shadow"
    >
        <div className="mb-2">
            <p className="text-base font-semibold text-greySolid-600">
                {blok?.title}
            </p>
            <RichTextRenderer text={blok?.address_hours} />
        </div>
    </div>
);

export default AddressCard;
