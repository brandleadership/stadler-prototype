import Link from 'next/link';

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
    const secondaryButtonStyles = `${backgroundColorClass} border ${textColorClass} ${borderColorClass} ${styles} flex text-sm px-5 py-3 items-center hover:primary-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded`;
    return (
        <div style={containerStyles}>
            <a className={secondaryButtonStyles} href={href ?? '#'}>
                {iconBefore && <span className="mr-2">{iconBefore}</span>}
                {children}
                {iconAfter && <span className="ml-2">{iconAfter}</span>}
            </a>
        </div>
    );
}
