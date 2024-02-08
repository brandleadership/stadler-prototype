"use client";

import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";
import Lead from "../typography/Lead";

interface ListItem {
  text: string;
  date: string;
  link: string;
}
interface TeaserProps {
  listData: ListItem[];
}
interface TeaserDownloadProps extends TeaserProps {
  title?: string;
  leadText?: string;
  listData: ListItem[];
}

const TeaserMedienmitteilungen: React.FC<TeaserDownloadProps> = ({
  title,
  leadText,
  listData,
}) => {
  return (
    <section className="bg-white py-5 lg:py-12">
      <ContentWidth>
        <div className="col-span-12 max-w-full flex flex-col justify-left">
          <H2>{title}</H2>
          <Lead>{leadText}</Lead>
          <ul className="mb-8" key={leadText}>
            {listData.map((item, index) => (
              <>
                <li
                  className="text-xl flex md:flex-row justify-start md:justify-between items-center"
                  key={index}
                >
                  <a href={item.link} className="mb-6 w-full md:w-auto flex">
                    <div className="min-w-[8rem] w-32"> {item.date}</div>
                    <div className="">{item.text}</div>
                  </a>
                </li>
                <div className="border-b mb-6"></div>
              </>
            ))}
          </ul>
        </div>
      </ContentWidth>
    </section>
  );
};
export default TeaserMedienmitteilungen;
