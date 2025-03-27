const H4 = ({ children, styles, resetStyles }) => {
    const defaultStyles = 'font-bold break-words text-base lg:text-xl';
    const H4Styles = resetStyles
        ? defaultStyles
        : `${defaultStyles} ${styles || ''}`;
    return <h4 className={H4Styles}>{children}</h4>;
};

export default H4;
