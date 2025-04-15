import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const SchienenfahrzeugeWrapper = ({ blok }) => {
    return (
        <section className="bg-stadlergradient" key={blok._uid}>
            <div {...storyblokEditable(blok)} key={blok._uid}>
                {blok.schienenfahrzeuge_grid.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok?._uid}
                    />
                ))}
            </div>
        </section>
    );
};

export default SchienenfahrzeugeWrapper;
