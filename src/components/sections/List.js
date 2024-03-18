import React from 'react';
import Button from '../elements/ButtonSecondary';
import H4 from '../typography/H4';
import ContentWidth from '../layouts/ContentWidth';

const List = ({ items, onItemClick, listTitle }) => {
    return (
        <div>
            <ContentWidth>
                <div className="max-w-full col-span-12">
                    <div className=" border-b-2 border-primary">
                        <H4 styles="mb-6">{listTitle}</H4>
                    </div>
                    <ul>
                        {items.map((item, index) => (
                            <div key={index}>
                                <li
                                    //   onClick={() => onItemClick?.(item.id)}
                                    className=" my-4 text-xl flex justify-between items-center"
                                >
                                    <p className="w-1/2">{item.text}</p>
                                    <p className="w-1/3">{item.iso}</p>
                                    <Button
                                        textColorClass="text-primary"
                                        borderColorClass="border-primary"
                                        styles="flex gap-2"
                                        href={item.href}
                                    >
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
                                        Download
                                    </Button>
                                </li>
                                <div className="border-b mb-6"></div>
                            </div>
                        ))}
                    </ul>
                </div>
            </ContentWidth>
        </div>
    );
};

export default List;
