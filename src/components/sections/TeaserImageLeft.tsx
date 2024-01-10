import ButtonPrimary from "../elements/ButtonPrimary";
import H2 from "../typography/H2";
import SmallWidth from "../layouts/SmallWidth";
import Text from "../typography/Text";

interface TeaserImageLeftProps {
  imageSrc?: string;
  children?: React.ReactNode;
  listItems?: string[];
}

const TeaserImageLeft: React.FC<TeaserImageLeftProps> = ({
  imageSrc,
  children,
    listItems,
 
}) => {
  return (
    <section className="antialiased py-12">
      <SmallWidth>
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <img
            src={imageSrc}
            className="object-cover object-center w-full"
            alt=""
          />

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {children}

          </div>
        </div>
      </SmallWidth>
    </section>
  );
};


export default TeaserImageLeft;