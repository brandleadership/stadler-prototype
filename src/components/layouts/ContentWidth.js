export default function ContentWidth({ children }) {
    return (
        <div className="grid grid-cols-12 px-6 lg:px-20 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-20">
            {children}
        </div>
    );
}
