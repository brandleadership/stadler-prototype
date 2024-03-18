'use client';

import Button from '../elements/ButtonSecondary';

export default function Stepper() {
    return (
        <ol className="items-top sm:flex bg-white border-primarySolid-50">
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900  dark:ring-gray-900 shrink-0">
                        <svg
                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-10">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Step 1: Application
                    </h3>

                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get started with dozens of web components and
                        interactive elements.
                    </p>
                    <a
                        href="#"
                        className="sm:mt-2 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        Apply now{' '}
                        <svg
                            className="w-3 h-3 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    {/* Button isn't quite working yet: */}
                    {/* <Button position="left" iconAfter>
            Apply now
          </Button> */}
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                        <svg
                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-10">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Step 2: Personal talk
                    </h3>

                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get started with dozens of web components and
                        interactive elements.
                    </p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                        <svg
                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-10">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Step 3: Job Offering
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get started with dozens of web components and
                        interactive elements.
                    </p>
                </div>
            </li>
        </ol>
    );
}
