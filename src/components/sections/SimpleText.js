'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../../components/layouts/SmallWidth';
import Text from '../typography/Text';

export default function SimpleText({ blok }) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white dark:bg-gray-900 py-24"
        >
            <SmallWidth>
                <Text>{blok?.text}</Text>
            </SmallWidth>
        </section>
    );
}
