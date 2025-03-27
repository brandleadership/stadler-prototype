import { motion } from 'framer-motion';

export default function Button({
    backgroundColorClass,
    textColorClass,
    borderColorClass,
    href,
    iconBefore,
    styles,
    iconAfter,
    children,
    position,
}) {
    const containerStyles = {
        display: 'flex',
        justifyContent:
            position === 'left'
                ? 'flex-start'
                : position === 'center'
                  ? 'center'
                  : 'flex-end',
        alignItems: 'center',
    };

    const iconVariants = {
        rest: { x: 0 },
        hover: { x: 2 },
    };

    const secondaryButtonStyles = `${backgroundColorClass} border ${textColorClass} ${borderColorClass} ${styles} flex text-sm px-5 py-3 items-center hover:primary-800 focus:outline-none focus:ring rounded`;
    return (
        <div style={containerStyles}>
            <motion.a
                tabIndex="1"
                className={secondaryButtonStyles}
                href={href ?? '#'}
                initial="rest"
                whileTap="hover"
                whileHover="hover"
                animate="rest"
            >
                {iconBefore && (
                    <motion.span variants={iconVariants} className="mr-2">
                        {iconBefore}
                    </motion.span>
                )}
                {children}
                {iconAfter && (
                    <motion.span variants={iconVariants} className="ml-2">
                        {iconAfter}
                    </motion.span>
                )}
            </motion.a>
        </div>
    );
}
