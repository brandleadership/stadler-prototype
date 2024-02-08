import Button from "../elements/ButtonPrimary";
import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";

export default function Subscribe() {
  return (
    <section className="bg-white py-5 lg:py-24 ">
      <ContentWidth>
        <div className="col-span-12">
          <H2 styles="mb-4">Sign up for our newsletter</H2>
          <p className="font-light sm:text-xl">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
        </div>
        <div className="col-span-12 mt-8 w-full">
          <form action="#">
            <div className="items-center space-y-4 flex-col">
              <div className="grid grid-cols-1 gap-8 lg:gap-4 lg:grid-cols-2 items-center">
                <div className="relative w-full">
                  <label className=" mb-2 text-sm font-medium">Vorname</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                  <input
                    className="block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your Vorname"
                    type="text"
                  />
                </div>
                <div className="relative w-full">
                  <label className=" mb-2 text-sm font-medium">Nachname</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                  <input
                    className="block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your Nachname"
                    type="text"
                  />
                </div>
              </div>
              <div className="relative w-full">
                <label className=" mb-2 text-sm font-medium">Firma</label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                  className="block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your Firma"
                  type="text"
                />
              </div>
              <div className="relative w-full">
                <label className=" mb-2 text-sm font-medium">
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                <input
                  className="block p-3  w-full text-sm text-gray-900 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your E-mail"
                  type="email"
                />
              </div>
              <div className="flex items-center">
                <input
                  className="
        peer relative appearance-none shrink-0 w-6 h-6 border-2 border-white  bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-primary
        checked:bg-white checked:border-white
        disabled:border-steel-400 disabled:bg-steel-400
      "
                  type="checkbox"
                />
                <label
                  htmlFor="checkbox-1"
                  className="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-white hover:underline cursor-pointer"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <Button position="center">Subscribe</Button>
            </div>
          </form>
        </div>
      </ContentWidth>
    </section>
  );
}
