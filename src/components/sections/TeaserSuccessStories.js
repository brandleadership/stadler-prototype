import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import Text from '../typography/Text';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const TeaserSuccessStories = ({ blok }) => {
    function optimizeImage(image) {
        if (!image.filename) return null;

        let imageSource = image.filename + `/m/372x320`;

        if (image.focus) imageSource += `/filters:focal(${image.focus})`;

        return imageSource;
    }
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
                                <img
                                    className="min-h-full min-w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125"
                                    src={optimizeImage(item?.image)}
                                    alt={
                                        item?.image?.filename?.alt ?? item?.name
                                    }
                                />
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
