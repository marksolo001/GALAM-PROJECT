import Image from "next/image";
import HeaderData from "../data/HeaderData.json";
import { Jaro , Iceland , } from "next/font/google";
import Link from "next/link";

const JaroFont = Jaro({
  variable: "--font-jaro",
  subsets: ["latin"], 
});

const IcelandFont = Iceland({
  weight: "400",
  variable: "--font-iceland",
  subsets: ["latin"],
});

export default function Header() {
    return(
        <div>
           <div className="w-full h-10 bg-[#191921] flex  justify-center  relative ">
            <div className="flex pr-170">
                <img src="/images/globe.png" alt="globe" />
              <p className="text-white mt-2">{HeaderData.description}</p>
            </div>
            <div className="flex pr-20">
                <img src="/images/windows.png" alt="windows"  className="w-30 mt-1 h-20"/>
                 <img src="/images/androidman.png" alt="androidman" />
            </div>
          <h1 className={`text-4xl text-white absolute mt-5 z-20 ${JaroFont.className}`}>{HeaderData.title}</h1>
              <div className="justify-center w-50 border-l-[120px] border-l-transparent text-center  border-r-[120px] border-r-transparent  border-t-[70px] border-t-[#191921]  border-b-0 border-b-transparent absolute top-10">
              </div>
             </div>
         
        <div className="w-full h-20 bg-[#0A0A19] flex items-center justify-center  realative">
            <div className="absolute z-40 text-white flex gap-100">
              <div className={`flex gap-60 mr-50 text-2xl ${IcelandFont.className}`}>
                  <Link href="/"><button className="hover:text-[grey] ">{HeaderData.buttons[0]}</button></Link>
                  <Link href="/game"><button className="hover:text-[grey]">{HeaderData.buttons[1]}</button></Link>
              </div>
              <div className={`flex gap-60 text-2xl ${IcelandFont.className}`}>
                  <Link href="/about"><button className="hover:text-[grey]">{HeaderData.buttons[2]}</button></Link>
                 <Link href="/contact"><button className="hover:text-[grey]">{HeaderData.buttons[3]}</button></Link>
              </div>
            </div>
              <div className="w-50 border-l-[200px] border-l-transparent border-r-[200px] border-r-transparent  border-t-[120px] border-t-[#0A0A19] mt-40  border-b-0 border-b-transparent z-40 "></div>   
                <div>

               </div>  
             </div>
            
        </div>
    )
}