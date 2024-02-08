import H1 from "@/components/typography/H1";
import SmallWidth from "@/components/layouts/SmallWidth";

export default function Hero() {
  return (
    <section className="bg-white pb-5 lg:pb-24">
      <SmallWidth>
     
          <video 
            controls={true}
            autoPlay={true}
            muted={true}
            src={
              "https://brand-stadler.com/uploads/Stadler%20Entrepreneurship%20Movie%20V14%20DE%20Heavy%20Compression_2.mp4"
            }
            loop={true}
          />
      </SmallWidth>
    </section>
  );
}
