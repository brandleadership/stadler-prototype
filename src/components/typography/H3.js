const H3 = ({ styles, children, resetStyles, onClick }) => {
    const defaultStyles = 'text-2xl mb-6 font-bold';
    const H3Styles = resetStyles
        ? defaultStyles
        : `${defaultStyles} ${styles || ''}`;
    return (
        <h3 lang="de" className={H3Styles} onClick={onClick}>
            {children}
        </h3>
    );
};

export default H3;
