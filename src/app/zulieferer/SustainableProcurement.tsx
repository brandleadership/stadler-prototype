"use client";

import H2 from "@/components/typography/H2";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import ContentWidth from "@/components/layouts/ContentWidth";
import Text from "@/components/typography/Text";
import H3 from "@/components/typography/H3";
import H4 from "@/components/typography/H4";

interface SectonProps {
  title: string;
  showButton?: boolean;
}

const SustainableProcurement:React.FC<SectonProps> = ({title, showButton}) => {
  return (
    <section className="bg-white dark:bg-gray-900 pb-24">
      <ContentWidth>
        <div className="col-span-12">
          <div className="gap-8 items-center max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-28">
            <img 
              className="mb-4 object-cover object-left h-[700px] lg:mb-0"
              src="/SMILE-am-Zugersee.jpg"
              alt="feature image"
            />
            <div className=" sm:text-lg">
              {/* Nachhaltigkeit in der Lieferkette */}
              <H2>{title}</H2>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sit amet eros pulvinar, commodo augue ac, viverra
                justo. Vivamus a ultricies elit. Interdum et malesuada fames ac
                ante ipsum primis in faucibus. Phasellus a dapibus dolor.
              </Text>
              <div className="mt-4 py-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex">
                <div className="flex justify-center items-center pt-2 mr-4 w-6 h-6 shrink-0">
                    <img src="/icons/ohne-box/globe_FILL0_wght400_GRAD0_opsz24_blue.svg" />
                  </div>
                  <div>
                    <H4>Lorem ipsum</H4>
                    <Text>
                      Vestibulum sit amet libero ut tellus finibus lacinia. Sed
                      luctus libero eu fringilla finibus.
                    </Text>
                  </div>
                </div>
                <div className="flex py-8">
                  <div className="flex justify-center items-center pt-2 mr-4 w-6 h-6 shrink-0">
                    <img src="/icons/ohne-box/footprint_FILL0_wght400_GRAD0_opsz24_blue.svg" />
                  </div>
                  <div>
                    <H4>Lorem ipsum</H4>
                    <Text>
                      Vestibulum sit amet libero ut tellus finibus lacinia. Sed
                      luctus libero eu fringilla finibus.
                    </Text>
                  </div>
                </div>
              </div>
              {showButton && (
                <ButtonPrimary position="left" href="/nachhaltigkeit">
                  Mehr zu Nachhaltigkeit
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
              )}
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
export default SustainableProcurement;