import ContentWidth from "@/components/layouts/ContentWidth";
import H2 from "@/components/typography/H2";
import Lead from "@/components/typography/Lead";
import Button from "@/components/elements/ButtonPrimary";

type MedienmitteilungenList = {
  time: string;
  text: string;
  link: string;
};

type MedienmitteilungenCustomProps = {
  mainTitle?: string;
  leadText?: string;
  medienmitteilungenList: MedienmitteilungenList[];
};

const MedienMedienmitteilungList: React.FC<MedienmitteilungenCustomProps> = ({
  mainTitle,
  leadText,
  medienmitteilungenList,
}) => {
  return (
    <section className="bg-white py-5 lg:py-12">
      <ContentWidth>
        <div className="col-span-12 max-w-full flex flex-col justify-left">
          <H2>{mainTitle}</H2>
          <Lead>{leadText}</Lead>
          <ul className="mb-8" key={leadText}>
            {medienmitteilungenList.map((item, index) => (
              <>
                <a
                  className="group mb-6 text-xl flex md:flex-row flex justify-start md:justify-between items-center"
                  key={index}
                  href={item.link}
                >
                  <div className="text-xl flex group-hover:text-primary justify-start md:justify-between items-center">
                    <p className="w-28 group-hover:text-primary transition-all">
                      {item.time}
                    </p>
                    <p className="group-hover:text-primary transition-all">
                      {item.text}
                    </p>
                  </div>
                  <span className="">
                    <img
                      className="w-5 h-5"
                      src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                      alt=""
                    />
                  </span>
                </a>
                <div className="border-b mb-6"></div>
              </>
            ))}
          </ul>
          <Button
            position="left"
            href="/medienmitteilungen"
            buttonText="Alle Medienmitteilungen"
          />
        </div>
      </ContentWidth>
    </section>
  );
};
export default MedienMedienmitteilungList;
