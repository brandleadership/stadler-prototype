import { storyblokEditable } from '@storyblok/react/rsc';
export default function SpecificationItem({ blok }) {
    return (
        <div {...storyblokEditable(blok)}>
            <dt className="text-base text-black">{blok.title}</dt>
            <dd className="mt-1 font-bold text-black">{blok.text}</dd>
        </div>
    );
}
