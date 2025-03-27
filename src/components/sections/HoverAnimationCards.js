import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H3 from '../typography/H3';
import H2 from '../typography/H2';

const HoverAnimationCards = ({ title, lead, list }) => {
    return (
        <section className="z-[10000] bg-white py-20">
            <ContentWidth>
                <div className="col-span-12 w-full">
                    <div className="mb-8 text-start">
                        <H2>{title}</H2>
                        <Text>{lead}</Text>
                    </div>
                    <div className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-5">
                        {list.map((item) => (
                            <div
                                key={item.title}
                                className="group relative max-w-sm overflow-hidden border border-greySolid-100 bg-white"
                            >
                                <a tabIndex="1" className="" href={item.href}>
                                    <img
                                        className="max-h-auto w-full object-contain"
                                        src={item.image}
                                        alt={item.image?.alt ?? item.title}
                                    />
                                </a>
                                <a
                                    tabIndex="1"
                                    href={item.href}
                                    className="absolute inset-0 top-2/3 grid h-1/2 w-full items-start justify-center bg-gradient-to-b from-transparent to-black/60 px-5 pt-5 transition-all hover:top-0 hover:h-full hover:from-black/60 hover:to-black/60"
                                >
                                    <H3 styles="font-normal text-white">
                                        {item.title}
                                    </H3>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default HoverAnimationCards;
