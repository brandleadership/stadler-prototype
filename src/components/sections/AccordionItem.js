import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
                {blok?.collapsable_text_2}
            </p>
        </div>
    );
};

export default AccordionItem;
