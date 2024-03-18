import { storyblokEditable } from '@storyblok/react/rsc';

const CorporateGorvernanceTeaser = ({ blok }) => {
    return (
        <a href={blok?.page_link.url} {...storyblokEditable(blok)}>
            <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blok?.title}
                </h2>
                <p className="mb-4 font-normal text-black dark:text-gray-400">
                    {blok?.text}
                </p>
                <img className="w-5" src="/icons/arrow-blue.svg" alt="" />
            </article>
        </a>
    );
};
export default CorporateGorvernanceTeaser;
