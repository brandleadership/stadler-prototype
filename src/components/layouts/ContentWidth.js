export default function ContentWidth({ children }) {
    return (
        <div className="px-6 lg:px-20 2xl:px-20 grid grid-cols-12 gap-6 2xl:max-w-screen-2xl 2xl:mx-auto">
            {children}
        </div>
    );
}
