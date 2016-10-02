import React from 'react';
import './formwizard.scss';
import WizardComponent from './WizardComponent.jsx';

export default class FormWizard extends React.Component{
  constructor(props){
    super(props);
    console.log('step 1: ' + this.props.forms_list);
    this.forms_list = this.props.forms_list;
  }

  render() {
    return(
          <WizardComponent forms_list={this.forms_list}/>
    );
  }
  
}
