import person from "../../assets/images/ppg.jpeg";
import "./introduction.css";


const IntroductionInspiration = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-xl sm:text-2xl xl:text-1xl block ">
            
            <span className="text-nowrap shrink-0 inline-block w-full lg:text-[35px] font-bold">
              Inspirasi dan Tujuan
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-justify leading-relaxed indent-10">
            Inspirasi saya untuk menjadi guru berawal dari keinginan sederhana, yaitu membagikan ilmu yang saya miliki agar dapat bermanfaat bagi orang lain. 
            Lingkungan keluarga yang sebagian besar berprofesi sebagai guru juga memberikan pengaruh besar dalam membentuk pandangan saya terhadap dunia pendidikan. 
            Dari mereka, saya belajar bahwa menjadi guru bukan sekadar pekerjaan, melainkan panggilan untuk mencerdaskan dan membimbing generasi.

            Bagi saya, tujuan menjadi guru tidak hanya sebatas mengajar di kelas, tetapi juga memberikan dampak nyata bagi siswa. Saya ingin hadir sebagai sosok yang mampu menginspirasi, 
            memotivasi, dan membantu mereka berkembang, baik secara akademik maupun karakter. Dengan begitu, ilmu yang saya berikan tidak hanya dipahami, tetapi juga dapat diterapkan dan membawa manfaat 
            dalam kehidupan mereka.

           </p>
          
        </div>
        
      </div>
      <div className="max-w-124 w-full h-full max-lg:mx-auto aspect-[536/636]">
    <img
      className="shadow-2xl shadow-gray-200 w-full h-full object-cover bg-white rounded-3xl"
      src={person}
      alt="person"
    />
  </div>
    </div>
  );
};

export default IntroductionInspiration;