import React from 'react';

class SelectType extends React.Component {
  constructor(props){
    super(props);
  }

  handleType(e){
    e.preventDefault();
    const type = e.target.value;
    this.props.handleType(type);
  }

  render(){
    const buttons = ["Auto", "Home", "Personal"].map((loanType, i) => {
      return (
        <button key={i} className="loan-selector" type="submit"
                value={loanType} onClick={this.handleType.bind(this)}>
          {loanType}
        </button>
      );
    });

    return (
      <div className="parent-element animated fadeIn">
        <div className="loan-type-text">
          What type of loan are you applying for?
        </div>
        <section className="loan-options">
          {buttons}
        </section>
      </div>
    );
  }
}

export default SelectType;
