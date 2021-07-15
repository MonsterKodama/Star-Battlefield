import React, { ReactNode } from "react";
import { Players } from "./Player";
import "../style/Planet.css";

type Props = {
   children: ReactNode;
};

type State = {
   displayPopup: boolean;
   isActive: boolean;
   isDone:boolean;
   
}

export class Planet extends React.Component<Props, State>  {
   constructor(props: Props) {
      super(props);
      this.state = {
         displayPopup: false,
         isActive: false,
         isDone:false
      };
   }

   showPopup = () => {
      this.setState({ displayPopup: true });
   }
   hidePopup = () => {
      this.setState({ displayPopup: false})
   }

   inActive() {
      this.setState({ isActive: !this.state.isActive});
      if (this.state.isActive == true){
         return (
            this.setState({ isActive: false})
         )
      }
      return null
   }



   hideClick() {
      this.hidePopup();
      this.inActive();
   }

   popWindow = () => (
      <div className="cardsWindow">
         <>
            <p>with some Content haha </p>
            <button className="close" onClick={() => {this.hideClick()}}>close me pls</button>
            <button className="verifyDone" onClick={()=> {}}>Click here to verify its done!</button>
         </>
      </div>
   );
   renderPopup = () => {
      if (this.state.displayPopup === true) {
         return (
            this.popWindow()
         );
      }
      return null;
   }
   ToggleClass = () => {
      this.setState({ isActive: !this.state.isActive});
   }



   onClick() {
      this.showPopup();
      this.ToggleClass();
   }


   render() {
      
         return (
            <>
               <button 
                  className={this.state.isActive ? "active" : "inactivePlanet"} 
                  onClick={() => {this.onClick()}}>
                  {this.props.children}
               </button>
               {this.renderPopup()}
            </>
         );
      
   }
}


