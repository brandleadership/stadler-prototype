import { ArrowForward } from '../icons/ArrowForward';
import { motion } from 'framer-motion';

export default function ButtonPrimary(props) {
    const containerStyles = {
        display: 'flex',
    };

    const iconVariants = {
        rest: { x: 0 },
        hover: { x: 2 },
    };

    return (
        <div style={containerStyles}>
            <motion.a
                tabIndex="1"
                initial="rest"
                whileTap="hover"
                whileHover="hover"
                animate="rest"
                className="flex cursor-pointer items-center gap-2 rounded bg-stadlergradient px-5 py-2.5 text-sm font-medium leading-6 text-white"
                href={props.href}
                target={props?.target ?? '_self'}
            >
                <p>{props.buttonText}</p>
                <motion.span
                    variants={iconVariants}
                    transition={{ type: 'tween', ease: 'easeOut' }}
                >
                    <ArrowForward styles="fill-white w-3 h-3" />
                </motion.span>
            </motion.a>
        </div>
    );
}
