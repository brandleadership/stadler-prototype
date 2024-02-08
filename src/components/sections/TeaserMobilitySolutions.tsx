import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";
import ContentWidth from "../layouts/ContentWidth";
import Button from "../elements/ButtonSecondary";

export default function TeaserMobilitySolutions(props?: any) {
  return (
    <section className="pb-5 pt-5 lg:pt-24 lg:pb-12 dark:bg-gray-900 ">
      <ContentWidth>
        <div className="col-span-12 max-w-4xl lg:mx-auto">
          <H2 styles="text-center leading-tight text-white break-words">
            Die Mobilitätslösungen von Stadler stehen für hohe Effizienz und
            Zuverlässigkeit
          </H2>
          <Text styles="my-8 text-xl text-center text-white break-words">
            Stadler entwickelt die besten Schienenfahrzeuge der Welt. Diese
            werden mit massgeschneiderten Lösungen im Bereich Signaltechnik und
            einem integrierten Service-Konzept komplementiert.
          </Text>
          <Button
            href="/solutions"
            position="center"
            textColorClass="text-white"
            styles="mb-12"
            iconAfter={
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4995_6662)">
                  <path
                    d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4995_6662">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            Zu den Lösungen
          </Button>
        </div>
        <div className="col-span-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
      </ContentWidth>
    </section>
  );
}
