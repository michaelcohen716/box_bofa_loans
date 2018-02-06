import React from 'react';

class InputKeyInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    };
    this.handleInfo = this.handleInfo.bind(this);
  }

  update(field){
    return(e)=>{
      this.setState({[field]: e.target.value});
    };
  }

  handleInfo(){
    const { name, email, phone } = this.state;
    const object = {
      name, email, phone
    };
    this.props.handleInfo(object);
  }

  render(){
    const inputs = ["Name", "Email", "Phone"].map((inputType, i) => {
      const stateName = inputType.toString().toLowerCase();
      return (
        <div className="info-holder" key={i} >
          <label className="info-label">{inputType}</label>
          <input type="text" className="info-input" value={this.state.stateName}
                 onChange={this.update(stateName)}/>
        </div>
      );
    });

    return (
      <div className="parent-element info-parent-holder animated fadeIn">
        {inputs}
        <button className="advance-button" onClick={() => this.handleInfo(this.state)}>
          Get Started
        </button>
      </div>
    );
  }
}


export default InputKeyInfo;
