import ContentWidth from './ContentWidth';

export default function SmallWidth({ children }) {
    return (
        <ContentWidth>
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
                {children}
            </div>
        </ContentWidth>
    );
}
