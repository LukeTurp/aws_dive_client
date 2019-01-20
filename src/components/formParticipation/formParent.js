import React, { Component, Fragment } from 'react';
import FormSection from './formSection';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { userSection } from '../../constants/formSections/userSection';
import { submitEndpoint } from '../../constants/urls';

export default class FormParent extends Component {
    state = {}

    submitUser = userObj => () => {
        fetch(submitEndpoint + '/register/new-user', {
            method: 'post',
            body: JSON.stringify(userObj)
        }).then( resp => console.log(resp)
        ).catch( err => console.log(err))
    }

    render() {
        return (
            <Fragment>
                <Typography variant='h4'>{userSection.sectionName}</Typography>
                <FormSection 
                    inputProps={userSection.sectionProps}
                >
                    {section =>
                        <Button
                            style={{marginTop: '2em'}}
                            disabled={section.sectionIsValid}
                            onClick={this.submitUser(section.sectionValues)}
                            color='primary'
                            variant='contained'
                        >
                        Submit New User
                        </Button>
                    }
                </FormSection>
            </Fragment>
        );
    }
}