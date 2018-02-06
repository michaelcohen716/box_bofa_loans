import React from 'react';
import FileDrop from 'react-file-drop';


class DocumentPlatform extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 0,
      documentUploads: this.props.documentItems.map(doc => {
        return false;
      })
    };
    this.documentItems = this.props.documentItems;
  }

  handleDrop(file){
    const type = this.documentItems[this.state.active];
    this.props.handleDocDrop(type, file);

    let newDocState = this.state.documentUploads;
    newDocState[this.state.active] = file;
    this.setState({documentUploads: newDocState});
  }

  toggleActive(i){
    this.setState({active: i});
  }

  handleSubmit(){
    this.props.handleSubmit();
  }

  render(){
    const documentTabs = this.documentItems.map((item, i) => {

      const parentClass = this.state.active === i ? 'document-menu-item menu-item-active' : 'document-menu-item';
      const toggleActive = this.toggleActive.bind(this, i);
      const showCheck = this.state.documentUploads[i] ? 'fa fa-check' : '';

      return (
        <div className={parentClass} key={i} onClick={toggleActive} data={docName}>
          <div className="doc-menu-item-text">
            {item}
          </div>
          <div className="text-item-check">
            <div className={showCheck}></div>
          </div>
        </div>
      );
    });

    const selected = this.state.active;
    const docState = this.state.documentUploads;
    const docName = docState[selected] ? docState[selected][0].name : 'Drop Files';


    let submitButton =
                (<button className="submit-application-button" onClick={this.handleSubmit.bind(this)}>
                    Submit
                </button>);

    this.state.documentUploads.forEach(el => {
      if(el === false){
        submitButton =
                (<button className="submit-application-idle">
                    Submit
                </button>);
                return;
      }
    });

    return (
      <div className="document-platform animated zoomIn">
        <div className="document-top-bar">
          <div className="document-top-bar-text">
            Your Application To-Do List
          </div>
          {submitButton}
        </div>

        <div className="document-platform-layout">
          <div className="document-menu-holder">
            <div className="document-menu">
              {documentTabs}
            </div>
          </div>

          <div className="document-holder">
            <div className="document-drop-text">
              <div className="drop-text-inner">
                {docName}
              </div>
            </div>

            <FileDrop frame={document} onDrop={this.handleDrop.bind(this)}>

            </FileDrop>
          </div>
        </div>
      </div>
    );
  }
}

export default DocumentPlatform;
