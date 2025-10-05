"use client";
import { useState } from "react";
import { Jersey_10 } from "next/font/google";
const Jersey_10_Font = Jersey_10({
  weight: "400",
  variable: "--font-Jersey_10",
  subsets: ["latin"],
});

export default function Banner() {
    return(
        <div className="w-full h-186 pt-20 bg-[url('/images/game.png')] bg-cover">
          <div className="flex  mr-25 items-center justify-center ">
            <img src="/images/light.png" alt="ligth" className="w-30 h-30"/>
           <h1 className={`text-center text-7xl ${Jersey_10_Font.className} text-white`}>LATEST GAMES</h1>
          </div>
          
          <div className=" flex items-center gap-50 justify-center">
            <div className="w-60 h-70  ">
             <img src="/images/gradient1.png" alt="gradient1" />
            </div>

            <div className="w-80 h-90  transition-transform duration-300 ease-out hover:scale-105">
               <img src="/images/gradient2.png" alt="gradient1" />
            </div>

            <div className="w-60 h-70  ">
               <img src="/images/gradient3.png" alt="gradient1" />
            </div>

          </div>

          <div className="w-40 h-40 flex ml-50 gap-65">
            <img src="/images/locked.png" alt="lock" />
            <div className="block mt-10 ">
               <a  href="images/games/GalamFarm_Installer.exe" download><button className="text-center ml-12 text-white w-50 border-1 rounded-3xl hover:shadow-xl/10 hover:shadow-white h-10 transition-transform duration-300 ease-out hover:scale-105">DOWNLOAD FOR PC</button></a>
               <a href="images/games/GalamFarm.apk" download><button className="text-center mt-5 text-white border-1 rounded-3xl  hover:shadow-xl/10 hover:shadow-white w-80 h-10 transition-transform duration-300 ease-out hover:scale-105">DOWNLOAD FOR ANDROID</button></a>  
            </div>
            <img src="/images/locked.png" alt="lock" />
            
          </div>

            
            
          

        </div>
        
    )
}