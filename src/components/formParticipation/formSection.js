import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import FormInput from './formInput';


function formSectionState(inputTraits) {
    let initialState = {
        sectionIsValid: false,
        sectionValues: {}
    }
    inputTraits.forEach( ({ name }) => {
        initialState.sectionValues[name] = '';
    })

    return initialState
}

export default class FormSection extends Component {
    constructor(props){
        super(props);
        this.state = { 
            ...formSectionState(this.props.inputProps) 
        }
    }

    onChange = (name, value) => {
        this.setState({
            sectionValues: {
                ...this.state.sectionValues,
                [name] : value
            }
        })
    }

    render () {
        return (
            <Fragment>
                {this.props.inputProps.map( htmlProperties => (
                    <Grid item key={htmlProperties.id} xs>
                        <FormInput
                            onParentChange={this.onChange}
                            inputProps={htmlProperties}
                            value={this.state.sectionValues[htmlProperties.name]}
                        />
                    </Grid>
                ))}
                {this.props.children(this.state)}
            </Fragment>
        )
    }
}