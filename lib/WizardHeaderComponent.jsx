import React from 'react';

export class WizardHeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.forms_list = this.props.forms_list;
    }

    render(){
        let currentStep = this.props.currentStep;
        let forms_list = this.props.forms_list;
        for(var i=0; i<forms_list.length; i++){
            console.log('i step: ' + i);
            forms_list[i].selected = false;
        }
        console.log('cur step: ' + currentStep);
        forms_list[currentStep].selected = true;
        
        let ctl = [];
        for(var j=0; j<forms_list.length; j++){
            ctl.push(
                        <li role="presentation" className={forms_list[j].selected ? 'active' : ''}>
                            <a data-toggle="tab">
                                <span className="round-tab">
                                    {forms_list[j].header}
                                </span>
                            </a>
                        </li>
            );
        }

        
        return(
            <div className="wizard-header">
                <div className="connecting-line"></div>
                    <ul className="nav nav-tabs" role="tablist">
                        {ctl}
                    </ul>
                </div>
        );
    }
}

export default WizardHeaderComponent;