import React from 'react';

export class WizardFormComponent extends React.Component{
    constructor(props){
        super(props);
        this.so_form = this.props.so_form;
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    saveAndContinue(){
        this.props.onNext(this.so_form);
    }

    goBack(){
        this.props.onPrevious(this.so_form);
    }

    handleChange(obj,event){
        obj.value = event.target.value;
    }


    render(){
        var hdr = this.so_form.header;
        var btn_next_text = this.so_form.btn_next_text != null ? this.so_form.btn_next_text : "Next";
        var btn_prev_text = this.so_form.btn_prev_text != null ? this.so_form.btn_prev_text : "Go Back";
        var form_htm = [];
        console.log('length: ' + this.so_form.fields.length);
        for(var i=0; i<this.so_form.fields.length; i++){
            var cur_field = this.so_form.fields[i];
            form_htm.push(
                <div className="form-group" key={i}>
                    <label>{cur_field.label}</label>
                    <input type="text" className="form-control" placeholder={"Enter " + cur_field.label}
                     value={cur_field.value} onChange={this.handleChange.bind(this, cur_field)}/>
                </div>
            );
        }
        let selected = 'selected';
        return(
            <div className="wizard">
                <div className="panel-body">
                    {form_htm}
                </div>
                <div className="clearfix">
                    <div className="col-md-2">
                        <button type="button" className={this.props.currentStep == 0 ? "none" : "btn btn-default pull-left"}
                        onClick={this.goBack}>{btn_prev_text}</button>
                    </div>
                    <div className="col-md-8"/>
                    <div className="col-md-2">
                        <button type="button" className={selected + " btn btn-primary btn-lg pull-right"}
                        onClick={this.saveAndContinue}>{btn_next_text}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WizardFormComponent;
