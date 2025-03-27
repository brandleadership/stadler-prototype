'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const MedienmitteilungDownloadItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <ul className="col-span-12">
                <div>
                    <li className="my-4 flex items-center justify-between text-xl">
                        <p className="w-10/12">{blok?.title}</p>
                        {blok.downloads.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </li>
                    <div className="mb-6 border-b"></div>
                </div>
            </ul>
        </div>
    );
};

export default MedienmitteilungDownloadItem;
