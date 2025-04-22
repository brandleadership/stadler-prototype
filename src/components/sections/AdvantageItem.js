import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const AdvantageItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primaryTrans-100 lg:h-12 lg:w-12">
            <Image
                width={150}
                height={150}
                src={ButtonUrlRenderer(blok?.icon)}
                alt={blok?.icon.alt || 'Highlighted Icon'}
            />
        </div>
        <H4>{blok?.Title}</H4>
        <p className="text-greySolid-600">{blok?.Text}</p>
    </div>
);

export default AdvantageItem;
