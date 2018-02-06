import React from 'react';
var bankLogoSrc = "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-boa-logo-CSXe4b047c0.svg";
var boxLogoSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Box%2C_Inc._logo.svg/1024px-Box%2C_Inc._logo.svg.png";

class OpeningAnimation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      src: bankLogoSrc
    };
    this.firstTransition();
  }

  firstTransition(){
    setTimeout(() => {
      this.setState({src: boxLogoSrc});
    }, 2000);
  }


  render(){
    if(this.state.src === bankLogoSrc){
      return (
        <div className="animate-box animated slideInUp">
          <img src={this.state.src} margin-right="48%" width="150%" height="auto" />
        </div>
      );
    }
    else if(this.state.src === boxLogoSrc){
      return (
        <div className="animate animated fadeIn">
          <img className="box-logo" margin-left="17%" width="100%" height="auto" src={this.state.src} />
        </div>
      );
    }

    else {
      return (
        <div></div>
      );
    }
  }
}

export default OpeningAnimation;
