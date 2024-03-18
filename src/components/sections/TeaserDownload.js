'use client';

import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import Lead from '../typography/Lead';
import ButtonPrimary from '../elements/ButtonPrimary';
import Button from '../elements/ButtonSecondary';
import H4 from '../typography/H4';

const TeaserDownload = ({
    title,
    leadText,
    buttonLink,
    buttonText,
    showList = true,
    listData,
    showButton = true,
}) => {
    return (
        <section className="bg-white py-12">
            <ContentWidth>
                <div className="col-span-12 max-w-full flex flex-col justify-left">
                    <H2>{title}</H2>
                    <Lead>{leadText}</Lead>
                    {showList && (
                        <ul className="mb-8" key={leadText}>
                            {listData.map((item, index) => (
                                <>
                                    <li
                                        className="mb-6 text-xl flex-col md:flex-row flex justify-start md:justify-between items-center"
                                        key={index}
                                    >
                                        <p className="w-full md:w-auto mr-0 md:mr-10">
                                            {item.text}
                                        </p>
                                        <div className="w-full md:w-auto min-w-[14rem]">
                                            <Button
                                                textColorClass="text-primary"
                                                borderColorClass="border-primary"
                                                styles="flex gap-2"
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
                                                Download
                                            </Button>
                                        </div>
                                    </li>
                                    <div className="border-b mb-6"></div>
                                </>
                            ))}
                        </ul>
                    )}
                    {showButton && (
                        <ButtonPrimary position="left" href={buttonLink}>
                            {buttonText}
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
                    )}
                </div>
            </ContentWidth>
        </section>
    );
};
export default TeaserDownload;
