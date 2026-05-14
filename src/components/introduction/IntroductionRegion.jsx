import person from "../../assets/images/sidoarjo.jpg";
import "./introduction.css";

const IntroductionRegion = () => {
  return (
    <div
      className="flex max-lg:flex-col sm:justify-between items-center pt-10 lg:pt-31.5 lg:mb-27.5 gap-20 p-2 max-xxl:px-4"
      id="introduction"
    >

      {/* IMAGE LEFT */}
      <div className="max-w-124 w-full aspect-[536/636] relative">
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full object-cover bg-white rounded-3xl"
          src={person}
          alt="sidoarjo"
        />
      </div>

      {/* TEXT RIGHT */}
      <div className="w-full flex flex-col justify-between">
        <div className="w-full transition-all duration-500">
          <p className="text-xl sm:text-2xl xl:text-1xl block">
            Saya berasal dari Kota
            <span className="text-nowrap shrink-0 inline-block w-full lg:text-[45px] font-bold">
              Sidoarjo
            </span>
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-justify leading-8 tracking-wide indent-10">
            Sidoarjo merupakan daerah dengan karakter unik yang memadukan
            potensi alam, industri, dan budaya pesisir. Salah satu ikon
            utamanya adalah fenomena Lumpur Lapindo yang menjadi simbol
            sekaligus pengingat akan dinamika lingkungan dan industri.

            Di sisi lain, Sidoarjo dikenal sebagai Kota Udang dan Bandeng,
            mencerminkan kekuatan sektor tambak yang menjadi tulang punggung
            ekonomi masyarakat.

            Keunikan ini diperkuat dengan keberadaan sentra industri tas dan
            koper di Tanggulangin yang telah menembus pasar nasional hingga
            internasional. Tidak hanya itu, kekayaan kuliner khas seperti
            lontong kupang dan olahan bandeng turut merepresentasikan identitas
            lokal yang kuat.

            Keseluruhan aspek ini menjadikan Sidoarjo sebagai daerah yang kaya
            akan potensi, tradisi, dan daya saing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionRegion;