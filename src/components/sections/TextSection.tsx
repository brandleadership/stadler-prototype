import SmallWidth from "@/components/layouts/SmallWidth";
import Text from "../typography/Text";



interface TextSectionProps {

  children?: React.ReactNode;

}

export default function TextSection({children }: TextSectionProps) {
  return (
    <section className="bg-white dark:bg-gray-900 pb-5 lg:pb-24">
      <SmallWidth>
      {children}
      
      </SmallWidth>
    </section>
  );
}
