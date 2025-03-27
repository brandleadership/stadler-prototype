import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import SmallWidth from '../layouts/SmallWidth';

const ComplienceGrid = ({ blok }) => (
    <section {...storyblokEditable(blok)} className="pb-8 lg:pb-24">
        <SmallWidth>
            <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-8 md:grid-cols-2">
                {blok.blocks.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </SmallWidth>
    </section>
);

export default ComplienceGrid;
