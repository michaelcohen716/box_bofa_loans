import React from 'react';
import SelectType from './SelectType';
import InputKeyInfo from './InputKeyInfo';
import Layout from './Layout';
import ThankYou from './ThankYou';
import $ from 'jquery';
// import SDK from 'box-node-sdk';

const accessToken = 'pH1xvl4YT9ufsCi54HEWikoi57O3lclg';
const apiKey = 'sbfe4gb0cpbplklrh4vmq8ew6chyf91t';
// import SDK from '../../sdk/box-node-sdk/lib/box-node-sdk';
// var SDK = require('../../sdk/box-node-sdk/lib/box-node-sdk');
// var box = new SDK();
// var client = new box.BasicBoxClient({accessToken: accessToken, simpleMode: true});

var documentItems = [
  "Driver's License / Passport",
  "Recent Tax Return",
  "Proof of Employment",
  "Proof of Address",
  "Privacy Agreement"
];

class Platform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeComponent: 0
    };
    // console.log(SDK);
    this.customerObject = {};
    this.upload = this.upload.bind(this);
    this.uploads = [];
    this.handleInfo = this.handleInfo.bind(this);
  }

  handleType(type){
    this.customerObject.type = type;
    this.setState({activeComponent: 1});
  }

  handleInfo(customer){
    this.customerObject.name = customer.name;
    this.customerObject.email = customer.email;
    this.customerObject.phone = customer.phone;
    this.setState({activeComponent: 2});
  }

  handleDocDrop(fileType, doc){
    const docType ='' + `${fileType}` + '';
    const docObject = { docType, doc };
    this.uploads.push(docObject);
  }

  handleSubmit(){
    // this.upload();
    this.setState({activeComponent: 3});
  }


  render(){
    if(this.state.activeComponent === 0){
      return (
        <SelectType handleType={(type) => this.handleType(type)} />
      );
    } else if(this.state.activeComponent === 1){
      return (
        <InputKeyInfo handleInfo={(object) => this.handleInfo(object)}/>
      );
    } else if(this.state.activeComponent === 2){
      return (
        <Layout handleDocDrop={(type, doc) => this.handleDocDrop(type, doc)}
          handleSubmit={() => this.handleSubmit()}
          documentItems={documentItems}/>
      );
    } else if(this.state.activeComponent === 3){
      return (
        <ThankYou />
      );
    }

  }

  upload(){
    const upload = this.uploads[0];

    let formData = new FormData();
    formData.append(upload.doc.name, upload.doc[0]);
    formData.append('parent_id', '0');

    client.files.upload({ body: formData })
      .then(res => console.log(res))
      .catch(err => console.log(err));

  //   const uploadUrl = 'https://upload.box.com/api/2.0/files/content';
  //   const headers = {
  //     Authorization: accessToken
  //   };
  //
  //   $.ajax({
  //       url: uploadUrl,
  //       headers: headers,
  //       type: 'POST',
  //       // This prevents JQuery from trying to append the form as a querystring
  //       processData: false,
  //       contentType: false,
  //       data: upload
  //   }).then((data) => {
  //       // Log the JSON response to prove this worked
  //       console.log(data.responseText);
  //   });
  //
  //   console.log("in upload");
  //
  // }
  }

}

export default Platform;
