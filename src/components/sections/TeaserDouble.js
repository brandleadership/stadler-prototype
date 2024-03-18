import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';

export default function TeaserDouble() {
    return (
        <section className="bg-primaryTrans-50 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
                <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                    <div>
                        <div id="deviceTabContent" className="mt-8">
                            <div className="">
                                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                    <div>
                                        <H2>
                                            Geschäftsbedingungen in der
                                            Beschaffung
                                        </H2>
                                        <p className="mt-4 text-base font-normal text-gray-800 dark:text-gray-400 sm:text-xl">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt
                                            ut labore et dolore magna aliquyam
                                            erat, sed diam voluptua. At vero eos
                                            et accusam et justo duo dolores et
                                            ea rebum.
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-2.5">
                                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-3.5 h-3.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">
                                                    Lorem ipsum
                                                </span>
                                            </li>

                                            <li className="flex items-center gap-2.5">
                                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-3.5 h-3.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">
                                                    Dolor sitamet
                                                </span>
                                            </li>

                                            <li className="flex items-center gap-2.5">
                                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                                    <svg
                                                        aria-hidden="true"
                                                        className="w-3.5 h-3.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-base font-medium text-gray-900 dark:text-white">
                                                    Takimata sancta
                                                </span>
                                            </li>
                                        </ul>

                                        <h3 className="mt-6 text-xl font-normal text-gray-800 dark:text-gray-400">
                                            Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor.
                                        </h3>
                                    </div>

                                    <ButtonPrimary
                                        position="left"
                                        buttonText="Mehr dazu"
                                        href="/procurement"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <img
                            src="Referenzen_TSSSA_Bild-VR.jpg"
                            className="dark:hidden object-cover object-left h-[572px]"
                            alt=""
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-20 lg:gap-16 lg:grid-cols-2">
                    <div className="hidden lg:block">
                        <img
                            src="news-1.jpg"
                            className="dark:hidden object-cover object-right h-[572px]"
                            alt=""
                        />
                        <img
                            className="hidden object-cover w-full dark:block"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-2.png"
                            alt="Feature illustration"
                        />
                    </div>

                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <div className="mt-6">
                            <H2>Werden Sie Partner von Stadler</H2>
                            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                            </p>
                        </div>

                        <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg
                                            aria-hidden="true"
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">
                                        Lorem ipusm
                                    </span>
                                </li>

                                <li className="flex items-center gap-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg
                                            aria-hidden="true"
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">
                                        Dolor sit amet
                                    </span>
                                </li>

                                <li className="flex items-center gap-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg
                                            aria-hidden="true"
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">
                                        Stet clita
                                    </span>
                                </li>

                                <li className="flex items-center gap-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg
                                            aria-hidden="true"
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">
                                        Dolore magna
                                    </span>
                                </li>

                                <li className="flex items-center gap-2.5">
                                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                                        <svg
                                            aria-hidden="true"
                                            className="w-3.5 h-3.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-base font-medium text-gray-900 dark:text-white">
                                        Consetetur sadip
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <ButtonPrimary
                            position="left"
                            buttonText="Jetzt Partner werden"
                            href="/cooperation"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
