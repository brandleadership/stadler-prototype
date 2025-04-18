import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

function CareerStepGrid({ blok }) {
    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 w-full">
                <H2>{blok.title}</H2>
            </div>
            <div className="col-span-12 mx-auto w-full gap-8 pb-8 xl:grid">
                <ol className="w-full items-center justify-start space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
                    {blok.career_step_items.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok._uid}
                        />
                    ))}
                </ol>
            </div>
        </ContentWidth>
    );
}

export default CareerStepGrid;
