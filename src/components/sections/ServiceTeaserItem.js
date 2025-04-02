import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Link from 'next/link';

const ServiceTeaserItem = ({ blok }) => {
    return (
        <div
            {...storyblokEditable(blok)}
            className="mx-auto border border-greySolid-100 bg-white shadow"
        >
            <Link tabIndex="1" href={ButtonUrlRenderer(blok?.link)}>
                {blok?.Icon.filename ? (
                    <div className="relative aspect-[1/1] w-24">
                        <img
                            className="pl-5 pt-5"
                            src={ButtonUrlRenderer(blok?.Icon)}
                            alt={blok?.Icon.filename.alt ?? blok?.title}
                        />
                    </div>
                ) : (
                    ''
                )}
                <div className="p-5">
                    <H3>{blok?.title}</H3>
                    <p>{blok?.text}</p>
                </div>
            </Link>
        </div>
    );
};

export default ServiceTeaserItem;
