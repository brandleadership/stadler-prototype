"use client";
import ContentWidth from "../layouts/ContentWidth";
import Link from "next/link";
import IconNav from "../elements/IconNav";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const navigation = {
  topNav: [
    { name: "Medien", href: "/medien" },
    { name: "Zulieferer", href: "/zulieferer" },
    { name: "Kunden", href: "/kunden" },
    { name: "Downloadcenter", href: "/downloadcenter" },
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

type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: boolean;
  submenuItems?: SubNavItem[];
};

type SubNavItem = {
  title: string;
  href: string;
};

type NavItems = {
  topNav: NavItem[];
};

const navigationMain: NavItems = {
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

const NavBar = () => {
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

  // useEffect(() => {
  //   const handleOutsideClick = (event: any) => {
  //     if (isSubmenuOpen) {
  //       const isClickInside = event.target.closest("#navbar-solid-bg") !== null;
  //       if (!isClickInside) {
  //         closeSubmenu();
  //       }
  //     }
  //   };

  //   document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [isSubmenuOpen]);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      console.log("here", menuRef.current.contains(e.target));
    };

    document.addEventListener("mousedown", handler);
  });

  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 1024px)");
    setIsNarrowScreen(mediaWatcher.matches);

    function updateIsNarrowScreen(e: any) {
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

  return <></>;
};

export default NavBar;
