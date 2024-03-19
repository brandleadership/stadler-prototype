import ButtonPrimary from "../elements/ButtonPrimary";
import MapTextTitle from "../sections/MapTextTitle";
import FullWidth from "../layouts/FullWidth";
import Stats from "../sections/Stats";
import SmallWidth from "../layouts/SmallWidth";
import H2 from "../typography/H2";

const countries = [
  "Schweiz",
  "Deutschland",
  "Spanien",
  "Polen",
  "Ungarn",
  "USA",
  "Belarus",
  "Österreich",
  "Kazachstan",
  "...",
];
const statsData = [
  {
    text: "Produktionsstandorte",
    end: 7,
    suffix: "",
  },
  {
    text: "Komponentenwerke",
    end: 7,
    suffix: "",
  },
  {
    text: "Signalling-Kompetenzcenter",
    end: 5,
    suffix: "",
  },

  {
    text: "Service-Standorte",
    end: 80,
    suffix: "",
  },
];

interface MapProps {
  title?: string;
  props?: any;
}

const Map: React.FC<MapProps> = ({ props, title }) => {
  return (
    <FullWidth>
      <div className="col-span-12 w-full bg-white pb-5 lg:pb-24">
        <SmallWidth>
          <div className="max-w-4xl mx-auto">
            <H2
              styles="text-center mb-2 text-4xl font-bold "
              resetStyles={true}
            >
              {title}
            </H2>
          </div>
        </SmallWidth>
        <Stats data={statsData} backgroundColor="bg-white" />
        <div className="relative">
         
          <div className="pl-6 relative w-full">
            <img
              className="w-full h-auto"
              src="/stadler-world-map-home.svg"
              alt=""
            />
          </div>
          <div className="pl-6 lg:pl-20 md:flex flex-column py-8 static w-full">
            
            <div className="md:w-1/3 w-full mb-8 flex-column justify-start items-start">
              <div className="flex justify-start items-center">
                <div className="mr-3 w-3 h-3 bg-map-dark rounded-full"></div>
                <div>Stadler vor Ort</div>
              </div>
              <div className="flex justify-start items-center">
                <div className="mr-3 w-3 h-3 bg-map-light rounded-full"></div>
                <div>Stadler im Einsatz</div>
              </div>
            </div>

            <div className="md:w-1/3 w-full">
              <ButtonPrimary position="center" href="/#">
                Alle Standorte
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </FullWidth>
  );
};

export default Map;
