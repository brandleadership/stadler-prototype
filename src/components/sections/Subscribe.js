import Button from '../elements/ButtonSecondary';
import H2 from '../typography/H2';

export default function Subscribe() {
    return (
        <section className="bg-white my-20 ">
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div className="gap-16 justify-between items-center p-6 text-white bg-primary lg:flex lg:gap-24 md:p-12">
                    <div className="w-full">
                        <H2 styles="mb-4">Sign up for our newsletter</H2>
                        <p className="font-light text-white sm:text-xl">
                            Stay up to date with the roadmap progress,
                            announcements and exclusive discounts feel free to
                            sign up with your email.
                        </p>
                    </div>
                    <div className="mt-6 w-full lg:mt-0">
                        <form action="#">
                            <div className="items-center mb-8 space-y-4 flex-col">
                                <div className="relative w-full">
                                    <label className=" mb-2 text-sm font-medium text-white">
                                        Vorname
                                    </label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                                    <input
                                        className="block p-3  w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter your Vorname"
                                        type="text"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <label className=" mb-2 text-sm font-medium text-white">
                                        Nachname
                                    </label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                                    <input
                                        className="block p-3  w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter your Nachname"
                                        type="text"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <label className=" mb-2 text-sm font-medium text-white">
                                        Firma
                                    </label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                                    <input
                                        className="block p-3  w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter your Firma"
                                        type="text"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <label className=" mb-2 text-sm font-medium text-white">
                                        Email address
                                    </label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                                    <input
                                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border border-white "
                                        placeholder="Enter your E-mail"
                                        type="email"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <input
                                        className="
        peer relative appearance-none shrink-0 w-6 h-6 border-2 border-white  bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-primary
        checked:bg-white checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400
      "
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="checkbox-1"
                                        className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                                    >
                                        I agree to the{' '}
                                        <a
                                            href="#"
                                            className="text-white hover:underline "
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
