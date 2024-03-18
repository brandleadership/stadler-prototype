const H4 = ({ children, textColor, styles, resetStyles }) => {
    const defaultStyles = 'text-xl font-bold break-words';
    const H4Styles = resetStyles
        ? defaultStyles
        : `${defaultStyles} text-${textColor || 'black'} ${styles || ''}`;
    return (
        <h4 lang="de" className={H4Styles}>
            {children}
        </h4>
    );
};

export default H4;
