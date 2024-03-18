'use client';

import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import ButtonPrimary from '../elements/ButtonPrimary';

function TeaserGeneral({ title, customText, ctaText, href }) {
    return (
        <section className="bg-white py-12">
            <ContentWidth>
                <div className="col-span-12 max-w-full flex flex-col justify-left">
                    {title && <H2>{title}</H2>}
                    <Text styles="mb-8 text-xl">
                        {customText
                            ? customText
                            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                    </Text>

                    <ButtonPrimary
                        position="left"
                        href={href ? href : '/downloadcenter'}
                    >
                        {ctaText ? ctaText : 'Alle ansehen'}
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_5650_6261)">
                                <path
                                    d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_5650_6261">
                                    <rect
                                        width="14"
                                        height="14"
                                        fill="white"
                                        transform="translate(0.5 0.517578)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </ButtonPrimary>
                </div>
            </ContentWidth>
        </section>
    );
}
export default TeaserGeneral;
