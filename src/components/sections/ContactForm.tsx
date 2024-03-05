import SmallWidth from "../layouts/SmallWidth";
import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";
import H4 from "../typography/H4";
import Text from "../typography/Text";
import ButtonPrimary from "../elements/ButtonPrimary";

export default function ContactForm(props?: any) {
  return (
    <section className="pb-5 lg:pb-24 bg-white">
      <SmallWidth>
        <div className="col-span-12">
          <form className="">
            <H2>Kontaktformular</H2>
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="betreff"
                className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Betreff *
              </label>
              <input
                type="text"
                name="betreff"
                id="betreff"
                className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder=""
                required
              />
            </div>
            <div className="flex flex-wrap mb-5">
              <div className="flex items-center me-4">
                <input
                  id="red-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className=" w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
                />
                <label
                  htmlFor="red-radio"
                  className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                >
                  Herr
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="green-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  className=" w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
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
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Vorname *
                </label>
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nachname *
                </label>
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Strasse *
                </label>
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nr. *
                </label>
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  PLZ *
                </label>
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Ort *
                </label>
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email *
                </label>
                <input
                  type="email"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="floating_company"
                  id="floating_company"
                  className="block p-3  w-full text-sm text-gray-900 bg-white  border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="peer-focus:font-medium  mb-2 text-sm font-medium text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Bemerkung *
              </label>
              <textarea
                rows={6}
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder=""
              ></textarea>
            </div>
            <div className="flex items-start mb-8">
              <input
                className="
         relative shrink-0 w-6 h-6 border-2 border-primary  bg-whitefocus:ring-primary
        checked:bg-primary checked:border-primary"
                type="checkbox"
              />
              <label
                htmlFor="checkbox-1"
                className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
              >
                Mit dem Absenden dieses Formulars erklären Sie sich damit
                einverstanden, dass Stadler Ihre personenbezogenen Daten für den
                internen Gebrauch in Übereinstimmung mit unserer{" "}
                <a
                  href="#"
                  className="text-gray-500 hover:underline cursor-pointer break-words"
                >
                  Datenschutzerklärung
                </a>{" "}
                und mit sicheren technischen Mitteln sammelt und verarbeitet.
              </label>
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
