import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

export default function Intro({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white dark:bg-gray-900"
        >
            <ContentWidth>
                <div className="col-span-12">
                    <div className="gap-16 items-center py-8 max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
                        <div className="font-normal sm:text-lg">
                            <H2>{blok?.title}</H2>
                            <p className="mb-4 mt-6 richtext">
                                {render(blok.text)}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img
                                className="object-cover object-left h-96 scale-100"
                                src={blok?.image.filename}
                                alt="office content 1"
                            />
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
