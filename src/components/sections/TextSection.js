import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../../components/layouts/SmallWidth';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import { render } from 'storyblok-rich-text-react-renderer';

export default function TextSection({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white dark:bg-gray-900 py-24"
        >
            <SmallWidth>
                <div className="richtext">{render(blok.text)}</div>
            </SmallWidth>
        </section>
    );
}
