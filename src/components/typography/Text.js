export default function Text({ children, styles }) {
    return (
        <p
            className={`my-2 text-base font-normal lg:my-3 lg:text-xl ${styles ? styles : ' '}`}
        >
            {children}
        </p>
    );
}
