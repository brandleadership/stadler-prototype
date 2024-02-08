"use client";

import Text from "../typography/Text";
import H2 from "../typography/H2";
import ButtonPrimary from "../elements/ButtonPrimary";
import ContentWidth from "../layouts/ContentWidth";

interface Tags {
  tag: string;
}

interface Medienmitteilungen {
  title: string;
  lead: string;
  image: string;
  date?: string;
  link: string;
  tags: Tags[];
}

interface MedienmitteilungenProps {
  medienmitteilungen: Medienmitteilungen[];
  medienmitteilungenTitle: string;
  showButton?: boolean;
  h2Styles?: string;
}

const MedienmitteilungenShortSection: React.FC<MedienmitteilungenProps> = ({
  medienmitteilungen,
  medienmitteilungenTitle,
  h2Styles,
  showButton = true,
}) => {
  return (
    <section className="py-5 lg:py-24">
      <ContentWidth>
        <div className="col-span-12">
          <div className="relative">
            <div className="lg:pl-20 2xl:pl-0 mb-10">
              <H2 styles={h2Styles}>{medienmitteilungenTitle}</H2>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {medienmitteilungen.map((item, index) => (
              <a
                href={item.link}
                className="group mb-6 transition-all"
                key={index}
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={item.image}
                    className="object-cover w-full h-full group-hover:scale-110 transition-all"
                    alt="Image 1"
                  />
                </div>
                <div className="mb-3 mt-4">
                  {item.tags.map((itemTag, index) => (
                    <span
                      key={index}
                      className="mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                    >
                      {itemTag.tag}
                    </span>
                  ))}
                </div>
                <Text styles="text-sm mb-1 text-gray-500">{item.date}</Text>
                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 group-hover:text-primary transition-all">
                  {item.title}
                </h2>
                <Text styles="texl-lg mb-3 text-gray-500">{item.lead}</Text>
              </a>
            ))}
          </div>
          {showButton && (
            <div className="mt-10 lg:pl-20 2xl:pl-0">
              <ButtonPrimary position="left" href="/medienmitteilungen">
                Alle Medienmitteilungen{" "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5650_6261)">
                    <path
                      d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5650_6261">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.5 0.517578)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </ButtonPrimary>
            </div>
          )}
        </div>
      </ContentWidth>
    </section>
  );
};

export default MedienmitteilungenShortSection;
