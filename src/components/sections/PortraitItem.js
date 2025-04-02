import { storyblokEditable } from '@storyblok/react/rsc';
import H4 from '../typography/H4';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const PortraitItem = ({ blok }) => (
    <div {...storyblokEditable(blok)}>
        <div className="mb-4">
            <div className="relative h-64 w-full lg:h-96">
                <Image
                    sizes="100vw"
                    fill={true}
                    className="object-cover object-top"
                    src={ButtonUrlRenderer(blok?.image)}
                    alt={blok?.image.filename?.alt ?? 'Portrait image'}
                />
            </div>
            <div className="mt-4 space-y-2">
                <div>
                    <H4>{blok?.name}</H4>
                    <p className="text-base font-medium text-greySolid-600">
                        {blok?.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default PortraitItem;
