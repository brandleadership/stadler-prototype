import React from 'react';
import { motion } from 'framer-motion';

const IconNav = () => {
    return (
        <motion.button
            type="button"
            whileHover={{
                x: 2,
            }}
            whileTap={{ x: 2 }}
            transition={{
                type: 'tween',
                ease: 'easeOut',
            }}
        >
            <svg
                width="10"
                height="10"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_4995_6652)">
                    <path
                        d="M20 8.88889H11.1111V0H8.88889V8.88889H0V11.1111H8.88889V20H11.1111V11.1111H20V8.88889Z"
                        fill="#005893"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_4995_6652">
                        <rect width="20" height="20" fill="#005893" />
                    </clipPath>
                </defs>
            </svg>
        </motion.button>
    );
};

export default IconNav;
