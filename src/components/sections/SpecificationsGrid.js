import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import Button from '../elements/ButtonSecondary';
import ContentWidth from '../layouts/ContentWidth';
import H4 from '../typography/H4';

export default function SpecificationsGrid({ blok }) {
    return (
        <section
            className="bg-white py-24 sm:py-32"
            {...storyblokEditable(blok)}
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full">
                    <div className="mb-10">
                        <H4 textColor="black">{blok.title}</H4>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {blok.specifications_grid.map((nestedBlok) => (
                            <StoryblokComponent
                                blok={nestedBlok}
                                key={nestedBlok?._uid}
                            />
                        ))}
                    </dl>
                    <div className="block text-center mx-auto mt-16 ">
                        {blok.show_button && (
                            <Button
                                backgroundColorClass="bg-white"
                                textColorClass="text-primary"
                                borderColorClass="border-primary"
                                position="center"
                                href={blok.link_URL.url}
                                iconBefore={
                                    <svg
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.2257 12.6027V14.8206H1.77433V12.6027H0V16.5949H16V12.6027H14.2257Z"
                                            fill="#005893"
                                        />
                                        <path
                                            d="M14.2878 7.54142L13.2099 6.13083L8.87164 9.44882V0.625977H7.09731V9.44882L2.75465 6.13083L1.67675 7.54142L7.98447 12.3632L14.2878 7.54142Z"
                                            fill="#005893"
                                        />
                                    </svg>
                                }
                            >
                                {blok.link_CTA}
                            </Button>
                        )}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
