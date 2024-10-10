import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';

const variantsLang = {
    open: { scale: 1, zIndex: 2 },
    closed: { scale: 0, zIndex: 1 },
};

const LanguageSwitcher = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentPathname = usePathname();
    const currentLocale = useCurrentLocale(i18nConfig);

    const handleChange = () => {
        //static implementation of language switcher
        const newLocale = currentLocale == 'en' ? 'de' : 'en';

        router.push(
            currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
        /* TODO: If folder level translations are added: use this logic */
        // redirect to the new locale path
        /* if (currentLocale === i18nConfig.defaultLocale) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        } */
        router.refresh();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen((prev) => !prev);
        }
    };

    return (
        <div ref={dropdownRef}>
            <button
                tabIndex="1"
                aria-expanded={isOpen}
                type="button"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                onKeyDown={handleKeyDown}
                className="inline-flex items-center rounded-lg py-2.5 text-base font-medium text-primarySolid-800 hover:bg-greySolid-30 hover:text-primary lg:px-5"
            >
                {currentLocale === 'en' ? 'English' : 'Deutsch'}
                <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            <motion.div
                animate={isOpen ? 'open' : 'closed'}
                variants={variantsLang}
                initial="closed"
                style={{ display: isOpen ? 'block' : 'none' }}
                className="w-48 list-none divide-y divide-greySolid-100 rounded bg-white text-base shadow hover:cursor-pointer  lg:absolute lg:top-14 lg:my-4"
                id="language-dropdown"
            >
                <ul className="py-1" role="menu">
                    <li role="none">
                        <a
                            tabIndex="1"
                            role="menuitem"
                            onClick={handleChange}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ')
                                    handleChange();
                            }}
                            className="block px-4 py-2 text-sm text-greySolid-600 hover:bg-greySolid-100 dark:text-greySolid-400 dark:hover:bg-greySolid-600 dark:hover:text-white"


                        >
                            <div className="inline-flex items-center">
                                {currentLocale === 'en' ? 'German' : 'Englisch'}
                            </div>
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default LanguageSwitcher;
