'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import { AnimatePresence, motion } from 'framer-motion';
import ModalSearch from './ModalSearch';
import { SearchIcon } from '../icons/SearchIcon';
import TopNav from './TopNav';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Logo from '../elements/Logo';
import Submenu from '../elements/Submenu';

const variants = {
    open: { opacity: 1, height: '240px' },
    closed: {
        opacity: 'var(--responsive-opacity)',
        height: 'var(--responsive-height)',
    },
};

const HeaderNew = ({ blok }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const buttonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const tabs = ['company', 'solutions'];
    const [activeTab, setActiveTab] = useState(null);
    const canToggleRef = useRef(true);

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOutsideClick = useCallback(
        (event) => {
            if (activeTab !== null && !event.target.closest('ul')) {
                setActiveTab(null);

                canToggleRef.current = false;
                setTimeout(() => {
                    canToggleRef.current = true;
                }, 300);
            }
        },
        [activeTab]
    );

    const handleKeyPress = useCallback(
        (event) => {
            if (event.key === 'Enter' && activeTab !== null) {
                setActiveTab(null);
            } else if (event.key === 'Escape' && activeTab !== null) {
                setActiveTab(null);
            }
        },
        [activeTab]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleOutsideClick, handleKeyPress]);

    const handleTabClick = useCallback((item) => {
        if (!canToggleRef.current) return;

        setActiveTab((prevActiveTab) => {
            if (prevActiveTab === item) {
                return null;
            } else {
                return item;
            }
        });

        canToggleRef.current = false;
        setTimeout(() => {
            canToggleRef.current = true;
        }, 300);
    }, []);

    const handleKeyDown = (event, item) => {
        if (event.key === 'Enter') {
            handleTabClick(item);
        }
    };

    return (
        <motion.header
            className="py-4 lg:h-40"
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
        >
            <ContentWidth>
                <motion.div className="col-span-12 flex flex-col-reverse lg:flex-col">
                    <motion.div
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={variants}
                        className="[--responsive-height:0px] [--responsive-opacity:0%] lg:[--responsive-height:80px] lg:[--responsive-opacity:100%]"
                    >
                        <hr className="bg-grey h-1 lg:hidden" />
                        <TopNav blok={blok} />
                    </motion.div>
                    <div className="py-2 lg:flex lg:justify-between">
                        <div className="flex justify-between">
                            <Logo blok={blok} />
                            <motion.button
                                tabIndex="1"
                                className="lg:hidden"
                                onClick={() => setIsOpen((isOpen) => !isOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="#005893"
                                >
                                    <motion.path
                                        fill="#005893"
                                        strokeWidth="2"
                                        stroke="#005893"
                                        animate={isOpen ? 'open' : 'closed'}
                                        variants={{
                                            closed: { d: 'M 2 6 L 20 6' },
                                            open: { d: 'M 3 16.5 L 17 2.5' },
                                        }}
                                    />
                                    <motion.path
                                        fill="#005893"
                                        strokeWidth="2"
                                        stroke="#005893"
                                        animate={isOpen ? 'open' : 'closed'}
                                        d="M 2 11 L 20 11"
                                        variants={{
                                            closed: { opacity: 1 },
                                            open: { opacity: 0 },
                                        }}
                                        transition={{ duration: 0.1 }}
                                    />
                                    <motion.path
                                        fill="#005893"
                                        strokeWidth="2"
                                        stroke="#005893"
                                        animate={isOpen ? 'open' : 'closed'}
                                        variants={{
                                            closed: {
                                                d: 'M 2 16 L 20 16',
                                            },
                                            open: { d: 'M 3 2.5 L 17 16.346' },
                                        }}
                                    />
                                </svg>
                            </motion.button>
                        </div>
                        <motion.nav
                            initial="closed"
                            animate={isOpen ? 'open' : 'closed'}
                            variants={{
                                open: {
                                    opacity: 1,
                                    minHeight: 'auto',
                                    height: 'auto',
                                    paddingTop: 10,
                                },
                                closed: {
                                    opacity: 'var(--responsive-opacity)',
                                    minHeight: 'var(--responsive-min-height)',
                                    height: 'var(--responsive-height)',
                                    paddingTop: 0,
                                },
                            }}
                            className="flex flex-col justify-start font-semibold text-primarySolid-800 [--responsive-height:0px] [--responsive-opacity:0%] [--responsive-min-height:0px] lg:mt-0 lg:flex-row lg:space-y-0 lg:[--responsive-height:80px] lg:[--responsive-opacity:100%] lg:[--responsive-min-height:80px]"
                        >
                            <ul className="flex flex-col lg:flex-row">
                                {tabs.map((item) => (
                                    <li key={item}>
                                        <div
                                            tabIndex="1"
                                            onClick={() => handleTabClick(item)}
                                            onKeyDown={(e) =>
                                                handleKeyDown(e, item)
                                            }
                                            className="py-2 hover:cursor-pointer lg:px-2 lg:py-0"
                                        >
                                            {item === 'company'
                                                ? blok.main_link_1_text
                                                : blok.main_link_2_text}
                                        </div>
                                        <AnimatePresence mode="wait">
                                            {activeTab === item && (
                                                <motion.div key={item}>
                                                    {item === 'company' ? (
                                                        <Submenu
                                                            mainSubmenuText={
                                                                blok.main_submenu_1_text
                                                            }
                                                            mainLinkUrl={
                                                                blok.main_link_1_link
                                                            }
                                                            mainLinkText={
                                                                blok.main_link_1_text
                                                            }
                                                            subLinkOne={
                                                                blok.main_1_sublink_1_link
                                                            }
                                                            subLinkTextOne={
                                                                blok.main_1_sublink_1_text
                                                            }
                                                            subLinkTwo={
                                                                blok.main_1_sublink_2_link
                                                            }
                                                            subLinkTextTwo={
                                                                blok.main_1_sublink_2_text
                                                            }
                                                        />
                                                    ) : (
                                                        <Submenu
                                                            mainSubmenuText={
                                                                blok.main_submenu_2_text
                                                            }
                                                            mainLinkUrl={
                                                                blok.main_link_2_link
                                                            }
                                                            mainLinkText={
                                                                blok.main_link_2_text
                                                            }
                                                            subLinkOne={
                                                                blok.main_2_link_1_link
                                                            }
                                                            subLinkTextOne={
                                                                blok.main_2_link_1_text
                                                            }
                                                            subLinkTwo={
                                                                blok.main_2_link_2_link
                                                            }
                                                            subLinkTextTwo={
                                                                blok.main_2_link_2_text
                                                            }
                                                            subLinkThree={
                                                                blok.main_2_link_3_link
                                                            }
                                                            subLinkTextThree={
                                                                blok.main_2_link_3_text
                                                            }
                                                        />
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                tabIndex="1"
                                className="py-2 lg:px-2 lg:py-0"
                                href={ButtonUrlRenderer(blok.main_link_3_link)}
                            >
                                {blok.main_link_3_text}
                            </Link>
                            <Link
                                tabIndex="1"
                                className="py-2 lg:px-2 lg:py-0"
                                href={ButtonUrlRenderer(blok.main_link_4_link)}
                            >
                                {blok.main_link_4_text}
                            </Link>
                            <div className="relative">
                                <button
                                    tabIndex="1"
                                    ref={buttonRef}
                                    onClick={toggleModal}
                                    type="button"
                                    className="z-100 my-4 h-5 w-5 py-2 lg:my-0 lg:ml-8 lg:py-0"
                                >
                                    <SearchIcon
                                        className="h-5 w-5 fill-primary"
                                        color="#005893"
                                    />
                                </button>
                                <ModalSearch
                                    isModalOpen={isModalOpen}
                                    closeModal={closeModal}
                                    buttonRef={buttonRef}
                                />
                            </div>
                        </motion.nav>
                    </div>
                </motion.div>
            </ContentWidth>
        </motion.header>
    );
};

export default HeaderNew;
