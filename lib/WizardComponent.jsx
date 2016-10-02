import React from 'react';
import WizardFormComponent from './WizardFormComponent.jsx';
import WizardHeaderComponent from './WizardHeaderComponent.jsx';

export class WizardComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {step: 0};
        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
        this.forms_list = this.props.forms_list;
    }

    onNext(form){
        form.saveHandler(form);
        if(this.state.step +1 >= this.forms_list.length)
        {
            return;
        }
        this.setState({
            step: this.state.step + 1
        });
    }

    onPrevious(){
        if(this.state.step == 0)
        {
            return;
        }
        this.setState({
            step: this.state.step - 1
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.shouldUpdate(nextState);
    }

    shouldUpdate(state){
                console.log('length - 1: ');

        let shouldUpdate = state.step + 1 <= (this.forms_list.length);
        shouldUpdate = shouldUpdate && (state.step >= 0);
        return shouldUpdate;
    }

    render(){
        return (
            <div className="wizard" key={this.state.step}>
                <WizardHeaderComponent 
                                        currentStep={this.state.step}
                                        forms_list={this.forms_list}/>
                <WizardFormComponent
                                    currentStep={this.state.step}
                                    onNext={this.onNext}
                                    onPrevious={this.onPrevious}
                                    so_form={this.forms_list[this.state.step]} />
            </div>
        );
    }
}

export default WizardComponent;