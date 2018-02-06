import React from 'react';
import DocumentPlatform from './DocumentPlatform';
var bankLogoSrc = "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-boa-logo-CSXe4b047c0.svg";
var boxLogoSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Box%2C_Inc._logo.svg/1024px-Box%2C_Inc._logo.svg.png";


class Layout extends React.Component {
  constructor(props){
    super(props);
  }

  handleDocDrop(type, doc){
    this.props.handleDocDrop(type, doc);
  }

  handleSubmit(){
    this.props.handleSubmit();
  }

  render(){
    return (
      <div className="layout-holder animated fadeIn">
        <div className="top-logo-bar">
          <img src={bankLogoSrc} width="auto" height="35%"/>
          <div className="in-partnership">in partnership with</div>
          <img src={boxLogoSrc} width="auto" height="35%" margin-left="1.4%" />

        </div>

        <DocumentPlatform handleDocDrop={(type, doc) => this.handleDocDrop(type, doc)}
                          handleSubmit={() => this.handleSubmit()}
                          documentItems={this.props.documentItems}/>

      </div>
    );
  }
}

export default Layout;
