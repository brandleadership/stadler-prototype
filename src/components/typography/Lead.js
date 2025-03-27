export default function Lead({ children }) {
    return (
        <p className="text-xl font-normal leading-8 text-black lg:text-3xl lg:leading-10">
            {children}
        </p>
    );
}
