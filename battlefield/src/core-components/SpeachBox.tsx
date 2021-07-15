import React, { ReactElement, ReactNode } from "react";
import "../style/Speachbox.css";

export function SpeachBox({
   children
   }: {
   children:ReactNode;
   }):ReactElement {
   return (
         <div className="text-box">
            <div className="spaceBot" ></div>
            <div className="text">
               <p>{children}</p>
            </div>
            
         </div>
   )
}