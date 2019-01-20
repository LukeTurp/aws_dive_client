import React, { PureComponent }from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';


export default class FormInput extends PureComponent {
    state = {
        isValid: false,
        didError: false
    }

    onChange = event => {
        let eventTarget = event.target;
        console.log( eventTarget.name, eventTarget.value)
        let foundError = (this.props.errorCheck) ? this.props.errorCheck(eventTarget.value) : true;
        if (foundError) {
            this.props.onParentChange(eventTarget.name, eventTarget.value)
        }
    }

    onBlur = event => {
        let eventTarget = event.target;
        if (!this.props.validate(eventTarget.value)) {

        }
    }
    

    render () {
        const { inputProps } = this.props;
        return (
            <TextField
                type={(inputProps.type) ? inputProps.type : "text"}
                autoComplete={inputProps.autoComplete}
                placeholder={inputProps.placeholder}
                name={inputProps.name}
                label={inputProps.label}
                value={this.props.value}
                onChange={this.onChange}
                error={this.state.didError}
                helperText={(!this.state.didError) ? "" : inputProps.errorMessage}
                fullWidth
            />
        );
    }
}

FormInput.propTypes = {
    inputProps: PropTypes.object.isRequired,
    onParentChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}