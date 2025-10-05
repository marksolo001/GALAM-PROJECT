import { Roboto_Mono } from "next/font/google";

import Link from "next/link";
const Roboto_Mono_Font = Roboto_Mono ({
  weight: "400",
  variable: "--font-Roboto_Mono",
  subsets: ["latin"],
});
export default function Banner() {
    return(
        <div className="w-full h-186 pt-25 px-20 bg-[url('/images/bg.png')] bg-cover">
            <div className="flex gap-140">
                <h1 className={`text-[#00C2FF] text-7xl font-light ${Roboto_Mono_Font.className}`}>WRITE TO US <span></span><h1 className="text-white mt-10">NOW</h1></h1>
                <img className="w-30 h-30 mt-10" src="/images/Mask.png" alt="Logo" />
            </div>
               <div className="mt-20 w-full h-80 flex gap-40">
                  <div className="w-120 h-70 mt-5  bg-white"></div>
                  <div className={`w-160 h-80   border-l-4 border-[#D9D9D9] text-white text-2xl p-10`}>
                    <h1 className={``}>IF YOU HAVE ANY OTHER IDEAS OR ANY COMPLAINTS, PLEASE CONTACT US.</h1>
                    <Link rel="stylesheet" href="https://t.me/teamgalamm"> <button className="w-50 h-10  border-1 rounded-xl border-white text-center mt-10  hover:shadow-xl/10 hover:shadow-white  transition-transform duration-300 ease-out hover:scale-105">more about us</button></Link>
                  </div>
              </div>
        </div>
    )
}