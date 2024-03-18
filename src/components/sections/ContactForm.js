import SmallWidth from '../layouts/SmallWidth';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import Text from '../typography/Text';
import ButtonPrimary from '../elements/ButtonPrimary';

export default function ContactForm(props) {
    return (
        <section className="pb-24 bg-white">
            <SmallWidth>
                <div className="col-span-12">
                    <form className="max-w-lg">
                        <H2>Kontaktformular</H2>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Betreff
                            </label>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="flex items-center me-4">
                                <input
                                    id="red-radio"
                                    type="radio"
                                    value=""
                                    name="colored-radio"
                                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
                                />
                                <label
                                    htmlFor="red-radio"
                                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                                >
                                    Her
                                </label>
                            </div>
                            <div className="flex items-center me-4">
                                <input
                                    id="green-radio"
                                    type="radio"
                                    value=""
                                    name="colored-radio"
                                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
                                />
                                <label
                                    htmlFor="green-radio"
                                    className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                                >
                                    Frau
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Vorname
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nachname
                                </label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Strasse
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nr.
                                </label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    PLZ
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Ort
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="email"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    name="floating_phone"
                                    id="floating_phone"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_phone"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="tel"
                                    name="floating_company"
                                    id="floating_company"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_company"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Telefon
                                </label>
                            </div>
                        </div>
                        <ButtonPrimary href="#" position="left">
                            Senden
                        </ButtonPrimary>
                    </form>
                </div>
            </SmallWidth>
        </section>
    );
}
