export default function Link({ children, styles, href }) {
    return (
        <>
            <a
                tabIndex="1"
                href={href ?? '/#'}
                className={`inline-flex items-center font-medium text-greySolid-800 underline underline-offset-4 hover:no-underline ${styles}`}
            >
                {children}
            </a>
        </>
    );
}
