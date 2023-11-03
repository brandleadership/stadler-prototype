import H3 from "@/components/typography/H3";

export default function Features() {
  return (
    <section className="bg-white py-24 px-0 sm:py-24 lg:px-20">
      <div className="max-w-full mx-auto bg-white">
        <div className="mb-10 tracking-tight dark:text-white ">
          <H3 titleH3="Für einen effizienten und modernen Bahnbetrieb"></H3>
        </div>
        <ul className="flex items-center justify-center flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row">
          <li>
            <img src="/spacer.jpg" alt="Image" />

            <a
              href="#"
              className="flex items-center gap-2 text-2xl font-bold mt-4"
            >
              Signalling
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                  fill="#005893"
                />
              </svg>
            </a>
          </li>
          <li>
            <img src="/spacer2.jpg" alt="Image" />

            <a
              href="#"
              className="flex items-center gap-2 text-2xl font-bold mt-4"
            >
              Service
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.72573e-07 11.6804L16.338 11.6804L10.9296 19.1222L12.7324 20.5176L20 10.5176L12.7324 0.517577L10.9296 1.91293L16.338 9.35479L9.75882e-07 9.35479L7.72573e-07 11.6804Z"
                  fill="#005893"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
