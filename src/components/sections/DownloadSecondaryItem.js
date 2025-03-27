'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import Text from '../typography/Text';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const DownloadSecondaryItem = ({ blok }) => {
    return (
        <>
            <div
                {...storyblokEditable(blok)}
                className="mb-4 grid grid-cols-[4fr_1fr] align-middle text-xl"
            >
                <Text
                    className="text-wrap mr-0 md:mr-10 md:w-auto"
                    styles="inline-block align-middle h-fit my-auto"
                >
                    {blok.title}
                </Text>
                <div className="flex flex-wrap items-center justify-end">
                    {blok?.download_list?.map(
                        (item, i) =>
                            item?.cta_text && (
                                <a
                                    tabIndex="1"
                                    key={i}
                                    className="ml-4 inline-flex pb-2 pt-2 text-base text-primary"
                                    href={ButtonUrlRenderer(item?.cta_asset)}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {item?.cta_text}
                                </a>
                            )
                    )}
                </div>
            </div>
            <div className="mb-4 border-b"></div>
        </>
    );
};
export default DownloadSecondaryItem;
