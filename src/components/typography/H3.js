const H3 = ({ styles, children, resetStyles, onClick }) => {
    const defaultStyles = 'font-bold text-xl lg:text-2xl';
    const conditionalStyles = resetStyles ? '' : 'mb-4 lg:mb-6';
    const H3Styles =
        `${defaultStyles} ${conditionalStyles} ${styles || ''}`.trim();

    return (
        <h3 className={H3Styles} onClick={onClick}>
            {children}
        </h3>
    );
};

export default H3;
