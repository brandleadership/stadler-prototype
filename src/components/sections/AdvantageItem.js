import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';

const AdvantageItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primaryTrans-100 lg:h-12 lg:w-12">
            <img
                width={150}
                height={150}
                src={blok?.icon.filename}
                alt={blok?.icon.alt || 'Highlighted Icon'}
            />
        </div>
        <H4>{blok?.Title}</H4>
        <p className="text-greySolid-600">{blok?.Text}</p>
    </div>
);

export default AdvantageItem;
