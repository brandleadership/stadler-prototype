import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../../components/layouts/SmallWidth';
import RichTextRenderer from '../helpers/RichTextRenderer';

export default function TextSection({ blok, className = '' }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className={`bg-white py-8 pt-14 lg:py-24 ${className}`}
        >
            <SmallWidth>
                <RichTextRenderer text={blok.text} />
            </SmallWidth>
        </section>
    );
}
