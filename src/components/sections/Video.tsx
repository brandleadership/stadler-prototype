import H2 from "../typography/H2";
import ButtonPrimary from "../elements/ButtonPrimary";
import Text from "../typography/Text";
import FullWidth from "../layouts/FullWidth";

export default function Video() {
  return (
    <div className="bg-white pb-5 lg:pb-24  2xl:max-w-[1760px] 2xl:mx-auto">
      <FullWidth>
        <div className="col-span-12 flex flex-col lg:flex-row justify-between items-center">
          <div className="overflow-hidden w-full lg:w-2/3 ">
            <video
              className="-mt-[1%] -mb-[1%]"
              controls={false}
              autoPlay={true}
              muted={true}
              src={"/videos/Movie-Stadler-Kurz-People-Focus-no-frame-1080.mp4"}
              loop={true}
            />
          </div>
          <div className="w-[90%] m-auto lg:px-4 xl:px-20 lg:w-1/3">
            <div className="mt-10 lg:mt-0">
              <H2 resetStyles={true} styles="text-4xl font-bold mb-6">
                Karriere bei Stadler
              </H2>
              <Text styles="text-xl">
                Der Erfolg von Stadler beruht auf der leidenschaftlichen
                Zusammenarbeit von unternehmerisch handelnden Menschen, die auch
                Unmögliches möglich machen.
                <br />
                <br />
                Wer alles für die besten Züge der Welt macht, braucht die besten
                Talente.
              </Text>
            </div>

            <div className="mt-6">
              <ButtonPrimary position="left">
                Jetzt bewerben
                <img
                  className="w-4 h-4"
                  src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_white.svg"
                  alt=""
                />
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </FullWidth>
    </div>
  );
}
