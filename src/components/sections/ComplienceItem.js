import { storyblokEditable } from '@storyblok/react/rsc';
import RichTextRenderer from '../helpers/RichTextRenderer';

const PortraitItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <img
            className="mb-6 max-w-[262px]"
            src={blok?.image.filename}
            alt={blok?.image.filename?.alt ?? 'Portrait image'}
        />
        <div className="mt-4">
            <RichTextRenderer text={blok?.text} />
        </div>
    </div>
);

export default PortraitItem;
