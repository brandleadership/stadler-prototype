import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const SimpleContainerWrapper = ({ blok }) => {
    return (
        <section className="py-8 lg:py-24">
            <ContentWidth>
                <div
                    className="col-span-12 max-w-full"
                    {...storyblokEditable(blok)}
                >
                    <H2>{blok?.title}</H2>

                    <div>
                        {blok.container.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok._uid}
                            />
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default SimpleContainerWrapper;
