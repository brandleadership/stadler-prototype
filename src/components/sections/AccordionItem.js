import { storyblokEditable } from '@storyblok/react/rsc';
import RichTextRenderer from '../helpers/RichTextRenderer';

const AccordionItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <div className="mb-2">
                <RichTextRenderer text={blok?.collapsable} />
            </div>
        </div>
    );
};

export default AccordionItem;
