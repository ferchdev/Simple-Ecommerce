import Image from "next/image";
import { useEffect, useState } from "react";

export const ProductDisplay = ({ src_1, src_2, src_3, name }) => {

  const [src, setSrc] = useState(src_1);
  
  useEffect(() => {
    setSrc(src_1);
  }, [src_1]);

  return (
    <div className="ProductDisplay col-span-1 w-full h-full flex flex-col justify-center items-center relative">
      <div className="w-full lg:w-[400px] h-[300px] sm:h-[340px] flex justify-center items-center">
        <Image
          src={src}
          className="w-[auto] h-[auto] max-h-[100%] max-w-[100%]"
          alt={`${name} image`}
        />
      </div>
      <div className="w-[100%] flex flex-wrap gap-3 justify-center items-center pt-[35px]">
        <Image
          src={src_1}
          className={`w-[90px] sm:w-[120px] h-[90px] rounded  object-contain border  cursor-pointer transition-all duration-200 hover:border-slate-400 hover:shadow-md ${
            src === src_1 ? "border-slate-400 shadow-md" : "border-transparent"
          }`}
          alt={`${name} image`}
          onMouseOver={() => setSrc(src_1)}
        />
        <Image
          src={src_2}
          className={`w-[90px] sm:w-[120px] h-[90px] rounded  object-contain border cursor-pointer transition-all duration-200 hover:border-slate-400 hover:shadow-md ${
            src === src_2 ? "border-slate-400 shadow-md" : "border-transparent"
          }`}
          alt={`${name} second image`}
          onMouseOver={() => setSrc(src_2)}
        />
        <Image
          src={src_3}
          className={`w-[90px] sm:w-[120px] h-[90px] rounded  object-contain border cursor-pointer transition-all duration-200 hover:border-slate-400 hover:shadow-md ${
            src === src_3 ? "border-slate-400 shadow-md" : "border-transparent"
          }`}
          alt={`${name} third image`}
          onMouseOver={() => setSrc(src_3)}
        />
      </div>
    </div>
  );
};
