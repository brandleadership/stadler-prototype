import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../../components/typography/H3';
import ContentWidth from '../layouts/ContentWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer'

const Features = ({ blok }) => {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white py-16 lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full mx-auto bg-white">
                    <div className="mb-10 tracking-tight dark:text-white ">
                        <H3>{blok?.title}</H3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        <div className="flex flex-col justify-center items-center md:items-start ">
                            <img
                                src={blok?.image_1.filename}
                                alt="Image"
                                className="w-full md:w-auto h-[320px] object-cover"
                            />
                            <a
                                href={ButtonUrlRenderer(blok?.link_1)}
                                className="flex items-center gap-2 text-2xl font-bold mt-4"
                            >
                                {blok?.text_1}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                                        fill="#005893"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col justify-center items-center md:items-start ">
                            <img
                                src={blok?.image_2.filename}
                                alt="Image"
                                className="w-full md:w-auto h-[320px] object-cover"
                            />
                            <a
                                href={ButtonUrlRenderer(blok?.link_2)}
                                className="flex items-center gap-2 text-2xl font-bold mt-4"
                            >
                                {blok?.text_2}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                                        fill="#005893"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default Features;
