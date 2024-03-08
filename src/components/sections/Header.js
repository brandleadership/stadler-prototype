"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import React, { useState, useEffect, useRef } from "react";
import IconNav from "../elements/IconNav";
import Link from "next/link";
import ContentWidth from "../layouts/ContentWidth";
import { motion } from "framer-motion";
const navigation = {
  topNav: [
    { name: "Medien", href: "/medien" },
    { name: "Zulieferer", href: "/zulieferer" },
    // { name: "Kunden", href: "/kunden" },
    { name: "Downloads", href: "/downloadcenter" },
  ],
};

const variants = {
  open: { opacity: 1, y: 0, height: "auto" },
  closed: { opacity: 0, y: 50, height: 0 },
};
const variantsSub = {
  open: { opacity: 1, y: 0, height: "100%" },
  closed: { opacity: 0, y: 50, height: 0 },
};



const navigationMain = {
  topNav: [
    { title: "Unternehmen", href: "/unternehmen", icon: false },
    {
      title: "Lösungen",
      href: "/solutions",
      icon: <IconNav></IconNav>,
      submenu: true,
      submenuItems: [
        {
          title: "Schienenfahrzeuge",
          href: "/solutions/schienenfahrzeuge",
        },
        { title: "Signalling", href: "/solutions/signalling" },
        { title: "Service", href: "/solutions/service" },
      ],
    },
    { title: "Karriere", href: "/career", icon: false },
    {
      title: "Investor Relations",
      href: "/investors",
      icon: false,
    },
  ],
};

const Header = ({ blok }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const toggleMainMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMainMenu = () => {
    setIsOpen(false);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  let menuRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 1024px)");
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    if (mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener("change", updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
      };
    } else {
      mediaWatcher.addListener(updateIsNarrowScreen);
      return function cleanup() {
        mediaWatcher.removeListener(updateIsNarrowScreen);
      };
    }
  });

  return (
    <header
      {...storyblokEditable(blok)}
      className={`bg-white z-20 ${isMobileNavOpen ? "mobile-nav-open" : ""} ${
        isMobileNavOpen && isNarrowScreen ? "fixed w-screen h-screen" : ""
      }`}
    >
      <ContentWidth>
        <div className="lg:hidden col-span-12">
          <div className="flex justify-between items-center col-span-12 w-full py-5">
            <Link href="/">
              <img src="/logo.svg" className="h-4 sm:h-6" alt="Stadler Logo" />
            </Link>

            <div className="lg:hidden">
              {isMobileNavOpen ? (
                <img
                  src="/icons/times.svg"
                  alt="close icon"
                  onClick={toggleMobileNav}
                  className="cursor-pointer"
                />
              ) : (
                <img
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
          isMobileNavOpen && isNarrowScreen ? "visible" : "hidden"
        } lg:visible flex lg:flex flex-col-reverse w-full lg:flex-col`}
      >
        <>
          <section className="bg-white">
            <ContentWidth>
              <div className="col-span-12 px-4 lg:px-0">
                <div className="pt-5 flex flex-col sm:justify-between lg:justify-end lg:flex-row lg:flex lg:items-center gap-8 lg:gap-4">
                  <ul
                    role="list"
                    className=" flex lg:flex flex-col lg:flex-row justify-between lg:justify-end gap-6"
                  >
                    {navigation.topNav.map((item) => (
                      <li key={item.name}>
                        <Link
                          onClick={() => {
                            closeSubmenu();
                            closeMainMenu();
                            closeMobileNav();
                          }}
                          href={item.href}
                          className="text-base leading-6 font-medium text-primarySolid-800 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-b lg:border-none"></div>
                  <ul className="flex flex-col lg:flex lg:flex-row lg:items-center gap-8 mb-10 lg:mb-0 lg:gap-4">
                    <li className="flex flex-row lg:flex lg:items-center  gap-2">
                      <img src="/icons/country-name.svg" alt="Language Icon" />
                      <a
                        className="text-base leading-6  font-medium text-primarySolid-800 hover:text-primary"
                        href="#"
                      >
                        DE
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </ContentWidth>
          </section>
          <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 relative">
            <ContentWidth>
              <div className="bg-white col-span-12 w-full flex flex-col items-start justify-center lg:justify-between lg:flex-row py-5 px-4 lg:px-0 lg:min-h-fit lg:w-auto left-0 top-[10%] absolut lg:static">
                <div className="hidden lg:block">
                  <Link
                    href="/"
                    className="flex justify-start items-start lg:justify-center lg:items-center mb-10 lg:mb-0 "
                  >
                    <img
                      src="/logo.svg"
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
                  <ul className="mb-10 lg:mb-0 flex flex-col gap-8 lg:gap-0 items-start justify-center  lg:flex-row font-medium mt-4 rounded-lg bg-white  lg:items-center lg:mt-0 md:border-0 lg:bg-transparent">
                    {navigationMain.topNav.map((item) => (
                      <li key={item.title} className="lg:px-3 xl:px-5">
                        {item.href == "/solutions" ? (
                          <motion.div
                            onClick={() => {
                              toggleSubmenu();
                              toggleMainMenu();
                            }}
                            className="flex gap-2 justify-center items-center cursor-pointer pr-4 text-primarySolid-800 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                          >
                            {item.title}
                            <svg
                              className="lg:hidden"
                              width="10"
                              height="10"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                                fill="#005893"
                              />
                            </svg>
                            <motion.span></motion.span>
                          </motion.div>
                        ) : (
                          <Link
                            onClick={() => {
                              closeMobileNav();
                            }}
                            href={item.href}
                            className="flex gap-2 justify-center items-start pr-4 text-primarySolid-800 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                          >
                            {item.title}
                          </Link>
                        )}

                        {item.submenu && item.submenuItems && (
                          <motion.div
                            initial={"closed"}
                            animate={isOpen ? "open" : "closed"}
                            variants={isNarrowScreen ? variantsSub : variants}
                            style={{
                              padding: "10px",
                              zIndex: "99",
                              width: "100%",
                              left: "0",
                              top: "63px",
                              overflow: "hidden",
                            }}
                            className="fixed lg:absolute bg-white h-screen lg:h-auto lg:bg-greySolid-50"
                          >
                            <ContentWidth>
                              <div className="w-full grid col-span-12 lg:col-span-6 lg:col-start-5 grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:p-8 px-4 lg:px-0 mt-6 lg:mt-0">
                                <div className="border-b lg:border-none lg:hidden">
                                  <Link
                                    href="#"
                                    onClick={() => {
                                      closeSubmenu();
                                      toggleMainMenu();
                                    }}
                                    className="text-primarySolid-800 lg:text-primarySolid-600 mb-6 ml-[-20px] flex flex-row gap-2 items-center justify-start content-center whitespace-nowrap"
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
                                    Main Menu
                                  </Link>
                                </div>
                                <Link
                                  href="/solutions"
                                  className="text-primarySolid-800 lg:bg-primaryTrans-100 lg:text-primary px-0 py-4 pt-8 lg:px-8 lg:py-24 lg:text-center"
                                  onClick={() => {
                                    closeMobileNav();
                                    setIsOpen((isOpen) => !isOpen);
                                  }}
                                >
                                  <p className="lg:text-lg">Übersicht</p>
                                  <p className="hidden lg:block lg:font-semibold lg:text-xl">
                                    Lösungen
                                  </p>
                                </Link>
                                <div className="grid content-center">
                                  {item.submenuItems.map((subItem) => (
                                    <motion.div
                                      key={subItem.title}
                                      className=""
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="flex justify-between px-0 py-4 text-base text-primarySolid-800 lg:text-primarySolid-600 hover:text-primary"
                                        onClick={() => {
                                          closeMobileNav();
                                          setIsOpen((isOpen) => !isOpen);
                                        }}
                                      >
                                        <p>{subItem.title}</p>
                                        <span className="hidden lg:block">
                                          <img src="/icons/chevron-right-light.svg" />
                                        </span>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </ContentWidth>
                          </motion.div>
                        )}
                      </li>
                    ))}

                    <li className="hidden lg:block">
                      <div className="block pt-6 pl-0 md:pl-12 md:pt-0">
                        <img
                          className="w-5 h-5"
                          src="/ohne-box/search_FILL0_wght400_GRAD0_opsz24_blue.svg"
                          alt=""
                        />
                      </div>
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
