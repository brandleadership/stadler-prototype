'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import ButtonPrimary from '../elements/ButtonPrimary';
import Text from '../typography/Text';
import FullWidth from '../layouts/FullWidth';

export default function Video({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="bg-white py-24  2xl:max-w-[1760px] 2xl:mx-auto"
        >
            <FullWidth>
                <div className="col-span-12 flex flex-col lg:flex-row justify-between items-center">
                    <div className="overflow-hidden w-full lg:w-2/3 ">
                        <video
                            className="-mt-[1%] -mb-[1%]"
                            controls={false}
                            autoPlay={true}
                            muted={true}
                            src={blok.video.filename}
                            loop={true}
                        />
                    </div>
                    <div className="w-[90%] m-auto lg:px-4 xl:px-20 lg:w-1/3">
                        <div className="mt-10 lg:mt-0">
                            <H2
                                resetStyles={true}
                                styles="text-4xl font-bold mb-6"
                            >
                                {blok?.title}
                            </H2>
                            <Text styles="text-xl">{blok?.text}</Text>
                        </div>

                        <div className="mt-6">
                            <ButtonPrimary position="left">
                                {blok?.button_text}
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_5650_6261)">
                                        <path
                                            d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5650_6261">
                                            <rect
                                                width="14"
                                                height="14"
                                                fill="white"
                                                transform="translate(0.5 0.517578)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </FullWidth>
        </div>
    );
}
