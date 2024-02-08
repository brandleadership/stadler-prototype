import H3 from "@/components/typography/H3";
import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";

interface FeatureItemProps {
  imageSrc?: string;
  title?: string;
  linkText?: string;
  href?: string;
}

interface FeaturesProps {
  featuresData: FeatureItemProps[];
  mainTitle?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imageSrc,
  title,
  href,
}) => {
  return (
    <li className="w-full md:w-1/2 sm:w-full lg:w-1/2">
      <img src={imageSrc} alt="Image" />
      <a
        href={href}
        className="flex items-center gap-2 text-2xl font-bold mt-4"
      >
        {title}
        <img
          className="w-5 h-5"
          src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
          alt=""
        />
      </a>
    </li>
  );
};

const Features: React.FC<FeaturesProps> = ({ featuresData, mainTitle }) => {
  return (
    <section className="bg-white py-5 lg:py-24">
      <ContentWidth>
        <div className="col-span-12  max-w-full mx-auto bg-white">
          <div className="mb-10 tracking-tight dark:text-white ">
            <H2>{mainTitle}</H2>
          </div>
          <ul className="flex items-center justify-center flex-col gap-8 sm:gap-12 md:gap-16 md:flex-row">
            {featuresData.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
        </div>
      </ContentWidth>
    </section>
  );
};

export default Features;
