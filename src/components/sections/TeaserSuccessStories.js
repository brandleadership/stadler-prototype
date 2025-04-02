import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import Text from '../typography/Text';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Image from 'next/image';

const TeaserSuccessStories = ({ blok }) => {
    // function optimizeImage(image) {
    //     if (!image.filename) return null;

    //     let imageSource = image.filename + `/m/372x320`;

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
            url = url + '/m/372x320';
            if (data.focus) {
                url += `/filters:focal(${data.focus})`;
            }
        }

        return url;
    };
    return (
        <section className="bg-white antialiased">
            <SmallWidth>
                <div className="mx-auto max-w-screen-xl py-8 lg:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <H2>{blok?.title}</H2>
                        <Text>{blok?.text}</Text>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 xl:grid-cols-3">
                        {blok?.employee_items.map((item) => (
                            <a
                                tabIndex="1"
                                key={ButtonUrlRenderer(item?.link)}
                                href={ButtonUrlRenderer(item?.link)}
                                className="group relative h-80 overflow-hidden"
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        width={372}
                                        height={320}
                                        className="scale-100 object-cover duration-300 ease-in group-hover:scale-125"
                                        src={combinedImageRenderer(item?.image)}
                                        alt={
                                            item?.image?.filename?.alt ??
                                            item?.name
                                        }
                                    />
                                </div>
                                <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                                    <div className="text-center text-white">
                                        <H4>{item?.name}</H4>
                                        <p className="text-base font-medium text-greySolid-300">
                                            {item?.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default TeaserSuccessStories;
