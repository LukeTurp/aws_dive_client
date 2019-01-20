import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import FormParticipation from '../formParticipation';
import LoginParticipation from '../loginParticipation';

const participationStyles = theme => ({
    participationRoot: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e0e0',
    }
})

export default withStyles(participationStyles)(
    props => {
        const { classes } = props;
        return (
             <Grid 
                container 
                alignContent='center'
                className={classes.participationRoot}
                direction='column'
                justify='center'
                spacing={24}
            >
                <Switch>
                    <Route component={FormParticipation} />
                    <Route component={LoginParticipation} />
                </Switch>
                
            </Grid>
        );
    }
)
    