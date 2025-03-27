import ButtonPrimary from '/src/components/elements/ButtonPrimary';
import { storyblokEditable } from '@storyblok/react/rsc';
import RichTextRenderer from '../../components/helpers/RichTextRenderer';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const NotFoundError = ({ blok }) => {
    return (
        <section className="h-full bg-white py-28" {...storyblokEditable(blok)}>
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
                        404
                    </h1>
                    <RichTextRenderer
                        text={blok?.error_message}
                    ></RichTextRenderer>
                    <div className="mt-10 flex justify-center">
                        <ButtonPrimary
                            href={ButtonUrlRenderer(blok?.cta_url)}
                            position="center"
                            buttonText={blok.cta_text}
                        ></ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default NotFoundError;
