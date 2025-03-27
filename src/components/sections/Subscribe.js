import Button from '../elements/ButtonSecondary';
import H2 from '../typography/H2';

export default function Subscribe() {
    return (
        <section className="my-20 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
                <div className="items-center justify-between gap-16 bg-primary p-6 text-white md:p-12 lg:flex lg:gap-24">
                    <div className="w-full">
                        <H2>Sign up for our newsletter</H2>
                        <p className="font-light text-white sm:text-xl">
                            Stay up to date with the roadmap progress,
                            announcements and exclusive discounts feel free to
                            sign up with your email.
                        </p>
                    </div>
                    <div className="mt-6 w-full lg:mt-0">
                        <form action="#">
                            <div className="mb-8 flex-col items-center space-y-4">
                                <div className="relative w-full">
                                    <label className="mb-2 text-sm font-medium text-white">
                                        Vorname
                                    </label>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                                    <input
                                        tabIndex="1"
                                        className="focus:ring-primary-500 focus:border-primary-500 block w-full border border-greySolid-300 bg-greySolid-30 p-3 text-sm text-greySolid-800"
                                        placeholder="Enter your Vorname"
                                        type="text"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <label className="mb-2 text-sm font-medium text-white">
                                        Nachname
                                    </label>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                                    <input
                                        tabIndex="1"
                                        className="focus:ring-primary-500 focus:border-primary-500 block w-full border border-greySolid-300 bg-greySolid-30 p-3 text-sm text-greySolid-800"
                                        placeholder="Enter your Nachname"
                                        type="text"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <label className="mb-2 text-sm font-medium text-white">
                                        Firma
                                    </label>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                                    <input
                                        tabIndex="1"
                                        className="focus:ring-primary-500 focus:border-primary-500 block w-full border border-greySolid-300 bg-greySolid-30 p-3 text-sm text-greySolid-800"
                                        placeholder="Enter your Firma"
                                        type="text"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <label className="mb-2 text-sm font-medium text-white">
                                        Email address
                                    </label>
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                                    <input
                                        tabIndex="1"
                                        className="block w-full border border-white bg-greySolid-30 p-3 text-sm text-greySolid-800"
                                        placeholder="Enter your E-mail"
                                        type="email"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <input
                                        tabIndex="1"
                                        className="peer relative h-6 w-6 shrink-0 appearance-none border-2 border-primary bg-white checked:border-primary checked:bg-primary hover:border-primary hover:checked:bg-primary focus:border-primary focus:ring-2 focus:ring-primary focus:checked:bg-primary"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="checkbox-1"
                                        className="ms-2 text-sm font-medium text-white"
                                    >
                                        I agree to the{' '}
                                        <a
                                            tabIndex="1"
                                            href="#"
                                            className="text-white hover:underline"
                                        >
                                            terms and conditions
                                        </a>
                                        .
                                    </label>
                                </div>
                                <Button position="center" styles="mt-8">
                                    Subscribe
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
