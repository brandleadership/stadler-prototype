import Button from '../elements/ButtonSecondary';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import { Facebook } from '../icons/Facebook';
import { YouTube } from '../icons/Youtube';
import { Instagram } from '../icons/Instagram';
import { LinkedIn } from '../icons/LinkedIn';

const Footer = ({ blok }) => {
    const legalLinks = (
        <ul
            role="list"
            className="flex flex-row flex-wrap gap-6 gap-y-4 lg:gap-8"
        >
            <li>
                <Link
                    tabIndex="1"
                    href={`/${blok.link_1_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_1_text}
                </Link>
            </li>
            <li>
                <Link
                    tabIndex="1"
                    href={`/${blok.link_2_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_2_text}
                </Link>
            </li>
            <li>
                <Link
                    tabIndex="1"
                    href={`/${blok.link_3_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_3_text}
                </Link>
            </li>
            <li>
                <Link
                    tabIndex="1"
                    href={`/${blok.link_4_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_4_text}
                </Link>
            </li>
            <li>
                <Link
                    tabIndex="1"
                    href={`/${blok.link_5_url.story.url}`}
                    className="inline-block text-base leading-6 text-primarySolid-400 hover:text-primarySolid-400"
                >
                    {blok.link_5_text}
                </Link>
            </li>
        </ul>
    );

    const socialLinks = (
        <div className="flex space-x-4">
            <Link
                tabIndex="1"
                href={blok.social_media_link_2?.url}
                className="text-greySolid-600 hover:text-greySolid-400"
            >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn styles="h-6 w-6"></LinkedIn>
            </Link>
            <Link
                tabIndex="1"
                href={blok.social_media_link_3?.url}
                className="text-greySolid-600 hover:text-greySolid-400"
            >
                <span className="sr-only">YouTube</span>
                <YouTube styles="h-6 w-6"></YouTube>
            </Link>
            <Link
                tabIndex="1"
                href={blok.social_media_link_4?.url}
                className="text-greySolid-600 hover:text-greySolid-400"
            >
                <span className="sr-only">Facebook</span>
                <Facebook styles="h-6 w-6"></Facebook>
            </Link>
            <Link
                tabIndex="1"
                href={blok.social_media_link_1?.url}
                className="text-greySolid-600 hover:text-greySolid-400"
            >
                <span className="sr-only">Instagram</span>
                <Instagram styles="h-6 w-6"></Instagram>
            </Link>
        </div>
    );

    return (
        <footer
            className="mt-auto bg-blueDark"
            aria-labelledby="footer-heading"
        >
            <ContentWidth>
                <div className="col-span-12 mx-auto w-full py-8 lg:py-10">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <img
                            className="h-6"
                            src={blok.Logo.filename}
                            alt={blok.Logo.filename?.alt ?? 'Logo Company name'}
                        />
                        <div className="sm:mt-0 lg:flex lg:items-center lg:justify-between">
                            <div className="mb-6 mt-12 lg:mb-0 lg:mr-14 lg:mt-0">
                                <Button
                                    backgroundColorClass="bg-transparent"
                                    textColorClass="text-white"
                                    borderColorClass="border-white"
                                    position="left"
                                    href={ButtonUrlRenderer(blok?.button)}
                                >
                                    {blok.button_text}
                                </Button>
                            </div>
                            <div className="flex space-x-4">{socialLinks}</div>
                        </div>
                    </div>

                    <div className="flex-row flex-wrap md:flex-col md:items-start md:justify-start lg:flex lg:pt-8 xl:flex-row xl:items-center xl:justify-between">
                        <div className="mt-16 lg:mt-0">{legalLinks}</div>

                        <p className="mt-16 text-base leading-5 text-primarySolid-400 sm:mt-12 md:mt-16 lg:mt-16 xl:mt-0">
                            {blok.copyright_text}
                        </p>
                    </div>
                </div>
            </ContentWidth>
        </footer>
    );
};

export default Footer;
