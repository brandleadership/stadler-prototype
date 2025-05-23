import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import SmallWidth from '../layouts/SmallWidth';
import RichTextRenderer from '../helpers/RichTextRenderer';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { DownloadIcon } from '../icons/DownloadIcon';
import Image from 'next/image';

const TeaserImageLeft = ({ blok }) => {
    const assetType = () => {
        const arr = blok?.download_link_item?.url.split('.') || [];
        return arr[arr.length - 1].toUpperCase();
    };
    return (
        <section {...storyblokEditable(blok)} className="py-8 lg:py-24">
            <SmallWidth>
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative aspect-[16/9] w-full">
                        <Image
                            fill={true}
                            sizes="(max-width: 768px) 100vw,  50vw"
                            src={ButtonUrlRenderer(blok?.image)}
                            className="object-cover object-center"
                            alt={blok?.image.filename.alt ?? blok?.title}
                        />
                    </div>
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        {blok?.logo_icon?.filename && (
                            <a
                                href={blok.logo_link.url}
                                aria-label="logo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="mb-4 h-auto w-auto max-w-[150px]"
                                    src={ButtonUrlRenderer(blok.logo_icon)}
                                    alt={blok.logo_icon.alt || 'Logo'}
                                />
                            </a>
                        )}

                        <H2>{blok?.title}</H2>
                        <div className="mt-4 text-xl">
                            <RichTextRenderer text={blok?.text} />
                        </div>
                        {blok?.cta_button_text && (
                            <ButtonPrimary
                                position="left"
                                buttonText={blok?.cta_button_text}
                                href={ButtonUrlRenderer(blok?.cta_button_link)}
                            />
                        )}
                        {blok.download_link_title &&
                            blok.download_link_item && (
                                <a
                                    aria-label="Link to download"
                                    rel="noreferrer noopener"
                                    target={blok?.link?.target ?? '_blank'}
                                    href={ButtonUrlRenderer(
                                        blok?.download_link_item
                                    )}
                                    className={`relative col-span-2 mb-2 flex items-center justify-between rounded-[4px] border-2 border-primary px-5 py-2 hover:bg-gray-100 md:col-span-1`}
                                >
                                    <div className="flex text-base">
                                        {blok?.download_link_title}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-4 rounded-xl px-2 text-base leading-[20px]">
                                            {blok?.download_link_item
                                                ?.linktype === 'asset' &&
                                            blok?.download_link_item?.url
                                                ? assetType()
                                                : 'PDF'}
                                        </span>
                                        <DownloadIcon
                                            styles="w-4 h-4 mr-4"
                                            color="#000000"
                                        />
                                    </div>
                                </a>
                            )}
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default TeaserImageLeft;
