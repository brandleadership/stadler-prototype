'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import { ArrowForwardBlue } from '../icons/ArrowForwardBlue';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const CorporateGovernanceTeaser = ({ blok }) => {
    return (
        <a
            className="w-full xl:w-auto"
            href={ButtonUrlRenderer(blok?.page_link)}
            {...storyblokEditable(blok)}
        >
            <article className="flex h-full flex-col justify-between border border-greySolid-100 bg-white p-4 shadow-md">
                <div>
                    <H3>{blok?.title}</H3>
                    <p className="mb-4 font-normal text-black">{blok?.text}</p>
                </div>
                <ArrowForwardBlue styles="w-5"></ArrowForwardBlue>
            </article>
        </a>
    );
};
export default CorporateGovernanceTeaser;
