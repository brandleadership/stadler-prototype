import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Link from 'next/link';
import Image from 'next/image';

const SchienenfahrzeugeItem = ({ blok }) => {
    // const optimizeImage = (image) => {
    //     if (!image || !image.filename) return null;

    //     let imageSource = image.filename + `/m/1800x1000`;

    //     if (image.focus) imageSource += `/filters:focal(${image.focus})`;

    //     return imageSource;
    // };

    const combinedImageRenderer = (data) => {
        if (!data) return '/';

        let url = '/';

        if (data.linktype && data.linktype === 'asset') {
            if (data.url) {
                url = data.url.replace(
                    'https://a.storyblok.com/f/269997/',
                    `${process.env.BASE_URL ? process.env.BASE_URL : 'https://stadlerrail.com'}/api/docs/`
                );
            } else if (data.fieldtype) {
                url = data.filename || '/';
            }
        } else if (data.fieldtype && data.fieldtype === 'asset') {
            if (data.filename) {
                url = data.filename.replace(
                    'https://a.storyblok.com/f/269997/',
                    `${process.env.BASE_URL ? process.env.BASE_URL : 'https://stadlerrail.com'}/api/docs/`
                );
            }
        }

        if (url !== '/' && data.filename) {
            url = url + '/m/1800x1000';
            if (data.focus) {
                url += `/filters:focal(${data.focus})`;
            }
        }

        return url;
    };

    return (
        <Link
            tabIndex="1"
            className="flex flex-col bg-white text-black"
            href={ButtonUrlRenderer(blok.link)}
            {...storyblokEditable(blok)}
        >
            <div className="relative aspect-[9/5] w-full">
                <Image
                    width={1800}
                    height={1000}
                    className="object-cover"
                    src={combinedImageRenderer(blok?.image)}
                    alt={blok?.image.filename.alt ?? 'Train Type Image'}
                />
            </div>
            <div className="p-4 lg:p-6 lg:pb-6">
                {blok.tag ? (
                    <small className="mb-2 flex text-greySolid-600">
                        {blok?.tag}
                    </small>
                ) : (
                    ''
                )}
                <div className="flex flex-row items-center justify-between gap-2">
                    <H3 resetStyles={true}>{blok?.title}</H3>

                    <img src="/icons/arrow-blue.svg" alt="Arrow Icon" />
                </div>
            </div>
        </Link>
    );
};

export default SchienenfahrzeugeItem;
