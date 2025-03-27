'use client';

import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const Jobs = ({ blok }) => {
    function optimizeImage(image) {
        if (!image.filename) return null;

        let imageSource = image.filename + `/m/800x700`;

        if (image.focus) imageSource += `/filters:focal(${image.focus})`;

        return imageSource;
    }
    return (
        <section className="bg-white antialiased">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-24">
                <div className="flex flex-col gap-8 sm:gap-12 xl:flex-row xl:items-start xl:gap-16">
                    <div>
                        <H2>{blok?.title}</H2>
                        <Text>{blok?.text}</Text>
                        <div className="mt-8">
                            <ButtonPrimary
                                href={ButtonUrlRenderer(blok?.link_URL)}
                                position="left"
                                buttonText={blok?.link_CTA}
                                target={blok?.link?.target ?? false}
                            />
                        </div>
                    </div>

                    <div className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:max-w-3xl">
                        {blok?.career_open_positions_items.map((item) => (
                            <a
                                tabIndex="1"
                                key={item.title}
                                href={`${ButtonUrlRenderer(item.link)}?20=${item.entry_level}`}
                                className="group relative overflow-hidden"
                                target={item.link.target ?? false}
                            >
                                <img
                                    className="h-80 w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125"
                                    src={optimizeImage(item.image)}
                                    alt={item.image.filename.alt ?? item?.title}
                                />
                                <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                                    <div className="text-center">
                                        <p className="text-xl font-bold text-white">
                                            {item?.title}
                                        </p>
                                        <p className="text-base font-medium text-greySolid-300">
                                            {item?.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Jobs;
