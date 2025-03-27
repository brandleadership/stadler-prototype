'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const AccordionTextDownloadItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <ul>
                <div>
                    <li className="my-4 flex items-center justify-between text-base font-medium">
                        <p className="w-5/12 pr-4">{blok?.text_location}</p>
                        <p className="w-5/12 pr-4">
                            {blok?.text_certifications}
                        </p>
                        <div className="flex flex-col flex-wrap items-center justify-end lg:w-2/12 lg:flex-row">
                            {blok?.certificate_download?.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default AccordionTextDownloadItem;
