import ContentWidth from './ContentWidth';

export default function SuperSmallWidth({ children }) {
    return (
        <ContentWidth>
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                {children}
            </div>
        </ContentWidth>
    );
}
