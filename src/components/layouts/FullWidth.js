export default function FullWidth({ children }) {
    return (
        <div className="mx-auto grid w-full grid-cols-12 gap-6 2xl:max-w-screen-2xl">
            {children}
        </div>
    );
}
