import { Roboto_Mono } from "next/font/google";
import { Inter } from "next/font/google";

const Roboto_Mono_Font = Roboto_Mono({
  weight: "400",
  variable: "--font-Roboto_Mono",
  subsets: ["latin"],
});
const Inter_Font = Inter({
  weight: "400",
  variable: "--font-Inter",
  subsets: ["latin"],
});

export default function Banner() {
  return (
   <div>
   
    <div className="w-full h-186 bg-[url('/images/bg0.png')] bg-cover bg-center flex items-center justify-between px-20">
  
      <div className="flex flex-col gap-6 max-w-[700px] ">
   
        <div className="flex gap-10">
           <h1
          className={`text-7xl leading-[1.1] text-white ${Roboto_Mono_Font.className}`}
        >
          ABOUT <br />PRODUCT<br /><h1 className={`${Roboto_Mono_Font.className} text-[#00C2FF] text-5xl mt-15`}>GALAM FARM</h1>

        </h1>

     
        <p
          className={`${Roboto_Mono_Font.className} text-white text-[17px] leading-relaxed  max-w-[600px]`}
        >
          <span className="font-bold w-200 h-100">The main goal</span> is to develop your own
          farm by experimenting with agricultural processes and finding the best
          strategies for different environmental conditions. The project combines
          elements of a simulator and an educational tool, helping players better
          understand the relationship between nature, climate, and agriculture.
        </p>

        

        </div>
        
  
          <p className={`${Roboto_Mono_Font.className}  text-white text-[17px] leading-relaxed max-w-[600px]`}>
           project that demonstrates how technology can impact agriculture. Our project is a 2D farming simulator where players can plant, grow, and take care of crops while observing how agricultural nature changes under the weather conditions of a temperate monsoon climate in Central Asia. The gameplay focuses on different weather scenarios such as drought, rain, and temperature changes, which directly influence crop growth and harvest.
        </p>
      </div>

   
      <div className="bg-[url('/images/galam.png')] bg-cover bg-center w-[500px] h-[702px] mt-10"></div>

    
    </div>
   </div>
   
  );
}
