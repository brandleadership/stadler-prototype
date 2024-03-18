export default function Text({ children, styles }) {
    return (
        <p lang="de" className={`font-normal ${styles ? styles : 'text-xl'}`}>
            {children}
        </p>
    );
}
