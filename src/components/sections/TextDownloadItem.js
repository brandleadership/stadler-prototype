import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const TextDownloadItem = ({ blok }) => {
    return (
        <ul {...storyblokEditable(blok)}>
            <li className="my-4 flex items-center justify-between text-base">
                <p className="w-8/12 font-medium">{blok?.title}</p>
                <div className="flex w-4/12 flex-wrap items-center justify-end">
                    {blok?.download_items?.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok?._uid}
                        />
                    ))}
                </div>
            </li>
            <div className="mb-6 border-b"></div>
        </ul>
    );
};

export default TextDownloadItem;
