import { storyblokEditable } from '@storyblok/react/rsc';
import DownloadItem from './DownloadItem';

const GlobalDownloadReference = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <DownloadItem blok={blok.reference.content} />
        </section>
    );
};

export default GlobalDownloadReference;
