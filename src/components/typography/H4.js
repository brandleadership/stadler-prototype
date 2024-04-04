const H4 = ({ children, textColor, styles, resetStyles }) => {
    const defaultStyles = 'font-bold break-words text-sm lg:text-xl ';
    const H4Styles = resetStyles
        ? defaultStyles
        : `${defaultStyles} ${styles || ''}`;
    return (
        <h4 lang="de" className={H4Styles}>
            {children}
        </h4>
    );
};

export default H4;
