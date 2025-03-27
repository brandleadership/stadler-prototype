'use client';

import React, { useState, useEffect, useRef } from 'react';
import IconNav from '../elements/IconNav';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import { motion } from 'framer-motion';
import ModalSearch from './ModalSearch';
import { SearchIcon } from '../icons/SearchIcon';
import TopNav from './TopNav';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const submenuVariants = {
    open: {
        opacity: 1,
        y: 0,
        height: 'auto',
        overflow: 'visible',
        cursor: 'pointer',
    },
    closed: {
        opacity: 0,
        y: 50,
        height: 0,
        overflow: 'hidden',
        transitionEnd: { display: 'none' },
    },
};

const Header = ({ blok }) => {
    const navigationMain = {
        topNav: [
            {
                title: blok.main_link_1_text,
                href: blok.main_link_1_link,
                icon: <IconNav></IconNav>,
                submenu: true,
                id: 2,
                submenuItems: [
                    {
                        title: blok.main_1_sublink_1_text,
                        href: blok.main_1_sublink_1_link,
                    },
                    {
                        title: blok.main_1_sublink_2_text,
                        href: blok.main_1_sublink_2_link,
                    },
                ],
            },
            {
                title: blok.main_2_link_1_text,
                href: blok.main_2_link_1_link,
                icon: <IconNav></IconNav>,
                submenu: true,
                id: 1,
                submenuItems: [
                    {
                        title: blok.main_2_link_2_text,
                        href: blok.main_2_link_2_link,
                    },
                    {
                        title: blok.main_2_link_3_text,
                        href: blok.main_2_link_3_link,
                    },
                    {
                        title: blok.main_link_2_text,
                        href: blok.main_link_2_link,
                    },
                ],
            },
            {
                title: blok.main_link_3_text,
                href: blok.main_link_3_link,
                icon: false,
            },
            {
                title: blok.main_link_4_text,
                href: blok.main_link_4_link,
                icon: false,
            },
        ],
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const menuRef = useRef(null);
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    console.log(isOpen);

    const toggleSubmenu = (submenuId) => {
        if (openSubmenu === submenuId) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(submenuId);
            setIsOpen(true);
        }
    };

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prev) => !prev);
        setOpenSubmenu(null);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
        setOpenSubmenu(null);
    };

    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsOpen(false);
                setOpenSubmenu(null);
                setIsMobileNavOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    useEffect(() => {
        const mediaWatcher = window.matchMedia('(max-width: 1024px)');
        setIsNarrowScreen(mediaWatcher.matches);

        const updateIsNarrowScreen = (e) => {
            setIsNarrowScreen(e.matches);
        };

        if (mediaWatcher.addEventListener) {
            mediaWatcher.addEventListener('change', updateIsNarrowScreen);
            return () => {
                mediaWatcher.removeEventListener(
                    'change',
                    updateIsNarrowScreen
                );
            };
        } else {
            mediaWatcher.addListener(updateIsNarrowScreen);
            return () => {
                mediaWatcher.removeListener(updateIsNarrowScreen);
            };
        }
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderSubmenuContent = (submenuId, title, href) => {
        const onClickHandler = () => {
            closeMobileNav();
            setIsOpen(false);
        };
        switch (submenuId) {
            case 1:
            case 2:
                return (
                    <Link
                        tabIndex="1"
                        href={ButtonUrlRenderer(href)}
                        className="cursor-pointer px-0 py-4 pt-8 text-primarySolid-800 lg:bg-primaryTrans-100 lg:px-8 lg:py-24 lg:text-center lg:text-primary"
                        onClick={onClickHandler}
                    >
                        <p className="hidden lg:block lg:text-xl lg:font-semibold">
                            {blok.main_submenu_2_text}
                        </p>
                        <p>{title}</p>
                    </Link>
                );
            default:
                return null;
        }
    };

    return (
        <header
            className={`z-10 bg-white ${isMobileNavOpen ? 'mobile-nav-open' : ''} ${
                isMobileNavOpen && isNarrowScreen
                    ? 'fixed h-screen w-screen'
                    : ''
            }`}
        >
            <ContentWidth>
                <div className="col-span-12 lg:hidden">
                    <div className="col-span-12 flex w-full items-center justify-between py-5">
                        <Link
                            tabIndex="1"
                            href={ButtonUrlRenderer(blok.LinkLogo)}
                        >
                            <img
                                src={blok.Logo.filename}
                                className="h-4 sm:h-6"
                                alt={blok.Logo?.filename?.alt ?? 'Stadler Logo'}
                            />
                        </Link>

                        <div className="lg:hidden">
                            {isMobileNavOpen ? (
                                <img
                                    tabIndex="1"
                                    src="/icons/times.svg"
                                    alt="close icon"
                                    onClick={toggleMobileNav}
                                    className="cursor-pointer"
                                />
                            ) : (
                                <img
                                    tabIndex="1"
                                    src="/icons/equal.svg"
                                    alt="burger menu icon"
                                    onClick={toggleMobileNav}
                                    className="cursor-pointer"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </ContentWidth>
            <div
                className={`${
                    isMobileNavOpen && isNarrowScreen ? 'visible' : 'hidden'
                } flex w-full flex-col-reverse lg:visible lg:flex lg:flex-col`}
            >
                <>
                    <TopNav blok={blok} />
                    <nav className="relative border-greySolid-100 bg-white">
                        <ContentWidth>
                            <div className="absolute left-0 top-[10%] col-span-12 flex w-full flex-col items-start justify-center bg-white px-4 py-5 lg:static lg:min-h-fit lg:w-auto lg:flex-row lg:justify-between lg:px-0">
                                <div className="hidden lg:block">
                                    <Link
                                        tabIndex="1"
                                        href={ButtonUrlRenderer(blok.LinkLogo)}
                                        className="mb-10 flex items-start justify-start lg:mb-0 lg:items-center lg:justify-center"
                                    >
                                        <img
                                            src={blok.Logo.filename}
                                            className="h-4 sm:h-6"
                                            alt="Stadler Logo"
                                        />
                                    </Link>
                                </div>
                                <div
                                    ref={menuRef}
                                    className="w-full lg:w-auto"
                                    id="navbar-solid-bg"
                                >
                                    <ul className="mb-10 mt-4 flex flex-col items-start justify-center gap-8 rounded-lg bg-white font-medium md:border-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0 lg:bg-transparent">
                                        {navigationMain.topNav.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex cursor-pointer items-start justify-center gap-2 rounded pr-4 font-semibold text-primarySolid-800 hover:bg-greySolid-100 md:border-0 md:p-0 md:hover:bg-transparent lg:px-3 xl:px-5"
                                                >
                                                    {item.submenu ? (
                                                        <motion.div
                                                            tabIndex="1"
                                                            className="flex items-start justify-center gap-2 rounded pr-4 font-semibold text-primarySolid-800 hover:bg-greySolid-100 md:border-0 md:p-0 md:hover:bg-transparent"
                                                            onClick={() =>
                                                                toggleSubmenu(
                                                                    item.id
                                                                )
                                                            }
                                                            onKeyPress={(e) => {
                                                                if (
                                                                    e.key ===
                                                                    'Enter'
                                                                ) {
                                                                    toggleSubmenu(
                                                                        item.id
                                                                    );
                                                                }
                                                            }}
                                                            variants={
                                                                submenuVariants
                                                            }
                                                            animate={
                                                                openSubmenu ===
                                                                item.id
                                                                    ? 'open'
                                                                    : ''
                                                            }
                                                            initial="open"
                                                            role="button"
                                                            aria-expanded={
                                                                openSubmenu ===
                                                                item.id
                                                            }
                                                            aria-haspopup="true"
                                                        >
                                                            {item.title}
                                                        </motion.div>
                                                    ) : (
                                                        <Link
                                                            tabIndex="1"
                                                            className="flex items-start justify-center gap-2 rounded pr-4 font-semibold text-primarySolid-800 hover:bg-greySolid-100 md:border-0 md:p-0 md:hover:bg-transparent"
                                                            href={ButtonUrlRenderer(
                                                                item.href
                                                            )}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    )}
                                                    {item.submenu &&
                                                        openSubmenu ===
                                                            item.id && (
                                                            <motion.div
                                                                variants={
                                                                    submenuVariants
                                                                }
                                                                initial="closed"
                                                                animate="open"
                                                                style={{
                                                                    padding:
                                                                        '10px',
                                                                    zIndex: '30',
                                                                    width: '100%',
                                                                    left: '0',
                                                                    top: '63px',
                                                                    overflow:
                                                                        'hidden',
                                                                }}
                                                                className="fixed h-screen bg-white lg:absolute lg:h-auto lg:bg-greySolid-50"
                                                            >
                                                                <ContentWidth>
                                                                    <div className="col-span-12 mt-6 grid w-full grid-cols-1 px-4 lg:col-span-6 lg:col-start-5 lg:mt-0 lg:grid-cols-2 lg:gap-6 lg:p-8 lg:px-0">
                                                                        <div className="border-b lg:hidden lg:border-none">
                                                                            <Link
                                                                                tabIndex="1"
                                                                                href="#"
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    e.preventDefault();
                                                                                    setIsOpen(
                                                                                        true
                                                                                    );
                                                                                    setOpenSubmenu(
                                                                                        null
                                                                                    );
                                                                                    setIsMobileNavOpen(
                                                                                        true
                                                                                    );
                                                                                }}
                                                                                className="mb-6 ml-[-20px] flex flex-row content-center items-center justify-start gap-2 whitespace-nowrap text-primarySolid-800 lg:text-primarySolid-600"
                                                                            >
                                                                                <svg
                                                                                    width="10"
                                                                                    height="10"
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M14.8586 20L4 10L14.8586 0L16.4099 1.68288L7.38294 10L16.4099 18.3171L14.8586 20Z"
                                                                                        fill="#005893"
                                                                                    />
                                                                                </svg>
                                                                                Main
                                                                                Menu
                                                                            </Link>
                                                                        </div>
                                                                        {openSubmenu ===
                                                                            item.id &&
                                                                            renderSubmenuContent(
                                                                                item.id,
                                                                                item.title,
                                                                                item.href
                                                                            )}
                                                                        <div className="grid content-center">
                                                                            {item.submenuItems.map(
                                                                                (
                                                                                    subItem
                                                                                ) => (
                                                                                    <motion.div
                                                                                        key={
                                                                                            subItem.title
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            tabIndex="1"
                                                                                            href={ButtonUrlRenderer(
                                                                                                subItem.href
                                                                                            )}
                                                                                            className="flex justify-between px-0 py-4 text-base text-primarySolid-800 hover:text-primary lg:text-primarySolid-600"
                                                                                            onClick={() => {
                                                                                                closeMobileNav();
                                                                                                setIsOpen(
                                                                                                    (
                                                                                                        isOpen
                                                                                                    ) =>
                                                                                                        !isOpen
                                                                                                );
                                                                                            }}
                                                                                        >
                                                                                            <p>
                                                                                                {
                                                                                                    subItem.title
                                                                                                }
                                                                                            </p>
                                                                                            <span className="hidden lg:block">
                                                                                                <img
                                                                                                    alt="icon chevron right"
                                                                                                    src="/icons/chevron-right-light.svg"
                                                                                                />
                                                                                            </span>
                                                                                        </Link>
                                                                                    </motion.div>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </ContentWidth>
                                                            </motion.div>
                                                        )}
                                                </li>
                                            )
                                        )}
                                        <li className="z-20 lg:relative lg:block">
                                            <div className="relative block pl-0 pt-6 md:pl-12 md:pt-0">
                                                <button
                                                    tabIndex="1"
                                                    aria-label="Open Modal"
                                                    onClick={openModal}
                                                    data-modal-target="default-modal"
                                                    data-modal-toggle="default-modal"
                                                    type="button"
                                                    className="h-5 w-5"
                                                >
                                                    <SearchIcon
                                                        className="h-5 w-5 fill-primary"
                                                        color="#005893"
                                                    />
                                                </button>
                                            </div>
                                            <ModalSearch
                                                isModalOpen={isModalOpen}
                                                closeModal={closeModal}
                                            />
                                        </li>
                                    </ul>
                                    <div className="border-b lg:border-none"></div>
                                </div>
                            </div>
                        </ContentWidth>
                    </nav>
                </>
            </div>
        </header>
    );
};

export default Header;
