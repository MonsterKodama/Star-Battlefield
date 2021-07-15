import React, {ReactNode} from "react";
// import { Planet, Gameboard } from "./Gameboard";
import CSS from 'csstype'
import { createSecureContext } from "tls";

type Props = {
   children:ReactNode;
};

type PlayerX = {
   nextPlayer: boolean;
   planet: string[];
}

export class Players extends React.Component<Props,PlayerX> {
   
   constructor(props:Props) {
      super(props);
      this.state = {
         nextPlayer: true,
         planet: Array(64).fill(null)
      };
   }

   Player = ({i}:{i:number}) => {
      const planet = this.state.planet.slice();
      planet[i] = this.state.nextPlayer ? 'blue' :'red';
      this.setState({
         planet: planet,
         nextPlayer: !this.state.nextPlayer,
      })


   }

   render() {
      return (
         <div className="status">{'Next player: ' + (this.state.nextPlayer? 'blue' : 'red')}</div>
      )
   }

}