import ContentWidth from '@/components/layouts/ContentWidth';
import HeroText from '@/components/sections/HeroText';
import Text from '@/components/typography/Text';
import H2 from '@/components/typography/H2';
import SmallWidth from '@/components/layouts/SmallWidth';

export default function TextBlock() {
    return (
        <section className="py-24 bg-primarySolid-50">
            <ContentWidth>
                <div className="col-span-12">
                    <H2>
                        {' '}
                        Investieren Sie in eine echte Schweizer
                        Erfolgsgeschichte
                    </H2>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                    </Text>
                    <br />
                    <blockquote className="">
                        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
                            "Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua."
                        </p>
                    </blockquote>
                    <br />
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </Text>
                    <br />
                    <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg
                                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5"
                                />
                            </svg>
                            <span>
                                <Text>Lorem ipsum</Text>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg
                                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5"
                                />
                            </svg>
                            <span>
                                <Text>Lorem ipsum</Text>
                            </span>
                        </li>
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg
                                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 12"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5.917 5.724 10.5 15 1.5"
                                />
                            </svg>
                            <span>
                                <Text>Lorem ipsum</Text>
                            </span>
                        </li>
                    </ul>
                    <br />
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </Text>
                </div>
            </ContentWidth>
        </section>
    );
}
