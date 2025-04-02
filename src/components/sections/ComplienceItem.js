import { storyblokEditable } from '@storyblok/react/rsc';
import RichTextRenderer from '../helpers/RichTextRenderer';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const PortraitItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <Image
            width={262}
            height={126}
            className="mb-6 h-full w-[262px] object-contain"
            src={ButtonUrlRenderer(blok?.image)}
            alt={blok?.image.filename?.alt ?? 'Portrait image'}
        />

        <div className="mt-4">
            <RichTextRenderer text={blok?.text} />
        </div>
    </div>
);

export default PortraitItem;
