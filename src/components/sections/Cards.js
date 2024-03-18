import CardSimple from '../elements/CardSimple';

export default function Cards() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
                        From the blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <CardSimple></CardSimple>
                    <CardSimple></CardSimple>
                    <CardSimple></CardSimple>
                </div>
            </div>
        </div>
    );
}
