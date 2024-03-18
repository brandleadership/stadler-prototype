'use client';

import { storyblokEditable } from '@storyblok/react/rsc';
import Button from '../elements/ButtonSecondary';
import Text from '../typography/Text';

const DownloadSecondaryItem = ({ blok }) => {
    return (
        <>
            <li
                {...storyblokEditable(blok)}
                className="mb-6 text-xl flex-col md:flex-row flex justify-start md:justify-between items-center"
            >
                <Text className="w-full md:w-auto mr-0 md:mr-10">
                    {blok.title}
                </Text>
                <div className="w-full md:w-auto min-w-[14rem]">
                    <Button
                        textColorClass="text-primary"
                        borderColorClass="border-primary"
                        styles="flex gap-2"
                        href={blok?.download_cta.url}
                        iconAfter={
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
                        {blok?.download_cta_text}
                    </Button>
                </div>
            </li>
            <div className="border-b mb-6"></div>
        </>
    );
};
export default DownloadSecondaryItem;
