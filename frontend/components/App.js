import React from 'react';
import Platform from './Platform';

class App extends React.Component {
  constructor(props){
    super(props);
  
  }


  render(){
    return (
      <div className="grandparent">
        <Platform />
      </div>
    );
  }
}

export default App;
