import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import H2 from '../../components/typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';

import ContentWidth from '../../components/layouts/ContentWidth';

const History = ({ blok }) => {
    return (
        <section className="bg-white dark:bg-gray-900 antialiased sm:py-16 lg:py-24">
            <ContentWidth>
                <div className="col-span-12" {...storyblokEditable(blok)}>
                    <div className="max-w-3xl mx-auto space-y-4 text-center">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="mb-4 text-left text-xl font-normal">
                        {render(blok?.text)}
                    </div>
                    <div className="relative border-s border-gray-200 dark:border-gray-700">
                        {blok?.history_block.map((nestedBlok, index) => (
                            <StoryblokComponent
                                index={index}
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </div>
                    {blok?.show_button ? (
                        <ButtonPrimary
                            position="left"
                            href={blok?.cta_link.url}
                            buttonText={blok?.cta_text}
                        >
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
                    ) : (
                        ''
                    )}
                </div>
            </ContentWidth>
        </section>
    );
};

export default History;
