import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Image from 'next/image';

const Jobs = ({ blok }) => {
    // function optimizeImage(image) {
    //     if (!image.filename) return null;

    //     let imageSource = image.filename + `/m/800x700`;

    //     if (image.focus) imageSource += `/filters:focal(${image.focus})`;

    //     return imageSource;
    // }

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
            url = url + '/m/800x700';
            if (data.focus) {
                url += `/filters:focal(${data.focus})`;
            }
        }

        return url;
    };
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
                                target={blok?.link?.target ?? '_self'}
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
                                target={item.link.target ?? '_self'}
                            >
                                <div className="relative h-80 w-full">
                                    <Image
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="scale-100 object-cover duration-300 ease-in group-hover:scale-125"
                                        src={combinedImageRenderer(item.image)}
                                        alt={
                                            item.image.filename.alt ??
                                            item?.title
                                        }
                                    />
                                </div>
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
