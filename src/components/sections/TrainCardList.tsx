import ContentWidth from "../layouts/ContentWidth";
import H3 from "../typography/H3";

interface Train {
  name: string;
  img: string;
  category: string;
  href: string
}

interface TrainCardListProps {
  trains: Train[];

}

export default function TrainCardList({
  trains,

}: TrainCardListProps) {
  return (
    <section className=" text-black pb-5 lg:pb-24">
      <ContentWidth>
        <div className="grid col-span-12 lg:grid-cols-4 lg:grid-rows gap-2">
          {trains.map((item) => (
            <div
              key={item.name}
              className="bg-white text-black flex flex-row lg:flex-col"
            >
              <img className="w-full" src={item.img} alt={item.name} />
              <div className="p-6">
                <small className="text-greySolid-600 flex mb-2">
                  {item.category}
                </small>
                <div className="flex flex-row items-center justify-between">
                  <H3 styles="mb-0">{item.name}</H3>
                  <a href={item.href}>
                    <img src="/icons/arrow-blue.svg" alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
}
