import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import { MailIcon } from '../icons/MailIcon';
import { Facebook } from '../icons/Facebook';
import { YouTube } from '../icons/Youtube';
import { Instagram } from '../icons/Instagram';
import { LinkedIn } from '../icons/LinkedIn';
import { PhoneIcon } from '../icons/PhoneIcon';
import RichTextRenderer from '../helpers/RichTextRenderer';
import Link from 'next/link';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const Contact = ({ blok }) => {
    return (
        <section
            className="bg-stadlergradient py-8 lg:py-24"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 xl:grid-cols-12 xl:gap-20">
                    <div className="relative w-full xl:col-span-4 xl:h-[369px] xl:w-[320px]">
                        <Image
                            priority
                            fill
                            sizes="(min-width: 1280px) 320px, 100vw"
                            className="object-cover object-right"
                            src={ButtonUrlRenderer(blok?.image)}
                            alt={blok?.image?.filename.alt ?? 'Contact image'}
                        />
                    </div>
                    <div className="w-full xl:col-span-8">
                        <div className="tracking-tight text-white">
                            <H2>{blok?.Title}</H2>
                        </div>
                        <div className="mb-8 font-light text-white md:text-lg">
                            <Text>{blok?.text}</Text>
                        </div>
                        <div className="flex-col text-white">
                            <div className="mb-4 break-words text-base font-bold lg:text-xl">
                                <RichTextRenderer
                                    text={blok?.subtitle}
                                ></RichTextRenderer>
                            </div>
                            <div className="mb-2 flex items-center">
                                <PhoneIcon
                                    color="#fff"
                                    className="h-4 w-4 fill-white"
                                />
                                <span className="px-3 py-2">
                                    {blok?.phonenumber}
                                </span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <MailIcon
                                    color="#fff"
                                    className="h-4 w-4 fill-white"
                                />
                                <Link
                                    tabIndex="1"
                                    type="email"
                                    className="border-none bg-transparent"
                                    href={'mailto:' + blok?.email_link?.email}
                                >
                                    {blok?.email}
                                </Link>
                            </div>
                            <div className="flex space-x-4 py-2">
                                <Link
                                    tabIndex="1"
                                    href={blok.social_media_link_2?.url ?? ''}
                                    className="text-greySolid-600 hover:text-greySolid-400"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <LinkedIn styles="h-6 w-6"></LinkedIn>
                                </Link>
                                <Link
                                    tabIndex="1"
                                    href={blok?.social_media_link_3?.url ?? ''}
                                    className="text-greySolid-600 hover:text-greySolid-400"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <YouTube styles="h-6 w-6"></YouTube>
                                </Link>
                                <Link
                                    tabIndex="1"
                                    href={blok?.social_media_link_4?.url ?? ''}
                                    className="text-greySolid-600 hover:text-greySolid-400"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <Facebook styles="h-6 w-6"></Facebook>
                                </Link>
                                <Link
                                    tabIndex="1"
                                    href={blok?.social_media_link_1?.url ?? ''}
                                    className="text-greySolid-600 hover:text-greySolid-400"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <Instagram styles="h-6 w-6"></Instagram>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default Contact;
