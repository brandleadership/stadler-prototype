export default function H1({ children, styles, resetStyles }) {
    const defaultStyles = '';
    const H1Styles = `text-black font-bold pt-3 mb-12 text-5xl ${
        resetStyles ? defaultStyles : ''
    } ${styles || ''}`;
    return (
        <h1 lang="de" className={H1Styles}>
            {children}
        </h1>
    );
}
