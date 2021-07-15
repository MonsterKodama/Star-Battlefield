import React, { ReactNode } from "react";
import { Players } from "./Player";
import { Planet } from "./Planet";
import "../style/Gameboard.css";


export class Gameboard extends React.Component {

   renderplanet(numOfPlanets:number) {
      let res =[];
      for(let i = 0; i< numOfPlanets; i++) {
         res.push( <Planet>{null}</Planet>)
      }
      return res;
   }



   render() {

      return (
         <div>
            
            <>
            <Players>{}</Players>
               <div className="field">
                  {this.renderplanet(64)}
               </div>
            </>
         </div>
      );
   }
}


