'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import Contact from './Contact';

const GlobalReference = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <Contact blok={blok.reference.content} />
        </section>
    );
};

export default GlobalReference;
